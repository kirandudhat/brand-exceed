import React from "react";
import { useDrag } from "react-dnd";

const SideBarItem = ({ data, selectPage, handleDubbuleClickEvent }) => {
  // console.log("sideber",onChange)
  const [{ opacity }, drag] = useDrag({
    item: data,
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.4 : 1
    })
  });
  return (
    <div className="sideBarItem" onDoubleClick={()=> handleDubbuleClickEvent(data)} ref={drag} style={{ opacity }}>
      {data.component.type}
    </div>
  );
};
export default SideBarItem;
