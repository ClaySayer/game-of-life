import { useDispatch } from 'react-redux';
import './Cell.css';
import { toggleIsAlive } from '../../store/slices/gridSlice';

export default function Cell({ rowId, columnId, isAlive }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleIsAlive({ rowId, columnId, isAlive }));
  };

  const className = isAlive ? 'cell isAlive' : 'cell';
  return <div className={className} onClick={handleClick} />;
}
