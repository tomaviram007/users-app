import React from "react";
import PageHeader from "./common/pageHeader";
import Joi from "joi";
import Form from "./common/form";
import cardService from "../services/cardsService";
import { toast } from "react-toastify";
import withRouter from "./common/withRouter";

class EditCard extends Form {
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
    _id: Joi.string(),
    bizName: Joi.string().min(2).max(255).required(),
    bizEmail: Joi.string()
      .required()
      .email({ tlds: { allow: false } }),
    bizDescription: Joi.string().min(2).max(1024).required(),
    bizAddress: Joi.string().min(2).max(400).required(),
    bizPhone: Joi.string()
      .min(9)
      .max(10)
      .required()
      .regex(/^0[2-9]\d{7,8}$/),
    bizImage: Joi.string().min(11).max(1024).uri().allow(""),
  };

  async componentDidMount() {
    const cardId = this.props.params.id;
    const { data } = await cardService.getCard(cardId);
    this.setState({ form: this.mapToViewModel(data) });
  }

  mapToViewModel(card) {
    return {
      _id: card._id,
      bizName: card.bizName,
      bizEmail: card.bizEmail,
      bizDescription: card.bizDescription,
      bizAddress: card.bizAddress,
      bizPhone: card.bizPhone,
      bizImage: card.bizImage,
    };
  }

  doSubmit = async () => {
    const { form } = this.state;
    await cardService.editCard(form);
    toast("Card is Updated");
    this.props.navigate("/my-cards");
  };

  handleCancel = () => {
    this.props.navigate("/my-cards");
  };

  render() {
    const { form } = this.state;
    return (
      <div className="container">
        <PageHeader titleText="Edit Card Form" />
        <div className="row">
          <div className="col-md-12">
            <p>Fill out card details here</p>
          </div>
          <form
            onSubmit={this.handleSubmit}
            autoComplete="off"
            method="POST"
            className="col-md-12 col-lg-6"
          >
            {this.renderInput({
              name: "bizName",
              label: "Name",
              value: form.bizName,
            })}
            {this.renderInput({
              name: "bizDescription",
              label: "About me",
              value: form.bizDescription,
            })}
            {this.renderInput({
              name: "bizEmail",
              label: "Email",
              value: form.bizEmail,
            })}
            {this.renderInput({
              name: "bizAddress",
              label: "Address",
              value: form.bizAddress,
            })}
            {this.renderInput({
              name: "bizPhone",
              label: "Phone",
              value: form.bizPhone,
            })}
            {this.renderInput({
              name: "bizImage",
              label: "Image",
              value: form.bizImage,
            })}
            {this.renderButton("Update Card")}
            <button
              className="btn btn-secondary ml-2"
              onClick={this.handleCancel}
            >
              Cancel
            </button>
          </form>
          
          <div className="cardImg col-md-12 col-lg-6">
            <img
              className="p-2 cardImgStyle"
              src={form.bizImage}
              width="100%"
              height="420"
              alt={form.name}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(EditCard);
