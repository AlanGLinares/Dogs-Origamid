import React from "react";
import { PHOTO_GET } from "../../api";
import Error from "../../Help/Error";
import UseFetch from "../../Hooks/UseFetch";
import Loading from "../../Help/Loading";
import style from "./FeedModal.module.css";
import PhotoContent from "../Photo/PhotoContent";

const FeedModal = ({ photo , setModalPhoto }) => {
  const { data, erro, loading, request } = UseFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  // isso faz o modal fechar ao clica fora , se clica no elemento em si não vai fechar , esse setModalPhoto está sendo puxado lá de Feed que é um props e está sendo destruturada.
  function handleOutsideClick (event) {
    if (event.target === event.currentTarget)
    setModalPhoto(null)
  }

  return (
    <div onClick={handleOutsideClick} className={`${style.modal} animeLeft`}>
      {erro && <Error erro={erro} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
