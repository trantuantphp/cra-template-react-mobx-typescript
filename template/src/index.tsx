import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { ConfigProvider } from "antd";
import "utils/i18n";
import "styles/global.scss";
import * as serviceWorker from "utils/serviceWorker";
import MobxWrapper from "mobxM";
import RouterWrapper from "routes";
import Empty from "components/Empty";
import "antd/dist/antd.css";
import Loading from "components/Loading";

(function starting() {
  const App = () => (
    <React.StrictMode>
      <Suspense fallback={<Loading />}>
        <MobxWrapper>
          <ConfigProvider renderEmpty={Empty}>
            <RouterWrapper />
          </ConfigProvider>
        </MobxWrapper>
      </Suspense>
    </React.StrictMode>
  );
  serviceWorker.unregister();
  ReactDOM.render(<App />, document.getElementById("root"));
})();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
