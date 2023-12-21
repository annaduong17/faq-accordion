import { useState } from 'react';

export default function Accordion({ items }) {
  const [ expandedIndex, setExpandedIndex ] = useState(-1);

  const handleClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1)
    } else {
      setExpandedIndex(index);
    }
  }

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    return(
      <div key={item.index}>
        <div onClick={() => handleClick(index)}>{item.label}</div>
        {isExpanded && <div>{item.content}</div>}
      </div>  
    )
  });

    return(
      <div>{renderedItems}</div>
    )
}