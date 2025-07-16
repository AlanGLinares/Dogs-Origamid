import React from "react";
import style from "./PhotoDelete.module.css";
import UseFetch from "../../Hooks/UseFetch";
import { PHOTO_DELETE } from "../../api";

const PhotoDelete = ({ id }) => {
  const { loading, request } = UseFetch();

  const handleDelete = async () => {
    const confirm = window.confirm("Tem Certeza que deseja Deletar ? ");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  };

  return (
    <>
      {loading ? (
        <button disabled className={style.delete}>
          Deletar
        </button>
      ) : (
        <button onClick={handleDelete} className={style.delete}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
