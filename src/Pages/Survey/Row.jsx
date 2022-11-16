import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import { ROW } from "./constants";
import DropZone from "./DropZone";
import Column from "./Column";
import { formController } from "./Forms";

const style = {};
const Row = ({ data, components, handleDrop, path, formData, handleChange, handleChecked }) => {
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ROW,
      id: data.id,
      children: data.children,
      path,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(ref);

  const renderColumn = (column, currentPath) => {
    return (
      <Column
        key={column.id}
        data={column}
        components={components}
        handleDrop={handleDrop}
        path={currentPath}
      />
    );
  };

  return (
    <div
      ref={ref}
      style={{ ...style, opacity, border: "7px solid gray" }}
      className="base draggable row"
    >
      {console.log(data.children, components, path, "path")}
      {formController(data.children.type.name, data.data, formData, handleChange, handleChecked)}
      <div className="columns">
        {/* {data.children.map((column, index) => {
          const currentPath = `${path}-${index}`;

          return (
            <React.Fragment key={column.id}>
              {/* <DropZone
                data={{
                  path: currentPath,
                  childrenCount: data.children.length,
                }}
                onDrop={handleDrop}
                className="horizontalDrag"
              /> */}
        {/* {renderColumn(column, currentPath)} */}
        {/* </React.Fragment>
          );
        })}  */}
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
