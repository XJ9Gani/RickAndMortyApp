import { NavLink } from "react-router-dom";
import { HeaderStyle, NavContainer, NavItem } from "../styles/Header";
import { HeaderStyleIconStyle } from "../styles/Icon";
import { HeaderIcons } from "../Icon/HeaderIcons";

import { useCallback } from "react";
export default function Header() {
  const activeLinkHandler = useCallback(
    ({ isActive }) =>
      isActive
        ? {
            textDecoration: "none",
            color: "rgba(67, 208, 73, 1)",
          }
        : { textDecoration: "none", color: "rgba(110, 121, 140, 1)" },
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
          <NavLink to="/characters" style={activeLinkHandler}>
            <NavItem>
              <HeaderStyleIconStyle>
                {HeaderIcons.charIcon}
              </HeaderStyleIconStyle>
              Персонажи
            </NavItem>
          </NavLink>

          <NavLink to="/locations" style={activeLinkHandler}>
            <NavItem>
              <HeaderStyleIconStyle>
                {HeaderIcons.locationIcon}
              </HeaderStyleIconStyle>
              Локации
            </NavItem>
          </NavLink>

          <NavLink to="/episodes" style={activeLinkHandler}>
            <NavItem>
              <HeaderStyleIconStyle>
                {HeaderIcons.episodeIcon}
              </HeaderStyleIconStyle>
              Эпизоды
            </NavItem>
          </NavLink>

          <NavLink to="/" style={activeLinkHandler}>
            <NavItem>
              <HeaderStyleIconStyle>
                {HeaderIcons.settingsIcon}
              </HeaderStyleIconStyle>
              Настройки
            </NavItem>
          </NavLink>
        </NavContainer>
      </HeaderStyle>
    </>
  );
}
