import { useDispatch, useSelector } from 'react-redux';
import Cell from './Cell';
import './Grid.css';
import { useState } from 'react';
import { setEvoultionRate } from '../../store/slices/gridSlice';

export default function Grid({ data }) {
  const { grid } = useSelector(state => state.grid);
  const [rate, setRate] = useState(60);
  const dispatch = useDispatch();
  const handleRateChange = event => {
    const currentRate = parseFloat(event.target.value);
    setRate(currentRate);
    const power = 4 - (currentRate / 100) * 4;
    let multiplier = 2 ** power;
    if (power === 4) {
      multiplier = 0;
    }
    const duration = 125 * multiplier;
    dispatch(setEvoultionRate(duration));
  };

  const renderCells = () =>
    grid.map((row, rowId) => (
      <div className="row" key={rowId}>
        {row.map((column, colId) => (
          <Cell
            key={`${rowId},${colId}`}
            rowId={rowId}
            columnId={colId}
            isAlive={grid[rowId][colId].isAlive}
          />
        ))}
      </div>
    ));

  return (
    <>
      <div className="grid">{renderCells()}</div>
      <div>
        <label htmlFor="rateSlider">Evolution Speed:</label>
        <input
          id="rateSlider"
          value={rate}
          type="range"
          min={0}
          max={100}
          step={20}
          onChange={event => handleRateChange(event)}
          list="stepList"
        />
        <datalist id="stepList">
          <option>0</option>
          <option>20</option>
          <option>40</option>
          <option>60</option>
          <option>80</option>
          <option>100</option>
        </datalist>
      </div>
    </>
  );
}
