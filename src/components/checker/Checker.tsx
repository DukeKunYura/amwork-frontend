import { FC } from 'react';
import { ICheck } from '../../interfaces/data';
import todo from '../../store/todo';
import { observer } from 'mobx-react-lite';
import './Checker.css'

const Checker: FC<ICheck> = observer(({
    completed,
    id,
}) => {

    return (
        <>
            <input className='checker' type='checkbox' checked={completed} onChange={() => { todo.toggle(id) }}></input>
        </>
    );
});

export default Checker;
