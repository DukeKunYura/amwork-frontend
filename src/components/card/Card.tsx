import { FC } from 'react';
import { IDataItem } from '../../interfaces/data';

const Card: FC<IDataItem> = ({
    title,
    completed,
    id,
    userId
}) => {

    return (
        <>
            <div >{title}</div>
            <div>{id}</div>
            <div>{completed ? "+" : "-"}</div>
            <div>{userId}</div>
        </>
    );
};

export default Card;
