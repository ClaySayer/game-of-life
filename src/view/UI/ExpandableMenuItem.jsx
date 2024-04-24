import { useState } from 'react';
import SubMenuItem from './SubMenuItem';

export default function ExpandableMenuItem({ children, items }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleMouseEnter = () => {
    setIsExpanded(true);
  };
  const handleMouseLeave = () => {
    setIsExpanded(false);
  };
  const renderedItems = items.map(item => {
    return <SubMenuItem key={item}>{item}</SubMenuItem>;
  });
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {isExpanded && renderedItems}
    </div>
  );
}
