import React from 'react';
import CssComponents from './CSS_React/CssComponets';
import CssFramework from './CSS_React/CssFramework';
import CssAnima from './CSS_Anima/CSSAnima';
import AnimaSlide from './AnimaSlide/App';


const App = () => {
  return (
    <>
      <h1>CSS Styled-Components</h1>
      <CssComponents />
      <hr />
      <h1>CSS com Framework</h1>
      <CssFramework />
      <h1>CSS com Animações</h1>
      <CssAnima />
      <AnimaSlide />

    </>
  )
};

export default App;
