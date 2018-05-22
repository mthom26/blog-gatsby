import React from 'react';

import Header from './src/components/Header';
import Footer from './src/components/Footer';
import HeaderImage from './src/components/HeaderImage';

class ReplaceComponentRenderer extends React.Component {
  constructor(props) {
    super(props);
  }

  // Can't query for graphql data here so <HeaderImage /> won't work?
  render() {
    console.log(this.props);
    return(
      <div>
        <div style={{padding: '30px', backgroundColor: 'white'}}>Gatsby Browser</div>
        <Header />
        
        {React.createElement(this.props.pageResources.component, {
          ...this.props,
          ...this.props.pageResources.json
        })}
      </div>
    );
  }
}

exports.replaceComponentRenderer = ({ props, loader }) => {
  if (props.layout) {
    //return undefined
  }
  return React.createElement(ReplaceComponentRenderer, { ...props, loader })
};