import React from 'react';
import { withRouter } from 'react-router';

class ScrollToTop extends React.Component {

// Use componentDidUpdate to monitor our current position vs last position
componentDidUpdate(prevProps) {
  if (this.props.location !== prevProps.location) {
    // use vanilla JS DOM manipulation to scroll to the top based on logic
    window.scrollTo(0, 0);
  }
}

//use this.props.children to render anything wrapped by our component
  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
