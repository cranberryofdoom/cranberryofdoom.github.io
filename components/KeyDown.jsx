import { Component } from "react";
import PropTypes from "prop-types";

export default class KeyDown extends Component {
  componentDidMount() {
    this.addEventListeners();
  }

  componentDidUpdate(prevProps) {
    const { disable } = this.props;
    if (disable !== prevProps.disable) {
      if (disable) this.removeEventListeners();
      else this.addEventListeners();
    }
  }

  componentWillUnmount() {
    this.removeEventListeners();
  }

  addEventListeners() {
    if (this.props.onKeyDown) {
      window.document.addEventListener("keydown", this.props.onKeyDown, {
        useCapture: true
      });
    }
  }

  removeEventListeners() {
    if (this.props.onKeyDown) {
      window.document.removeEventListener("keydown", this.props.onKeyDown, {
        useCapture: true
      });
    }
  }

  render() {
    return null;
  }
}

KeyDown.propTypes = {
  onKeyDown: PropTypes.func,
  disable: PropTypes.bool
};
