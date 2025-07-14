import React from "react";
import { PHOTOS_GET } from "../../api";
import UseFetch from "../../Hooks/UseFetch";
import FeedPhotosItem from "./FeedPhotosItem";
import Error from "../../Help/Error";
import Loading from "../../Help/Loading";
import style from './FeedPhotos.module.css'

const FeedPhotos = () => {
  const { data, loading, erro, request } = UseFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({
        page: 1,
        total: 6,
        user: 0,
      });
      const { response, json } = await request(url, options);

      console.log(json);
    }

    fetchPhotos();
  }, [request]);

  if (erro) return <Error erro={erro} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${style.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem key={photo.id} photo={photo} />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
