import { Outlet } from 'react-router-dom';
import { StyledList, StyledNavLink } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <div>
        <nav>
          <StyledList>
            <li>
              <StyledNavLink to="/">Home</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="movies">Movies</StyledNavLink>
            </li>
          </StyledList>
        </nav>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
};
