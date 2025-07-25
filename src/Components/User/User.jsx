import React from "react";
import { Route, Routes } from "react-router-dom";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import Feed from "../Feed/Feed";
import { UserContext } from "../../UserContext";
import NotFound from "../../NotFound";
import Head from "../../Help/Head";

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <>
      <section className="container">
        <Head title="Minha Conta" />
        <UserHeader />
        <Routes>
          <Route path="/" element={<Feed user={data.id}/>}></Route>
          <Route path="postar" element={<UserPhotoPost />}></Route>
          <Route path="estatisticas" element={<UserStats />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </section>
    </>
  );
};

export default User;
