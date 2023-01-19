import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import { ROW } from "./constants";
import DropZone from "./DropZone";
import Column from "./Column";
import { formController } from "./Forms";

const style = {};
const Row = ({ data, components, handleDrop, path, formData, handleChange,handleBlur, handleChecked,handleDelete, pages, selectPage }) => {
  const ref = useRef(null);
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ROW,
      id: data.id,
      children: data.children,
      path,
      pages:pages,
      selectPage:selectPage,
      components:components
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(ref);

 

  return (
    <div
      ref={ref}
      
      className="base draggable row"
    >
      {formController(data.children.type.name, data.data, formData, handleChange,handleBlur, handleChecked,handleDelete)}
      <div className="columns">

        <DropZone
          data={{
            path: `${path}`,
            // childrenCount: data.children.length
          }}
          onDrop={handleDrop}
          className="horizontalDrag"
          isLast
        />
      </div>
    </div>
  );
};
export default Row;
