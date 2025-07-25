import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import { UserStorage } from "./UserContext";
import "./App.css";
import User from "./Components/User/User";
import ProtectedRouter from "./Help/ProtectedRouter";
import Photo from "./Components/Photo/Photo";
import UserProfile from "./Components/User/UserProfile";
import NotFound from "./NotFound";

const App = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <UserStorage>
            <Header />
            <main className="AppBody">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login/*" element={<Login />} />
                <Route
                  path="conta/*"
                  element={
                    <ProtectedRouter>
                      <User />
                    </ProtectedRouter>
                  }
                />
                <Route path="perfil/:user" element={<UserProfile />} />
                <Route path="foto/:id" element={<Photo />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </UserStorage>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
