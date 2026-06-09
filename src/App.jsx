
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import { Navigate, Outlet } from 'react-router-dom';
import Context from './context/Context';
import Portfolio from './components/pages/Portfolio';
import EffectsToggle from './components/EffectsToggle';

export function AppLayout() {
  return (
    <div className="App">
      <Context>
        <Outlet />
        <EffectsToggle />
      </Context>
    </div>
  );
}

export const routes = [
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Navigate to="/portfolio" replace /> },
      { path: "/portfolio", element: <Home /> },
      { path: "/portfolio/contact", element: <Contact /> },
      { path: "/portfolio/projects", element: <Portfolio /> },
    ]
  }
];

export default AppLayout;
