
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import cls from "./NavBar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavBarType {
  className?: string;
}

export const NavBar = ({ className }: NavBarType) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.linksContainer}>
        <AppLink theme={AppLinkTheme.SECONDRY} to={"/"}>Главная</AppLink>
        <AppLink theme={AppLinkTheme.SECONDRY} to={"/about"}>О сайте</AppLink>
      </div>
    </div>
  );
};
