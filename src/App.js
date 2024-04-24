import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from './view/UI/Header';
import Grid from './view/components/Grid';

import { evolveGrid } from './store/slices/gridSlice';

function App() {
  const dispatch = useDispatch();
  const { grid } = useSelector(state => state.grid);
  const handleClick = () => {
    dispatch(evolveGrid(grid));
  };
  return (
    <div className="App">
      <Header title="Game of Life" />
      <main className="app-main">
        <Grid rows="3" columns="3" />
        <button onClick={handleClick}>Evolve</button>
      </main>
    </div>
  );
}

export default App;
