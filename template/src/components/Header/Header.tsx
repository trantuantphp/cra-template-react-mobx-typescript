import React, { FC } from "react";
import { useTranslation } from "react-i18next";

const Header: FC = () => {
  const { i18n } = useTranslation();
  return (
    <div>
      <button onClick={() => i18n.changeLanguage("en")}>EN</button>
      <button onClick={() => i18n.changeLanguage("vi")}>VI</button>
    </div>
  );
};

export default Header;
