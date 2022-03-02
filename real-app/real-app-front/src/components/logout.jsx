import React from "react";
import userService from "../services/usersService";

class Logout extends React.Component {
  componentDidMount() {
    userService.logout();
    window.location = "/";
  }

  render() {
    return null;
  }
}

export default Logout;
