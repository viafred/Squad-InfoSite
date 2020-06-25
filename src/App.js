import React from 'react';

import './App.scss';

import NavbarComponent from './components/navbar/navbar.component';
import FooterComponent from './components/footer/footer.component';
import ContentComponent from './components/content/content.component';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <ContentComponent />
      <FooterComponent />
    </div> 
  );
}

export default App;
