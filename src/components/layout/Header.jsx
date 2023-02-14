import {useContext} from 'react';
import { PageContext } from '../../context/PageContext';

const Header = () => {
    const {setActivePage} = useContext(PageContext);

  return (
    <header>
      <h1>Caraway Challenge</h1>
      <nav>
        <div onClick={() => setActivePage(0)}>Button</div>
        <div onClick={() => setActivePage(1)}>Local Products</div>
        <div onClick={() => setActivePage(2)}>AllBirds Products</div>
      </nav>
    </header>
  );
};

export default Header;
