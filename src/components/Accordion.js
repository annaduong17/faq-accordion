import { useState } from 'react';
import MinusIcon from '../images/icon-minus.svg';
import PlusIcon from '../images/icon-plus.svg';

export default function Accordion({ section }) {
  const [ expandedIndex, setExpandedIndex ] = useState(-1);

  const handleClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  }

  const renderedItems = section.content.map((question, index) => {
    const isExpanded = index === expandedIndex;
    const icon = <img src={isExpanded ? MinusIcon : PlusIcon} alt="icon" />

    console.log(index);


    return(
      <div key={index} className="question">
        <div className='label flex' onClick={() => handleClick(index)}>
          <p>{question.label}</p> 
          {icon}
        </div>
        {isExpanded && <div className='answer'>{question.answer}</div>}
      </div>
    )
  });

  return(
    <div className="section">
      <h2>{section.title}</h2>
      <div>{renderedItems}</div>
    </div>
  )
}