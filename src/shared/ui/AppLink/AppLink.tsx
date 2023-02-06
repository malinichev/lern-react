import { Link, LinkProps } from "react-router-dom";
import cls from "./AppLink.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { FC } from "react";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDRY = "secondry",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className,
    to,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.appLink, {}, [cls[theme], className])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
