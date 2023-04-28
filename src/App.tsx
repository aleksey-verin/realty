import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { sidebarRoutes } from './routes/routes';
import './App.css';

function App() {
  return (
    <div className="container">
      <HashRouter>
        <Header />
        <main className="main">
          <Sidebar />
          <Routes>
            {sidebarRoutes.map(({ element, path }, index) => (
              <Route key={index} element={element} path={path} />
            ))}
            <Route path="*" element={<Navigate replace to={sidebarRoutes[0].path} />} />
          </Routes>
        </main>
      </HashRouter>
    </div>
  );
}

export default App;
