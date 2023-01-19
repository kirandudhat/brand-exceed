import React, { useState, useCallback, useEffect } from "react";

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
  ROW
} from "./constants";
import shortid from "shortid";
import { Button, Grid } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { minHeight, width } from "@mui/system";
import { EDIT_CLIENT } from "../../redux/editClients/types";
import { useDispatch } from "react-redux";
import TitleIcon from '@mui/icons-material/Title';
import { toast } from "react-toastify";
const Container = ({surveyData}) => {
  console.log("surveyData",surveyData);
  const dispatch = useDispatch()
  const initialLayout = initialData.layout;
  const initialComponents = initialData.components;
  const [layout, setLayout] = useState(initialLayout);
  const [components, setComponents] = useState(initialComponents);
  const [standard, setStandard] = useState(0);
  const [formData,setFormData] = useState([])
  const [pages, setPages] = useState([1])
  const [selectPage, setSelectPage] = useState(1)

  useEffect(()=>{
    if(surveyData?.fields != null){
      let pageData = JSON.parse(surveyData?.fields)
      let getPage = pageData && pageData.length && pageData.map((item) => item.page)
      let getfilteredPageCount = getPage.filter(function(v, i, self)
      {
          return i == self.indexOf(v);
      });
      let reStrucureData = pageData && pageData.length && pageData.map((item) => {
        // let data = item;
        // delete data.field;
        // delete data.page;
        return{
          id: shortid.generate(),
          data:{
            [item.field] : item 
          },
          children:{
            type:{
              name: item.field.split('_')[0]
            }
          },
          field: item.field,
          page: item.page,
          type: ROW,
        }
      }) 
      setLayout(reStrucureData);
      setFormData(pageData)
      setPages(getfilteredPageCount)
      setSelectPage(1)
    }
  },[surveyData])

  const handleDeletePage = () => {
    let setField = formData.filter((item) => item.page !== selectPage).map((item) => {
      if(item.page > selectPage){
        return {
          ...item,
          page : item.page - 1
        }
      } else {
        return item
      }
    })
    let data = layout.filter((item) => item.page !== selectPage).map((item) => {
      if(item.page > selectPage){
        return {
          ...item,
          page : item.page - 1
        }
      } else {
        return item
      }
    })
    let getPage = data.map((item) => item.page)
    let getfilteredPageCount = getPage.filter(function(v, i, self)
    {
        return i == self.indexOf(v);
    });
    setLayout(data);
    setFormData(setField)
    setPages(getfilteredPageCount && getfilteredPageCount.length > 1 ? getfilteredPageCount : [1])
    setSelectPage(1)
  }
  const handleChange = (e, field) =>{
    
    let setField  = formData.map((item) => {
      if(typeof e === 'string' && item.field === field){
        return {
          ...item,
          ['text']:e
          }
      }
      else if(item.field === field){
        const {name, value} = e.target
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
    let setField  = formData.map((item) => {
      if(item.field === field){
        return {
          ...item,
          [name]: checked
        }
      }
      else {
        return item
      }
    })
    setFormData(setField)
  }

  const handleClick = () =>{
    let flag = true
    for (const field of formData) {
      let findData = formData.filter((item) => item.variableName == field.variableName)
      console.log("findData",findData);
      if(findData.length>1){
        flag = false
        toast.error(`Variable name should be used once only. "${field.variableName}" is used multiple times.`);
        break
      }
    }
    if(flag){

      let data = formData
      if(surveyData.layout === "vertical" && surveyData.survey_type == 'web_survey'){
        data = formData.map((item, index) => {return {...item,page: (index +1)  }})
      } 
      dispatch({type: EDIT_CLIENT, payload: JSON.stringify(data)})
    }
  }
  const handleDropToTrashBin = useCallback(
    (dropZone, item) => {
      const splitItemPath = item.path.split("-");
      setLayout(handleRemoveItemFromLayout(layout, splitItemPath));
    },
    [layout]
  );

  const handleDubbuleClickEvent = (item) => {
    const splitDropZonePath = [0];
    if (item.type === SIDEBAR_ITEM) {
      // 1. Move sidebar item into page
      const newComponent = {
        id: shortid.generate(),
        compName: item.component.content,
        ...item.component,
      };
      let fieldString = `${item.component.name}_${Date.now().toString()}`
      setFormData([...formData,{...newComponent.compName.props.data, field: fieldString,page: selectPage}])
      const newItem = {
        id: newComponent.id,
        compName: item.component.content,
        type: COMPONENT,
        data: {[fieldString]:newComponent.compName.props.data},
        page: selectPage
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
  }
  const handleDrop = (
    (dropZone, item) => {
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
        let fieldString = `${item.component.name}_${Date.now().toString()}`
        setFormData([...formData,{...newComponent.compName.props.data, field: fieldString,page: dropZone.selectPage}])
        const newItem = {
          id: newComponent.id,
          compName: item.component.content,
          type: COMPONENT,
          data: {[fieldString]:newComponent.compName.props.data},
          page: dropZone.selectPage
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
    }
  );
  const renderRow = (row, currentPath, formData, handleChange,handleBlur, handleChecked,handleDelete,pages, selectPage) => {

    return <Row
    key={row.id}
    data={row}
    handleDrop={handleDrop}
    handleBlur={handleBlur}
    components={components}
    path={currentPath}
    formData={formData}
    handleChange={handleChange}
    handleChecked={handleChecked}
    handleDelete={handleDelete}
    pages={pages}
    selectPage={selectPage}
  />
  };
  const handleInsertPage = () => {
    setPages([...pages, (pages.length + 1)])
    setSelectPage(pages.length + 1)
  }
  const handleSelectionPage = (item) => {
    setSelectPage(item)
  }
  const handleDelete = (field) =>{
    let setField = formData.filter((item) => item.field !== field)
    let data = layout.filter((item) => !Object.keys(item.data)[0].includes(field) )
    setFormData(setField)
    setLayout(data)
  }

  const handleBlur = (e) => {
    const {name, value} = e.target
    let findData = formData.filter((item) => item.variableName == value)
    console.log("findData",findData);
    if(findData.length>1){

    }

  }
  return (
    <div className="option-header">
      <Grid container>
        <Grid item md={3}>
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
                  variant="contained"
                  className="active-btn"
                  onClick={() => {
                    setStandard(1);
                  }}
                >
                  Advance
                </Button>
              </Grid>
            </Grid>
            <div className="menu-item">
            {standard === 0
              ? Object.values(SIDEBAR_ITEMS).map((sideBarItem, index) => (

               <SideBarItem key={sideBarItem.id} data={sideBarItem} selectPage={selectPage} handleDubbuleClickEvent={handleDubbuleClickEvent}/>
                 
                ))
              : Object.values(Advance_Item).map((sideBarItem, index) => (
                  <SideBarItem key={sideBarItem.id} data={sideBarItem} />
                ))}
             </div>
          </div>
        </Grid>
        <Grid item xs={9}>
          <div className="title-bar"></div>
          <div className="pageContainer">
            <div className="page">
              {layout && layout.filter((page) => page.page === selectPage).map((row, index) => {
                const currentPath = `${index}`;
                return (
                  <React.Fragment key={row.id}>
                    <DropZone
                      data={{
                        path: currentPath,
                        childrenCount: layout.length,
                        selectPage
                      }}
                      onDrop={handleDrop}
                      path={currentPath}
                    />
                    {renderRow(row, currentPath, formData, handleChange,handleBlur, handleChecked,handleDelete,pages, selectPage)}
                  </React.Fragment>
                );
              })}
              <DropZone
                data={{
                  path: `${layout.length}`,
                  childrenCount: layout.length,
                  onChange: {handleChange},
                  formData: formData,
                  selectPage
                }}
                style={{minHeight:350}}
                onDrop={handleDrop}
                isLast>

                </DropZone>
              
            </div>
           
            {/* <TrashDropZone
          data={{
            layout
          }}
          onDrop={handleDropToTrashBin}
        /> */}
          </div>
          <div className="insert-page">
            {surveyData?.layout === "horizontal" && surveyData?.survey_type == 'web_survey' ?
          <div className="pull-left page-block">
            <ul>
              <li>
                <button>Pages</button>
              </li>
                {
                  pages?.length > 0  && pages.map((item, index)=>{
                    return(
                    <li>  
                      <button className={selectPage === item ? 'active': ''} onClick={() => handleSelectionPage(item)}>{item}</button>
                    </li>
                    )
                  })
                }
             
              <li>
                <button onClick={handleInsertPage}>+</button>
              </li>
            </ul>
          </div>
          : ""}
          <div>
          {surveyData?.layout === "horizontal" && surveyData?.survey_type == 'web_survey' ?
            <button className="btncolorSave" style={{width:'111px', float:'left'}} onClick={handleDeletePage}>
              Delete Page
            </button>
            : "" }
            <button className="btncolorSave" style={{width:'80px', float:'right'}} onClick={handleClick}>
              Save
            </button>
            </div>
          </div>
        </Grid>
      
      </Grid>
     
    </div>
  );
};
export default Container;
