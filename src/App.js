import logo from './logo.svg';
import './App.css';
import Introduction from './components/Introduction/Introduction';
import Header from './components/Header/Header';
import About from './components/About/About';
import ProductList from './components/ProductList/ProductList';
import Contact from './components/Contact/Contact';
import Toggle from './components/Toggle/Toggle';
import { useContext } from 'react';
import { ThemeContext } from './context';

function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white",
    }}>
      <Toggle></Toggle>
      <Introduction></Introduction>
      <About></About>
      <ProductList></ProductList>
      <Contact></Contact>
    </div>
  );
}

export default App;
