import React from "react";
import style from "./FeedPhotosItem.module.css";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {


  function handleClick () {
    setModalPhoto(photo)
  }

  return (
    <li onClick={handleClick} className={style.photo}>
      <img src={photo.src} alt={photo.title} />
      <span className={style.visualizacao}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
