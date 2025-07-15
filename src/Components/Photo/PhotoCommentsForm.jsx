import React from "react";
import { COMMENT_POST } from "../../api";
import Enviar from "../../Assets/enviar.svg?react";
import UseFetch from "../../Hooks/UseFetch";
import Error from "../../Help/Error";
import style from "./PhotoCommentsForm.module.css"

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = React.useState("");
  const { erro, request } = UseFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment("");

      // setComments faz referencia ao estado reativado lá em PhotoComments.
      setComments((comments) => [...comments, json]);
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <textarea
        id="comment"
        className={style.textarea}
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={style.btnEnviar}>
        <Enviar />
      </button>
      <Error erro={erro} />
    </form>
  );
};

export default PhotoCommentsForm;
