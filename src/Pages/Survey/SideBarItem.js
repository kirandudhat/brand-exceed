import React from "react";
import { useDrag } from "react-dnd";

const SideBarItem = ({ data, onChange }) => {
  // console.log("sideber",onChange)
  const [{ opacity }, drag] = useDrag({
    item: data,
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.4 : 1
    })
  });
  console.log("drag",drag);
  return (
    <div className="sideBarItem" ref={drag} style={{ opacity }}>
      {data.component.type}
    </div>
  );
};
export default SideBarItem;
