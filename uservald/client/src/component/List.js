import React from "react";
import "./List.css"
function List({date}) {
  // const arr = ;
  console.log(date,date.class)
  return (
    <ul className={date.class+" date-container"}>
      {date.list.map((list, index) => (
        <li className={`child-${date.class} child`} key={index}>{list}</li>
      ))}
    </ul>
  );

}
export default List;