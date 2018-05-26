import React, { createElement } from 'react';
import { Transition } from "react-transition-group";
import createHistory from "history/createBrowserHistory";

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
      nextPageResources: {},
      paths: {
        current: props.location.pathname,
        next: props.location.pathname
      },
      newPaths: {
        current: this.props.location.pathname,
        next: this.props.location.pathname
      }
    };

    this.listenerHandler = this.listenerHandler.bind(this);
  }

  listenerHandler(event) {
    const nextPageResources = this.props.loader.getResourcesForPathname(
      event.detail.pathname,
      nextPageResources => this.setState({
        nextPageResources: nextPageResources,
        newPaths: {
          current: this.props.location.pathname,
          next: nextPageResources.page.path
        },
        exiting: true
      })
    ) || {}
    //this.setState({ exiting: true, nextPageResources })
    //console.log(nextPageResources);
  }

  componentDidMount() {
    window.addEventListener(historyExitingEventType, this.listenerHandler)
  }

  componentWillUnmount() {
    window.removeEventListener(historyExitingEventType, this.listenerHandler)
  }

  componentWillReceiveProps(nextProps) {
    // Need to decide on transition type here, the problem is react renders
    // twice, once for the current pair of locations then for the new pair.
    // Need to prevent the first re render with the old pair of props
    //console.log(this.props);
    //console.log(nextProps);
    
    if (this.props.location.key !== nextProps.location.key) {
      this.setState(() => ({
        exiting: false,
        nextPageResources: {},
        paths: {
          current: this.props.location.pathname,
          next: nextProps.location.pathname
        }
      }));
    }
  }
  
  render() {
    console.log('--------------------------');
    //console.log(this.state.newPaths);
    const transitionProps = {
      timeout: {
        enter: 0,
        exit: timeout,
      },
      appear: true,
      in: !this.state.exiting,
      key: this.props.location.key,
    };

    const paths = this.state.newPaths;
    
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
                style: getTransition({ status, timeout, paths }),
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