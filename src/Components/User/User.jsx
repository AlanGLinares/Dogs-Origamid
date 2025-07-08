import React from "react";
import { Route, Routes } from "react-router-dom";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import Feed from "../Feed/Feed";

const User = () => {
  return (
    <>
      <section className="container">
        <UserHeader />
        <Routes>
          <Route path="/" element={<Feed />}></Route>
          <Route path="postar" element={<UserPhotoPost />}></Route>
          <Route path="estatisticas" element={<UserStats />}></Route>
        </Routes>
      </section>
    </>
  );
};

export default User;
