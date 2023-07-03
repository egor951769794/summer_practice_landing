import './App.css';
import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';
import Desc from './components/Desc/Desc';
import About from './components/About/About';
import Background from './components/Background/Background';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contacts from './components/Contacts/Contacts';
import { useState } from 'react';

export default function App() {
  const [lang, setLang] = useState('ru');

  return (
    <div>
      <Wrapper content={<Header lang={lang}></Header>}></Wrapper>
      <Wrapper content={<Desc lang={lang} switcher={setLang}></Desc>}></Wrapper>
      <Background 
        color='#F6F6F6' 
        content={<Wrapper content={<About lang={lang}></About>}></Wrapper>}>
      </Background>
      <Wrapper content={<Skills lang={lang}></Skills>}></Wrapper>
      <Background
        color='#F6F6F6'
        content={<Wrapper content={<Portfolio lang={lang}></Portfolio>}></Wrapper>}
      ></Background>  
      <Wrapper content={<Contacts lang={lang}></Contacts>}></Wrapper>
    </div>
  );
}
