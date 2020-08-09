import React from "react";
import { Empty } from "antd";
import { ImgEmpty } from "assets/images";

const CustomEmpty = () => (
  <Empty image={ImgEmpty} imageStyle={{ height: 60 }} description={<span>#nothing_in_here.</span>}></Empty>
);

export default CustomEmpty;
