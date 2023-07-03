import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';
import Desc from './components/Desc/Desc';

function App() {
  return (
    <div>
      <Wrapper content={<Header lang='en'></Header>}></Wrapper>
      <Wrapper content={<Desc lang='en'></Desc>}></Wrapper>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
