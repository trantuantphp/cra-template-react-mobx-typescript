import React from "react";
import { Spin } from "antd";
import "./Loading.scss";

export default class Loading extends React.PureComponent {
  render() {
    return (
      <div className="ab-loading">
        <Spin />
      </div>
    );
  }
}
