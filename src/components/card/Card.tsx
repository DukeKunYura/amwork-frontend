import { FC } from 'react';
import { IDataItem } from '../../interfaces/data';
import { faker } from '@faker-js/faker';
import './Card.css';
import Checker from '../checker/Checker';
import { observer } from 'mobx-react-lite';

const Card: FC<IDataItem> = observer(({
    title,
    completed,
    id,
    userId,
    avatar,
}) => {

    return (
        <>
            <div className='cardTitle'>{title}</div>
            <div>{id}</div>
            <div>{completed ? "+" : "-"}</div>
            <div>{userId}</div>
            <Checker completed={completed} id={id} />
            <div className='user'>{faker.internet.userName()}</div>
            <img className='avatar' src={avatar}></img>
        </>
    );
});

export default Card;
