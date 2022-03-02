import PageHeader from "./common/pageHeader";
import React, { Component } from "react";
import cardService from "../services/cardsService";
import Card from "./card";

class MyCards extends Component {
  state = {
    cards: [],
  };

  async componentDidMount() {
    const { data } = await cardService.getMyCards();
    // console.log(data);
    if (data.length > 0) this.setState({ cards: data });
  }

  render() {
    const { user } = this.props;
    const { cards } = this.state;
    return (
      <div className="container mb-4">
        <PageHeader title={<>My Cards page</>} />
        <div className="row">
          <div className="col-12">
            <p>Those are Your cards...</p>
          </div>
        </div>
        <div className="row">
          {cards.length > 0 &&
            cards.map((card) => (
              <Card key={card._id} card={card} user={user} />
            ))}
        </div>
      </div>
    );
  }
}

export default MyCards;
