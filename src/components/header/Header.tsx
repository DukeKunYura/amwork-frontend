import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import todo from '../../store/todo'
import './Header.css'
import icon from '../../img/icon.png'

/**
 * Компонент рендерит хедер с общим количеством карточек
 */
const Header: FC = observer(() => {

    return (
        <div className='header'>
            <div className='today'>Today</div>
            <img className='buttonAdd' src={icon}></img>
            <div className='quantity'>{todo.todos.length}</div>
        </div>

    );
});

export default Header;
