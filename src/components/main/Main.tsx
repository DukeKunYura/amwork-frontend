import { FC, useEffect, useState } from 'react';
import { getData } from '../../api/getData';
import { TData } from '../../interfaces/data';
import Card from '../card/Card';

const Main: FC = () => {
  const [data, setData] = useState<TData | []>([]);

  useEffect(() => {
    getData().then(res => setData(res));
  }, []);

  return (
    <>
      {data && data.map(item =>
        <Card
          key={item.id}
          title={item.title}
          completed={item.completed}
          id={item.id}
          userId={item.userId}
        />)}
    </>
  );
};

export default Main;
