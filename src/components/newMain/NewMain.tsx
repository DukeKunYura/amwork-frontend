import { FC, useEffect, useState } from 'react';
import { TData } from '../../interfaces/data';
import Card from '../card/Card';
import { observer } from 'mobx-react-lite';
import todo from '../../store/todo'

const Main: FC = observer(() => {

  useEffect(() => {
    todo.getAllfromPH();
  }, []);

  return (
    <div className='section'>
      {todo.todos.map(item =>
        <Card
          key={item.id}
          title={item.title}
          completed={item.completed}
          id={item.id}
          userId={item.userId}
        />)}
    </div>
  );
});

export default Main;
