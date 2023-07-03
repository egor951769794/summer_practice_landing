import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';
import Desc from './components/Desc/Desc';
import About from './components/About/About';
import Background from './components/Background/Background';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div>
      <Wrapper content={<Header lang='en'></Header>}></Wrapper>
      <Wrapper content={<Desc lang='en'></Desc>}></Wrapper>
      <Background 
        color='#F6F6F6' 
        content={<Wrapper content={<About lang='en'></About>}></Wrapper>}>
      </Background>
      <Wrapper content={<Skills lang='en'></Skills>}></Wrapper>
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
