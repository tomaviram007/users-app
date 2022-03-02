import Form from "./common/form";
import PageHeader from "./common/pageHeader";
import Joi from "joi";
import { toast } from "react-toastify";
import cardService from "../services/cardsService";
import withRouter from "./common/withRouter";

class CreateCard extends Form {
  state = {
    form: {
      bizName: "",
      bizEmail: "",
      bizDescription: "",
      bizAddress: "",
      bizPhone: "",
      bizImage: "",
    },
    errors: {},
  };

  schema = {
    bizName: Joi.string().min(2).max(255).required().label("Name"),
    bizDescription: Joi.string()
      .min(2)
      .max(1024)
      .required()
      .label("Description"),
    bizAddress: Joi.string().min(2).max(400).required().label("Address"),
    bizEmail: Joi.string()
      .required()
      .email({ tlds: { allow: false } }),
    bizPhone: Joi.string()
      .min(9)
      .max(10)
      .required()
      .regex(/^0[2-9]\d{7,8}$/)
      .label("Phone"),
    bizImage: Joi.string().min(11).max(1024).label("Image").allow(""),
  };

  async doSubmit() {
    const {
      form: { bizImage, ...body },
    } = this.state;

    if (bizImage) {
      body.bizImage = bizImage;
    }

    try {
      await cardService.createCard(body);
      toast("A new card is opened");
      this.props.navigate("/my-cards");
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({ errors: { bizImage: response.data } });
      }
    }
  }

  render() {
    return (
      <div className="container">
        <PageHeader title="Create a New Card" />
        <div className="row">
          <div className="col-12">
            <p>Create a new Biz card</p>
          </div>
        </div>
        <form
          onSubmit={this.handleSubmit}
          noValidate="novalidate"
          autoComplete="off"
         
        >
          {this.renderInput({ name: "bizName", label: "Name" })}
          {this.renderInput({ name: "bizDescription", label: "About me" })}
          {this.renderInput({ name: "bizEmail", label: "Email" })}
          {this.renderInput({ name: "bizAddress", label: "Address" })}
          {this.renderInput({ name: "bizPhone", label: "Phone" })}
          {this.renderInput({ name: "bizImage", label: "Image" })}
          <div className="mt-2 "> {this.renderButton("Create Card ✔")}</div>
        </form>
       
      </div>
    );
  }
}

export default withRouter(CreateCard);
