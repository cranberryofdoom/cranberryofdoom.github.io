import { Component } from "react";
import { throttle } from "lodash";

export default class ThrottledResize extends Component {
  componentDidMount() {
    const { onThrottledResize } = this.props;
    if (onThrottledResize) onThrottledResize();
    window.addEventListener("resize", throttle(onThrottledResize, 200), false);
  }

  componentWillUnmount() {
    window.removeEventListener(
      "resize",
      throttle(onThrottledResize, 200),
      false
    );
  }

  render() {
    return this.props.children;
  }
}
