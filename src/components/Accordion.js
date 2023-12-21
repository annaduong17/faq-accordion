import { useState } from 'react';
import MinusIcon from '../images/icon-minus.svg';
import PlusIcon from '../images/icon-plus.svg';

export default function Accordion({ items }) {
  const [ expandedIndex, setExpandedIndex ] = useState(-1);

  const handleClick = (index) => {
    if (index !== expandedIndex) {
      setExpandedIndex(index);
    } else {
      setExpandedIndex(-1);
    }
  }

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = <img src={isExpanded ? MinusIcon : PlusIcon} alt="" />

    return(
      <div key={index}>
        <div onClick={() => handleClick(index)}>
          <p>{item.label}</p> 
          <span>{icon}</span>
        </div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    )
  });

  return(
    <div>{renderedItems}</div>
  );
}