import { NavLink } from "react-router-dom";
import {
  HeaderStyle,
  IconStyle,
  NavContainer,
  NavItem,
} from "../styles/Header";
import { Icon } from "../Icon";
import { useCallback } from "react";
export default function Header() {
  const activeLinkHandler = useCallback(
    ({ isActive }) =>
      isActive
        ? {
            textDecoration: "none",
            color: "rgba(67, 208, 73, 1)",
          }
        : { textDecoration: "none", color: "" },
    []
  );

  const activeIcon = useCallback(
    ({ isActive }) =>
      isActive
        ? {
            backgroundColor: "green", // Стиль для активной иконки
          }
        : { backgroundColor: "" }, // Отсутствие фона для неактивной иконки
    []
  );
  return (
    <>
      <HeaderStyle variant="dark">
        <NavContainer>
          <NavLink to="/" style={activeLinkHandler}>
            <NavItem>
              <IconStyle>{Icon.charIcon}</IconStyle>
              Персонажи
            </NavItem>
          </NavLink>

          <NavLink to="/locations" style={activeLinkHandler}>
            <NavItem>
              <IconStyle>{Icon.locationIcon}</IconStyle>
              Локации
            </NavItem>
          </NavLink>

          <NavLink to="/episodes" style={activeLinkHandler}>
            <NavItem>
              <IconStyle>{Icon.episodeIcon}</IconStyle>
              Эпизоды
            </NavItem>
          </NavLink>

          <NavLink to="/" style={activeLinkHandler}>
            <NavItem>
              <IconStyle>{Icon.settingsIcon}</IconStyle>
              Настройки
            </NavItem>
          </NavLink>
        </NavContainer>
      </HeaderStyle>
    </>
  );
}
