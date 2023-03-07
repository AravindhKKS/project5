import React from "react";
import { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

const Accordion = ({ items }) => {
  const [expendedIndex, setExpendedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    setExpendedIndex((currentExpendedIndex) => {
      if (currentExpendedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  //   const handleClick = (nextIndex) => {
  //     if (expendedIndex  === nextIndex) {
  //       setExpendedIndex(-1);
  //     } else {
  //       setExpendedIndex(nextIndex);
  //     }
  //   };

  const renderedItem = items.map((item, index) => {
    const isExpended = index === expendedIndex;
    const icon = (
      <div className="text-2xl">
        {isExpended ? <GoChevronDown /> : <GoChevronRight />}
      </div>
    );
    return (
      <div key={item.id}>
        <div
          className="flex itmes-center justify-between  p-3 bg-gray-50 border-b cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpended && <div className="border-b p-5"> {item.content} </div>}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderedItem}</div>;
};

export default Accordion;
