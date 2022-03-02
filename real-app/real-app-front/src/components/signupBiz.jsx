import PageHeader from "./common/pageHeader";
import Form from "./common/form";
import Joi from "joi";
import withRouter from "./common/withRouter";
import usersService from "../services/usersService";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

class SignUpBiz extends Form {
  state = {
    form: {
      name: "",
      email: "",
      password: "",
    },
  };

  schema = {
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } }),
    password: Joi.string().required().min(6),
    name: Joi.string().required().min(2),
  };

  async doSubmit() {
    const { form } = this.state;
    const body = { ...form, biz: true };

    try {
      await usersService.createUser(body);
      await usersService.login(form.email, form.password);
      window.location = "/create-card";
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({ errors: { email: response.data } });
      }
    }
  }

  render() {
    if (usersService.getUser()) {
      return <Navigate to="/" />;
    }

    return (
      <div className ="mb-5">
        <div className="container">
          <div className="px-4 pt-3 my-5 text-center border-bottom">
            <h1 className="display-4 fw-bold">
              {" "}
              Dog <i className="bi bi-fingerprint"></i> it <br />
            </h1>
            <br />
            <h3>
              <i>We love dogs more then people!</i>
            </h3>
            <br />
          </div>
        </div>
        <PageHeader title="Sign up as new business" />
        <div className="row">
          <div className="col-12">
            <p>Open new a account !</p>
          </div>
        </div>

        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
          {this.renderInput({ name: "email", label: "Email", type: "email" })}
          {this.renderInput({
            name: "password",
            label: "Password",
            type: "password",
          })}
          {this.renderInput({ name: "name", label: "Name" })}
          <div className="my-2">{this.renderButton("Sign Up")}</div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUpBiz);
