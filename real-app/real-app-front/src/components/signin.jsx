import withRouter from "./common/withRouter";
import Form from "./common/form";
import PageHeader from "./common/pageHeader";
import Joi from "joi";
import usersService from "../services/usersService";
import { Navigate } from "react-router-dom";

class SignIn extends Form {
  state = {
    form: {
      email: "",
      password: "",
    },
  };

  schema = {
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } }),
    password: Joi.string().required().min(6),
  };

  async doSubmit() {
    const { email, password } = this.state.form;
    try {
      await usersService.login(email, password);
      window.location = "/";
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({
          errors: { email: response.data },
        });
      }
    }
  }

  render() {
    if (usersService.getUser()) {
      return <Navigate to="/" />;
    }

    return (
      <>
        <div className="container">
          <div className="px-4 pt-5 my-5 text-center border-bottom">
            <h1 className="display-4 fw-bold"> Dog <i className="bi bi-fingerprint"></i> it</h1>
            <br />
          </div>
        </div>

        {/* sign in div */}
        <div className="container col-xl-10 col-xxl-8 px-4 py-5 border-bottom">
          <div className="row align-items-center g-lg-5 py-5">
            <div className="col-lg-7 text-center text-lg-start">
              <h1 className="display-4 fw-bold lh-1 mb-3">
                <div className="row">
                  <div className="col-12 ">
                    <p>
                      Sign in with your account to <br />
                     
                    </p>
                    <br />
                  </div>
                </div>
              </h1>
              <p className="col-lg-10 fs-4">
                "it does not matter how slowly you go as long as you do not
                stop."
                <br></br>
                <i>- Confucius - </i>
              </p>
            </div>
            <div className="col-md-10 mx-auto col-lg-5 ">
              <form
                className="p-4 p-md-5 border rounded-3 bg-light "
                onSubmit={this.handleSubmit}
                noValidate
                autoComplete="off"
              >
                <div className="form-floating mb-3">
                  {this.renderInput({
                    name: "email",
                    label: "Email address",
                    type: "email",
                  })}
                </div>
                <div className="form-floating mb-3">
                  {this.renderInput({
                    name: "password",
                    label: "Password",
                    type: "password",
                  })}
                </div>

                <div className="my-2 ">{this.renderButton("Sign In")}</div>

                <hr className="my-4" />
                <small className="text-muted ">
                  By clicking Sign in, you agree to the terms of use.
                </small>
              </form>
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
      </>
    );
  }
}

export default withRouter(SignIn);
