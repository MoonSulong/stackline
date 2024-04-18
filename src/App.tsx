import { useEffect, FC } from 'react';

import { useAppDispatch, useAppSelector } from './redux/hooks';

import { fetchAsync, selectProduct } from './features/retail/retailSlice';


import Header from './components/header/Header';
import './App.css';

const App: FC = () => {
  
  const product = useAppSelector(selectProduct);
  
  const dispatch = useAppDispatch();
  
  useEffect(()=>{
    dispatch(fetchAsync());
  },[dispatch])
  
  return (
    <div className="App">
      <Header />
      {product?.title}
    </div>
  );
}

export default App;
