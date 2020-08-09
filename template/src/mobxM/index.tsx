import React, { ReactType } from "react";
import "mobx-react-lite/batchingForReactDom";
import { configure } from "mobx";
import { Provider } from "mobx-react";
import stores from "./stores";

configure({
  enforceActions: "always",
});

interface Props {
  children: ReactType | unknown;
}

const MobxWrapper = (props: Props) => <Provider {...stores}>{React.Children.only(props.children)}</Provider>;

export default MobxWrapper;
