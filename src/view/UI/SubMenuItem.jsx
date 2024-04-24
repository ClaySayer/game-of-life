import { useDispatch } from 'react-redux';
import { loadGrid, stopEvolving } from '../../store/slices/gridSlice';

export default function SubMenuItem({ children }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(stopEvolving());
    dispatch(loadGrid(children));
  };
  return <div onClick={handleClick}>{children}</div>;
}
