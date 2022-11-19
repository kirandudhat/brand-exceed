import React, { useState, useCallback } from "react";

import DropZone from "./DropZone";
import TrashDropZone from "./TrashDropZone";
import SideBarItem from "./SideBarItem";
import Row from "./Row";
import initialData from "./initial-data";
import {
  handleMoveWithinParent,
  handleMoveToDifferentParent,
  handleMoveSidebarComponentIntoParent,
  handleRemoveItemFromLayout,
} from "./helpers";
import "./styles.css";
import "./survey.css";
import "./../OurEmployee/OurEmployee.css";
import {
  SIDEBAR_ITEMS,
  SIDEBAR_ITEM,
  COMPONENT,
  COLUMN,
  Advance_Item,
} from "./constants";
import shortid from "shortid";
import { Button, Grid } from "@mui/material";
import {
  CheckBoxList,
  MultiLine,
  NumberPoint,
  NumberWithCodeInput,
  RadioButton,
  SingleLine,
  TextBox,
  Rating,
} from "./Forms";
import { width } from "@mui/system";
import { EDIT_CLIENT } from "../../redux/editClients/types";
import { useDispatch } from "react-redux";

const Container = () => {
  const dispatch = useDispatch()
  const initialLayout = initialData.layout;
  const initialComponents = initialData.components;
  const [layout, setLayout] = useState(initialLayout);
  const [components, setComponents] = useState(initialComponents);
  const [standard, setStandard] = useState(0);
  const [formData,setFormData] = useState([])

  const handleChange = (e, field) =>{
    const {name, value} = e.target
    let setField  = formData.map((item) => {
      if(item.field === field){
        return {
          ...item,
          [name]:value
        }
      }
      else {
        return item
      }
    })
    
    setFormData(setField)
  }
   
  const handleChecked = (e, field) =>{
    const {name, checked} = e.target
    console.log("e.target", name,e.target)
    let setField  = formData.map((item) => {
      if(item.field === field){
        console.log("item.field", checked)
        return {
          ...item,
          [name]: checked
        }
      }
      else {
        return item
      }
    })
    console.log("setField",setField)
    setFormData(setField)
  }

  const handleClick = () =>{
    console.log("SaveBtn",formData)
    dispatch({type: EDIT_CLIENT, payload: formData})
  }

  const handleDropToTrashBin = useCallback(
    (dropZone, item) => {
      const splitItemPath = item.path.split("-");
      setLayout(handleRemoveItemFromLayout(layout, splitItemPath));
    },
    [layout]
  );

  const handleDrop = useCallback(
    (dropZone, item) => {
      // console.log("dropZone", dropZone);
      // console.log("item", item);

      const splitDropZonePath = dropZone.path.split("-");
      const pathToDropZone = splitDropZonePath.slice(0, -1).join("-");

      const newItem = { id: item.id, type: item.type };
      if (item.type === COLUMN) {
        newItem.children = item.children;
      }

      // sidebar into
      if (item.type === SIDEBAR_ITEM) {
        // 1. Move sidebar item into page
        const newComponent = {
          id: shortid.generate(),
          compName: item.component.content,
          ...item.component,
        };
        let fieldString = `${newComponent.compName.type.name}_${Date.now().toString()}`
        setFormData([...formData,{...newComponent.compName.props.data, field: fieldString}])
        const newItem = {
          id: newComponent.id,
          compName: item.component.content,
          type: COMPONENT,
          data: {[fieldString]:newComponent.compName.props.data}
        };
      setComponents({
          ...components,
          [newComponent.id]: newComponent,
        });
        setLayout(
          handleMoveSidebarComponentIntoParent(
            layout,
            splitDropZonePath,
            newItem
          )
        );
        return;
      }
  
      // move down here since sidebar items dont have path
      const splitItemPath = item.path.split("-");
      const pathToItem = splitItemPath.slice(0, -1).join("-");

      // 2. Pure move (no create)
      if (splitItemPath.length === splitDropZonePath.length) {
        // 2.a. move within parent
        if (pathToItem === pathToDropZone) {
          setLayout(
            handleMoveWithinParent(layout, splitDropZonePath, splitItemPath)
          );
          return;
        }

        // 2.b. OR move different parent
        // TODO FIX columns. item includes children
        setLayout(
          handleMoveToDifferentParent(
            layout,
            splitDropZonePath,
            splitItemPath,
            newItem
          )
        );
        return;
      }

      // 3. Move + Create
      setLayout(
        handleMoveToDifferentParent(
          layout,
          splitDropZonePath,
          splitItemPath,
          newItem
        )
      );
    },
    [layout, components]
  );
  console.log("formData",formData)
  const renderRow = (row, currentPath, formData, handleChange, handleChecked) => {
    return (
      <Row
        key={row.id}
        data={row}
        handleDrop={handleDrop}
        components={components}
        path={currentPath}
        formData={formData}
        handleChange={handleChange}
        handleChecked={handleChecked}
      />
    );
  };
  // dont use index for key when mapping over items
  // causes this issue - https://github.com/react-dnd/react-dnd/issues/342
  return (
    <div className="option-header">
      <Grid container>
        <Grid item xs={3}>
          <div className="sideBar">
            <header className="App-header">Questions</header>
            <Grid container>
              <Grid item xs>
                <Button
                  color="primary"
                  variant="contained"
                  className="stnd-btn"
                  onClick={() => {
                    setStandard(0);
                  }}
                >
                  Standard
                </Button>
              </Grid>
              <Grid item xs>
                <Button
                  color="primary"
                  variant="contained"
                  className="stnd-btn"
                  onClick={() => {
                    setStandard(1);
                  }}
                >
                  Advance
                </Button>
              </Grid>
            </Grid>
            <div>
            {standard === 0
              ? Object.values(SIDEBAR_ITEMS).map((sideBarItem, index) => (
                  <SideBarItem key={sideBarItem.id} data={sideBarItem} />
                ))
              : Object.values(Advance_Item).map((sideBarItem, index) => (
                  <SideBarItem key={sideBarItem.id} data={sideBarItem} />
                ))}
             </div>
          </div>
        </Grid>
        <Grid item xs={9}>
          <div className="pageContainer">
            <div className="page">
              {layout.map((row, index) => {
                const currentPath = `${index}`;
                return (
                  <React.Fragment key={row.id}>
                    <DropZone
                      data={{
                        path: currentPath,
                        childrenCount: layout.length,
                      }}
                      onDrop={handleDrop}
                      path={currentPath}
                    />
                    {renderRow(row, currentPath, formData, handleChange, handleChecked)}
                  </React.Fragment>
                );
              })}
              <DropZone
                data={{
                  path: `${layout.length}`,
                  childrenCount: layout.length,
                  onChange: {handleChange},
                  formData: formData
                }}
                onDrop={handleDrop}
                isLast
              />
            </div>
            <div style={{display:'flex', justifyContent:'end', paddingRight:'10px', paddingBottom:'10px'}}>
            <button className="btncolor" style={{width:'80px', float:'right'}} onClick={handleClick}>
              Save
            </button>
            </div>
            {/* <TrashDropZone
          data={{
            layout
          }}
          onDrop={handleDropToTrashBin}
        /> */}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Container;
