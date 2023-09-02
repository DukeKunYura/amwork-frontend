import { FC } from 'react';
import { IDataItem } from '../../interfaces/data';
import { faker } from '@faker-js/faker';
import './Card.css';
import Checker from '../checker/Checker';
import { observer } from 'mobx-react-lite';
import dayjs from 'dayjs';

/**
 * Компонент рендерит карточку тудушки с данными из props
 */
const Card: FC<IDataItem> = observer(({
    title,
    completed,
    id,
    avatar,
}) => {
    const startDate = dayjs().format('MMM D, hh:mm A');
    const endDate = dayjs().add(280, 'hour',).format('MMM D, hh:mm A');
    const lorem = faker.lorem.lines();

    return (
        <div className='cardOut'>
            <div className='card'>
                <Checker completed={completed} id={id} />
                <div className='cardTitle'>
                    {title}
                </div>
                <div className='dateField'>
                    <div>{startDate}</div>
                    <div>{endDate}</div>
                </div>
                <div className='textLine'>{lorem}</div>
                <div className='tags'>
                    <div className='entity'>Entity title</div>
                    <div className='front'>Front-end</div>
                    <img className='avatar' src={avatar}></img>
                </div>
            </div>
        </div>

    );
});

export default Card;
