import React, { useState } from "react";

const ImagePreview = ({ file }) => {
  const [preview, setPreview] = useState(null);

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result);
  };

  return (
    <>
      <img
        src={preview}
        alt="preview"
        width="100px"
        height="100px"
        style={{ objectFit: "cover" }}
      />
    </>
  );
};
export default ImagePreview;
