import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';
import Desc from './components/Desc/Desc';
import About from './components/About/About';
import Background from './components/Background/Background';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contacts from './components/Contacts/Contacts';

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
      <Background
        color='#F6F6F6'
        content={<Wrapper content={<Portfolio lang='en'></Portfolio>}></Wrapper>}
      ></Background>
      <Wrapper content={<Contacts lang='en'></Contacts>}></Wrapper>
    </div>
  );
}

export default App;
