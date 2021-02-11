import './App.css';
import undraw_content_team_3epn from './components/undraw_content_team_3epn.svg';

function App() {
  return (
    <div>
      <header className="App-header">
        <nav>
          <div className="logo">
            <h1>Modern Website</h1>
          </div>
          <div className="menu">
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>
        </nav>  

        <section>
          <div className="leftside">
            <img src={undraw_content_team_3epn} alt="pic"/>
          </div>
          <div className="rightside">
            <h1>OUR MODERN WEBSITE</h1>
            <p>We are the best Website Developers</p>
            <button>Welcome</button>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
