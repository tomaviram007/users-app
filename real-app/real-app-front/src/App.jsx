import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";

import userService from "./services/usersService";
import Footer from "./components/footer";
import About from "./components/about";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Signup from "./components/signup";
import SignUpBiz from "./components/signupBiz";
import Signin from "./components/signin";
import Logout from "./components/logout";
import CreateCard from "./components/createCard";
import ProtectedRoute from "./components/common/protectedRoute";
import MyCards from "./components/myCards";
import EditCard from "./components/editCard";
import DeleteCard from "./components/deleteCard";

class App extends React.Component {
  state = {
    user: null,
    userInfo: "",
  };

  async componentDidMount() {
    const { data } = await userService.getInfoUser();
    console.log("form app.jsx:", data);
    this.setState({
      user: userService.getUser(),
      userInfo: data,
    });
  }
  render() {
    const { user, userInfo } = this.state;
    return (
      <div className="app d-flex flex-column min-vh-100 backColor">
        <ToastContainer />
        <header>
          <Navbar user={user} />
        </header>

        <main className="container flex-fill ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/create-card"
              element={
                <ProtectedRoute bizOnly>
                  <CreateCard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/card/edit/:id"
              element={
                <ProtectedRoute bizOnly>
                  <EditCard />
                </ProtectedRoute>
              }
            />
            <Route path="/my-cards/delete/:id" element={<DeleteCard />} />

            <Route
              path="/my-cards"
              element={
                <ProtectedRoute bizOnly>
                  <MyCards user={userInfo} />
                </ProtectedRoute>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signup-biz" element={<SignUpBiz />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;

