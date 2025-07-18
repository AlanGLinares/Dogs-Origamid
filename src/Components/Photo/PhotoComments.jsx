import React from "react";
import { UserContext } from "../../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";
import style from "./PhotoComments.module.css";

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentSection = React.useRef(null);

  const { login } = React.useContext(UserContext);

  // isso faz o scroll começar automaticamente para o fim dos comentarios quando tiver o scroll.
  React.useEffect(() => {
    commentSection.current.scrollTop = commentSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul
        ref={commentSection}
        className={`${style.comments} ${props.single ? style.photoSingle : ""}`}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsForm
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  );
};

export default PhotoComments;
