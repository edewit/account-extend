import {
  Nav,
  NavItem,
  NavItemProps,
  NavList,
  PageSidebar,
  PageSidebarBody,
} from "@patternfly/react-core";
import { PropsWithChildren, MouseEvent as ReactMouseEvent } from "react";
import { useTranslation } from "react-i18next";
import { environment } from "./environment";
import { useHref, useLinkClickHandler } from "react-router-dom";
import { routes } from "./routes";

type NavLinkProps = NavItemProps & {
  path?: string;
};

const NavLink = ({
  path,
  isActive,
  children,
}: PropsWithChildren<NavLinkProps>) => {
  const menuItemPath = `${new URL(environment.baseUrl).pathname}${path}`;
  const href = useHref(menuItemPath);
  const handleClick = useLinkClickHandler(menuItemPath);

  return (
    <NavItem
      to={href}
      onClick={(e) =>
        handleClick(
          e as unknown as ReactMouseEvent<HTMLAnchorElement, MouseEvent>
        )
      }
      isActive={isActive}
    >
      {children}
    </NavItem>
  );
};

export const PageNav = () => {
  const { t } = useTranslation();
  return (
    <PageSidebar>
      <PageSidebarBody>
        <Nav>
          <NavList>
            {routes[0].children
              ?.filter((r) => r.path)
              .map(({ path }) => (
                <NavLink
                  key={path}
                  path={path}
                  isActive={path === window.location.pathname}
                >
                  {t(path!.substring(path!.lastIndexOf("/") + 1, path!.length))}
                </NavLink>
              ))}
          </NavList>
        </Nav>
      </PageSidebarBody>
    </PageSidebar>
  );
};
