import { FC, useEffect, useState } from 'react';
import Card from '../card/Card';
import { observer } from 'mobx-react-lite';
import todo from '../../store/todo'
import { faker } from '@faker-js/faker';

const Main: FC = observer(() => {
  const [avatar, setAvatar] = useState<string>("")

  useEffect(() => {
    todo.getAllfromPH();
    setAvatar(faker.image.avatar());
    console.log("render main")
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
          avatar={avatar}
        />)}
    </div>
  );
});

export default Main;
