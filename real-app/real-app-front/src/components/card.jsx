import React from "react";
import { Link } from "react-router-dom";


const Card = ({ card, user }) => {
  // console.log(card.bizPhone);
  return (
    <div className="col-md-6 col-lg-4 mt-3">
      <div className="card">
        <div className="cardImg col-lg-12">
          <img
            className="p-2 cardImgStyle"
            src={card.bizImage}
            width="275px"
            height="205px"
            alt={card.name}
          />
        </div>
        <div className="card-body">
          <div className="cardButtons col-6 col-lg-12" role="group"
            aria-label="Basic mixed styles example" >
            <>
              {/* edit button */}
              <Link to={`/card/edit/${card._id}`}>
                <b>
                  <button type="button" className="btnEdit m-1">
                    <i className="bi bi-pen"></i>
                  </button>
                </b>
              </Link>
              {/* delete button */}
              <span></span>
              <Link className="ml-2 " to={`/my-cards/delete/${card._id}`}>
                <button type="button" className="btnDelete ">
                  <i className="bi bi-trash"></i>
                </button>
              </Link>
            </>
          </div>
          <br />
          <h5 className="cardName"> Name: {card.bizName}</h5>
          <p className="cardTitle">
            <b>About me:</b>
            <br /> {card.bizDescription}
          </p>
          <div className="card-text border-top pt-2">
            <h3 className="cardInfo"> More details: </h3>
            <b>Phone:</b> <span></span>
            {card.bizPhone}
            <br />
            <b>Address:</b>
            <span></span> {card.bizAddress}
            <br />
            {/* buttons */}
            <div className="col-md-12">
              <div className="buttons">
                <br />
                <b>Contact me:</b>
                <br />

                {/* send whatsapp massage */}
                <button className="whatsappStyle ">
                  <a
                    href={`https://api.whatsapp.com/send?phone=+972/${card.bizPhone}&amp;text="Hi there! I have a question :)"`}
                    target="_blank"
                    className="whatsappStyle"
                  >
                    <i className="bi bi-whatsapp whatsappStyle"></i>
                  </a>
                </button>
                {/* send Email massage */}
                <button
                  type="button"
                  className=" contactMeStyle "
                  onClick={() => (window.location = `mailto:${card.bizEmail}`)}
                >
                  <i className="bi bi-envelope contactMeStyle "></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
