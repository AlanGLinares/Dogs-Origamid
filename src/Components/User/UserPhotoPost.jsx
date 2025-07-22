import React from "react";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import style from "./UserPhotoPost.module.css";
import UseForm from "../../Hooks/UseForm";
import UseFetch from "../../Hooks/UseFetch";
import { PHOTO_POST } from "../../api";
import Error from "../../Help/Error";
import { useNavigate } from "react-router-dom";
import Head from "../../Help/Head";

const UserPhotoPost = () => {
  const nome = UseForm();
  const idade = UseForm("number");
  const peso = UseForm("number");
  const [img, setImg] = React.useState({});
  const { data, loading, erro, request } = UseFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("idade", idade.value);
    formData.append("peso", peso.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  };

  const handleImgChange = ({ target }) => {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  };

  return (
    <>
      <section className={`${style.photoPost} animeLeft`}>
        <Head  title="Poste sua foto"/>
        <form onSubmit={handleSubmit}>
          <Input label="Nome" type="text" name="nome" {...nome} />
          <Input label="Peso" type="number" name="peso" {...peso} />
          <Input label="Idade" type="number" name="idade" {...idade} />
          <input
            className={style.file}
            type="file"
            name="img"
            id="img"
            onChange={handleImgChange}
          />
          {loading ? (
            <Button disabled>Enviado...</Button>
          ) : (
            <Button>Enviar</Button>
          )}
          <Error erro={erro} />
        </form>
        <div>
          {img.preview && (
            <div
              className={style.preview}
              style={{ backgroundImage: `url(${img.preview})` }}
            ></div>
          )}
        </div>
      </section>
    </>
  );
};

export default UserPhotoPost;
