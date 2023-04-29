import Sidebar from './components/Sidebar';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { routes, sidebarRoutes } from './routes/routes';
import './App.css';
import Logo from './components/Logo';

function App() {
  return (
    <div className="container">
      <HashRouter>
        <aside>
          <Logo />
          <Sidebar />
        </aside>
        <Routes>
          {sidebarRoutes.map(({ element, path }, index) => (
            <Route key={index} element={element} path={path} />
          ))}
          {/* <Route element={<DealsDetails />} path={routes.dealsDetails} /> */}
          <Route path="*" element={<Navigate replace to={routes.deals} />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
