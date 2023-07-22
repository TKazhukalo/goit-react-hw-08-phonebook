import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 600;
  font-size:20px;
  color: #3768e3;
  &:hover{
    color:#b2b208;
  }
`;
export const HeaderNav = styled.nav`
    display: flex;
    align-items: center;
`;