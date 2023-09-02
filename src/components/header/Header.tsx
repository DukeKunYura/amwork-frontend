import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import './Header.css'

const Header: FC = observer(() => {

  return (
    <div className='header'>
      <div className='today'>Today</div>
      <button className='buttonAdd'></button>
      <div className='quantity'></div>
    </div>

  );
});

export default Header;
