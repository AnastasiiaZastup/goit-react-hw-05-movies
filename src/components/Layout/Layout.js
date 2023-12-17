import { NavLink, Outlet } from 'react-router-dom';
import { StyledList } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <header>
        <StyledList>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </StyledList>
      </header>

      <Outlet />
    </>
  );
};
