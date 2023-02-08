import "shared/config/i18n/i18n";
import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

const App = () => {
  const { theme } = useTheme();

  return (
    <Suspense fallback="">
      <div className={classNames("app", {}, [theme])}>
        <MyComponent />
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  );

  function MyComponent() {
    const { t, i18n } = useTranslation();

    const toggleTranslate = () =>
      i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");

    return (
      <>
        <button onClick={toggleTranslate}>перевод</button>
        <br />
        <h1>{t("Тестовый перевод")}</h1>
        <br />
      </>
    );
  }
}

export default App;
