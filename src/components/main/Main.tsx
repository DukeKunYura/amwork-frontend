import { FC, useEffect, useState } from 'react';
import { getData } from '../../api/getData';
import { TData } from '../../interfaces/data';

const App: FC = () => {
    const [data, setData] = useState<TData | []>([]);

    useEffect(() => {
        getData().then(res => setData(res));
      }, []);

    return (
      <>
        {data && data.map(item => <div key={item.id}>{item.title}</div>)}
        Hey
      </>
    );
  };
  
  export default App;
  