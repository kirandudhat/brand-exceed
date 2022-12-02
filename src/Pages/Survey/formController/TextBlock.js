import { convertToHTML } from "draft-convert";
import { Editor, EditorState } from "draft-js";
import { useState } from "react";

const TextBox = ({data,formData, handleChange}) => {
    let field = Object.keys(data)[0]
    let findData = formData.find((item)=>item.field === field);
  
    const [editorState, setEditorState] = useState(() =>
      EditorState.createEmpty()
    );
    const [convertedContent, setConvertedContent] = useState(null);
    const handleEditorChange = (state) => {
      setEditorState(state);
      convertContentToHTML();
    };
    const convertContentToHTML = () => {
      let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
      setConvertedContent(currentContentAsHTML);
    };
    console.log("editorState",convertedContent);
    return (
      <>
      <div className="formfield" style={{padding:15}}>
        <div className="form-header">
          <div className="form-area">
            {/* <PreviewIcon/>
              <DeleteIcon/> */}
            <Editor
              editorState={editorState}
              onEditorStateChange={handleEditorChange}
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
            />
          </div>
        </div>
        </div>
      </>
    );
  };

  export default TextBox