import './App.css';
import { useState, useEffect, useContext} from 'react'
import React from 'react';
function App() {

  const [Age, setAge] = useState(19);
  const [Sibling, setSibling] = useState(10);
  const [Count, setCount] = useState(0);
  const [Theme, setTheme] = useState('light')
  useEffect(()=>{document.title = "You are "+ Age + " years old"});
  
  const ThemeContext = React.createContext(Theme);
  const theme = useContext(ThemeContext);

  return (
    <div className='main-container'>
    <div className='side-bar'> React Hooks </div>
    <div className='container'
      style={{
        background: theme === 'dark'? 'black' : 'White',
        color: theme === 'dark'? 'white' : 'black',
      }}
    >
      <div>
        <h1>Today I am {Age} Years of Age</h1>
        <h1> I have {Sibling} Siblings</h1>
        <button onClick={() => setAge(Age+1)}>Get older!</button>&emsp;
        <button onClick={() => setSibling(Sibling+1)}>More Siblings!</button>
      </div>

      <div>
        <h1>Count value is: {Count}</h1>
        <button onClick={() => setCount(0)}>Reset</button>&emsp;
        <button onClick={() => setCount(Count+1)}>Plus (+)</button>&emsp;
        <button onClick={() => (Count>0) ? setCount(Count-1) : setCount(Count)}>Minus (-)</button>
      </div>

      <div>
        <h1>Look at the title of the curent tab in your browser</h1>
        <button onClick={() => setAge(Age+1)}>Update Title!!</button>
      </div>

      <div>
        <h1>Change theme</h1>
        <button onClick={() => (theme === 'dark') ? setTheme('light') : setTheme('dark')}>{theme}</button>
        <br></br><br></br>The theme is here {theme}
      </div>
    </div>
    </div>
  );
}

export default App;
