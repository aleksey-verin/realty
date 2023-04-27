import './App.css';
import ImgLogo from './components/ui/ImgLogo';
import SidebarItem from './components/SidebarItem';
import { routes } from './routes/routes';

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="header-logo">
          <ImgLogo />
        </div>
        <div className="header-menu">MENU</div>
      </header>
      <main className="main">
        <nav className="sidebar">
          {routes.map((item) => (
            <SidebarItem data={item} />
          ))}
        </nav>
        <section className="section">Section</section>
      </main>
    </div>
  );
}

export default App;
