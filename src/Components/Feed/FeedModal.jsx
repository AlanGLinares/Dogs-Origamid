import React from "react";
import { PHOTO_GET } from "../../api";
import Error from "../../Help/Error";
import UseFetch from "../../Hooks/UseFetch";
import Loading from "../../Help/Loading";
import style from "./FeedModal.module.css";
import PhotoContent from "../Photo/PhotoContent";

const FeedModal = ({ photo }) => {
  const { data, erro, loading, request } = UseFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  return (
    <div className={`${style.modal} animeLeft`}>
      {erro && <Error erro={erro} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
