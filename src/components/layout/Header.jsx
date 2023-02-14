import {useContext} from 'react';
import { PageContext } from '../../context/PageContext';

const Header = () => {
    const {setActivePage} = useContext(PageContext);

  return (
    <header>
      <h1>Caraway Challenge</h1>
      <nav>
        <button className="nav-button" onClick={() => setActivePage(0)}>Button</button>
        <button className="nav-button" onClick={() => setActivePage(1)}>Local Products</button>
        <button className="nav-button" onClick={() => setActivePage(2)}>AllBirds Products</button>
      </nav>
    </header>
  );
};

export default Header;
