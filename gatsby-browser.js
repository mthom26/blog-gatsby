import React, { createElement } from 'react';
import { Transition } from "react-transition-group";
import createHistory from "history/createBrowserHistory";

//import Header from './src/components/Header';
//import Footer from './src/components/Footer';
//import HeaderImage from './src/components/HeaderImage';
import getTransition from './src/utils/getTransition';

const timeout = 1000;
const historyExitingEventType = `history::exiting`;

const defaultStyle = {
  transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
  transform: 'translateX(80%)',
  opacity: 0
};

const getUserConfirmation = (pathname, callback) => {
  const event = new CustomEvent(historyExitingEventType, { detail: { pathname } })
  window.dispatchEvent(event)
  setTimeout(() => {
    callback(true)
  }, timeout)
};
const history = createHistory({ getUserConfirmation });
// block must return a string to conform
history.block((location, action) => location.pathname);
exports.replaceHistory = () => history;

class ReplaceComponentRenderer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exiting: false,
      nextPageResources: {}
    };

    this.listenerHandler = this.listenerHandler.bind(this);
  }

  listenerHandler(event) {
    const nextPageResources = this.props.loader.getResourcesForPathname(
      event.detail.pathname,
      nextPageResources => this.setState({ nextPageResources })
    ) || {}
    this.setState({ exiting: true, nextPageResources })
  }

  componentDidMount() {
    window.addEventListener(historyExitingEventType, this.listenerHandler)
  }

  componentWillUnmount() {
    window.removeEventListener(historyExitingEventType, this.listenerHandler)
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props.location);
    console.log(nextProps.location);
    if (this.props.location.key !== nextProps.location.key) {
      this.setState({ exiting: false, nextPageResources: {} })
    }
  }
  // Can't query for graphql data here so <HeaderImage /> won't work?
  render() {
    //console.log(this.props);
    const transitionProps = {
      timeout: {
        enter: 0,
        exit: timeout,
      },
      appear: true,
      in: !this.state.exiting,
      key: this.props.location.key,
    };
    /*
    const Page = React.createElement(this.props.pageResources.component, {
      ...this.props,
      ...this.props.pageResources.json
    });
    */
    return(
      <div>
        <Transition {...transitionProps}>
          {
            (status) => createElement(this.props.pageResources.component, {
              ...this.props,
              ...this.props.pageResources.json,
              transition: {
                status,
                timeout,
                style: getTransition({ status, timeout }),
                nextPageResources: this.state.nextPageResources,
              },
            })
          }
        </Transition>
      </div>
    );
  }
}

exports.replaceComponentRenderer = ({ props, loader }) => {
  if (props.layout) {
    return undefined
  }
  return React.createElement(ReplaceComponentRenderer, { ...props, loader })
};