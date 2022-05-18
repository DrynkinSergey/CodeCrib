import React from 'react';
import './style.scss';

const Header = () => {
  return (
      <header>
        Добро пожаловать!
      </header>
  )
}

const Navigation = () => {
  return (
      <nav>
        <ul>
          <li>Моя дорожная карта</li>
          <li>Хуки</li>
          <li>Методичка</li>
        </ul>
      </nav>
  )
}


function App() {
  return (
    <div className="App">
      <main>
      <Header/>
        <Navigation/>
      </main>
    </div>
  );
}

export default App;
