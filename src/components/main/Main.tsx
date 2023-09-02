import { FC, useEffect, useState } from 'react';
import Header from '../header/Header';
import Card from '../card/Card';
import { observer } from 'mobx-react-lite';
import todo from '../../store/todo'
import { faker } from '@faker-js/faker';
import './Main.css'


const Main: FC = observer(() => {
  const [avatar, setAvatar] = useState<string>("")

  useEffect(() => {
    todo.getAllfromPH();
    setAvatar(faker.image.avatar());
    console.log("render main")
  }, []);

  return (
    <div className='section'>
      <Header />
      <div className='cards'>
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
    </div>
  );
});

export default Main;
