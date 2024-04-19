import { useEffect, FC } from 'react';

import { useAppDispatch } from './redux/hooks';

import { fetchAsync } from './features/retail/retailSlice';

import Dashboard from './components/dashboard/Dashboard';


import Header from './components/header/Header';
import './App.css';

const App: FC = () => {
  
  const dispatch = useAppDispatch();
  
  useEffect(()=>{
    dispatch(fetchAsync());
  },[dispatch])
  
  return (
    <div className="App">
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
