import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Contain, Lists } from './Layout.styled';
export const Layout = () => {
  return (
    <Contain>
      <header>
        <Lists>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </Lists>
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Contain>
  );
};
