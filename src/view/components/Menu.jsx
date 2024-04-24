import { useDispatch } from 'react-redux';
import { useState } from 'react';
import './Menu.css';
import {
  clearGrid,
  startEvolving,
  stopEvolving,
} from '../../store/slices/gridSlice';
import ExpandableMenuItem from '../UI/ExpandableMenuItem';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const handleStartClick = () => {
    dispatch(startEvolving());
  };
  const handleStopClick = () => {
    dispatch(stopEvolving());
  };

  const handleClearClick = () => {
    dispatch(clearGrid());
  };

  const handleMenuClick = () => {
    setIsOpen(() => !isOpen);
  };

  return (
    <div className="menu" onClick={handleMenuClick}>
      Menu
      {isOpen && (
        <>
          <li onClick={handleStartClick}>Start</li>
          <li onClick={handleStopClick}>Stop</li>
          <li onClick={handleClearClick}>Clear</li>
          <ExpandableMenuItem
            items={['Glider', 'Die Hard', 'Lightweight Spaceship']}
          >
            Load
          </ExpandableMenuItem>
        </>
      )}
    </div>
  );
}
