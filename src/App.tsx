import './App.css';
import ImgDashboard from './components/ui/ImgDashboard';
import ImgLogo from './components/ui/ImgLogo';

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
          <div className="sidebar-item">
            <ImgDashboard />
          </div>
          <div className="sidebar-item">
            <ImgDashboard />
          </div>
          <div className="sidebar-item">
            <ImgDashboard />
          </div>
        </nav>
        <section className="section">Section</section>
      </main>
    </div>
  );
}

export default App;
