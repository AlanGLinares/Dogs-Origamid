import React from "react";
import { PHOTOS_GET } from "../../api";
import UseFetch from "../../Hooks/UseFetch";
import FeedPhotosItem from "./FeedPhotosItem";
import Error from "../../Help/Error";
import Loading from "../../Help/Loading";
import style from "./FeedPhotos.module.css";

const FeedPhotos = ({ setModalPhoto , user , page , setInfinite}) => {
  const { data, loading, erro, request } = UseFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 6
      const { url, options } = PHOTOS_GET({
        page: page,
        total: total,
        user: user,
      });
      const { response, json } = await request(url, options);
      if(response && response.ok && json.length < total) {
        setInfinite(false)
      }
    }

    fetchPhotos();
  }, [request, user , page , setInfinite]);

  if (erro) return <Error erro={erro} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${style.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
