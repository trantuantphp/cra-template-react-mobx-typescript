import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import logo from "./logo.svg";
import "./App.scss";
import { inject, observer } from "mobx-react";
import { UserStoreInterface } from "mobxM/stores/UserStore";
import Header from "components/Header";

interface LandingProps {
  UserStore: UserStoreInterface;
}

const Landing: FC<LandingProps> = (props: LandingProps) => {
  const { t } = useTranslation();
  const { UserStore } = props;
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{UserStore.hello}</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <p>{t("home.hello_world")}</p>
      </header>
    </div>
  );
};

export default inject("UserStore")(observer(Landing));
