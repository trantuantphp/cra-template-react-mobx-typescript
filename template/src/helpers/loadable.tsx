import React, { Component, ReactType } from "react";

export default function asyncComponent(importComponent: Function) {
  interface State {
    component?: ReactType;
  }
  class AsyncComponent extends Component<{}, State> {
    constructor(props: {}) {
      super(props);
      this.state = {
        component: null,
      };
    }
    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({
        component: component,
      });
    }
    render() {
      const C: ReactType = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }
  return AsyncComponent;
}
