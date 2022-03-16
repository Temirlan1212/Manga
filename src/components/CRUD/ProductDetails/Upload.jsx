import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContext";

const Upload = () => {
  const { addChapter, chapter, products, getProductDetails, productDetails } =
    useProducts();
  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  const { selectedFiles, setSelectedFiles } = useProducts();
  console.log(selectedFiles);

  const handleImageChange = (e) => {
    // console.log(e.target.files[])
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      // console.log("filesArray: ", filesArray);

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };

  const renderPhotos = (source) => {
    console.log("source: ", source);
    return source.map((photo) => {
      return <img src={photo} alt="" key={photo} />;
    });
  };
  console.log();

  return (
    <div className="app">
      <div>
        <input type="file" id="file" multiple onChange={handleImageChange} />
        <div className="label-holder">
          {chapter.map((elem) => (
            // <img srcset={renderPhotos(elem.selectedFiles)} />
            <div className="result">{renderPhotos(elem.selectedFiles)}</div>
          ))}
        </div>
        <div className="result"></div>
      </div>
    </div>
  );
};

export default Upload;

//{renderPhotos(selectedFiles)}
