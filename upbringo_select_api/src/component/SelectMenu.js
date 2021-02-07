import React, { useContext } from "react";
import { SelectContext } from "../App";
function SelectMenu({ data }) {
  const onMenuChange = useContext(SelectContext);

  return (
    <>
      {data?.length > 0 ? (
        <select onChange={onMenuChange}>
          <option value="null">Select State</option>
          {data.map((data, index) => (
            <option
              style={{ width: "300px", height: "40px", lineHeight: "40px" }}
              value={data}
              key={index}
            >
              {data}
            </option>
          ))}
        </select>
      ) : null}
    </>
  );
}

export default SelectMenu;
