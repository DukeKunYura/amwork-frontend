import { FC } from 'react';
import { IDataItem } from '../../interfaces/data';
import { faker } from '@faker-js/faker';
import './Card.css';

const Card: FC<IDataItem> = ({
    title,
    completed,
    id,
    userId
}) => {

    return (
        <>
            <div className='cardTitle'>{title}</div>
            <div>{id}</div>
            <div>{completed ? "+" : "-"}</div>
            <div>{userId}</div>
            <div className='user'>{faker.internet.userName()}</div>
        </>
    );
};

export default Card;
