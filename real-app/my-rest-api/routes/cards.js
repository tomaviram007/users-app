const express = require('express');
const _ = require('lodash');
const { Card, validateCard, generateBizNumber } = require('../models/card');
const auth = require('../middleware/auth');
const router = express.Router();

// getting all the cards that Biz user created
router.get("/my-cards", auth, async (req, res) => {
  console.log("this is a biz user/card", req.user.biz);
  if (!req.user.biz) return res.status(401).send("Access denied.");
  const cards = await Card.find({ user_id: req.user._id });
  res.send(cards);
});
// Delete the card that Biz user try to delete
router.delete('/:id', auth, async (req, res) => {
  // console.log("delete");
  const card = await Card.findOneAndRemove({ _id: req.params.id, user_id: req.user._id });
  if (!card) return res.status(404).send('The card with the given ID was not found.');
  res.send(card);

});

router.put('/:id', auth, async (req, res) => {
  const { error } = validateCard(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let card = await Card.findOneAndUpdate({ _id: req.params.id, user_id: req.user._id }, req.body);
  if (!card) return res.status(404).send('The card with the given ID was not found.');
  card = await Card.findOne({ _id: req.params.id, user_id: req.user._id });
  res.send(card);

});

// getting ID of the cards 
router.get('/:id', auth, async (req, res) => {
  // console.log("get id");
  const card = await Card.findOne({ _id: req.params.id, user_id: req.user._id });
  if (!card) return res.status(404).send('The card with the given ID was not found.');
  res.send(card);

});

// making a new Biz-card
router.post('/', auth, async (req, res) => {
  const { error } = validateCard(req.body);
  if (error) {
    // console.log(error.message);
    return res.status(400).send(error.details[0].message)
  };

  let card = new Card(
    {
      bizName: req.body.bizName,
      bizEmail: req.body.bizEmail,
      bizDescription: req.body.bizDescription,
      bizAddress: req.body.bizAddress,
      bizPhone: req.body.bizPhone,
      bizImage: req.body.bizImage ? req.body.bizImage : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      bizNumber: await generateBizNumber(Card),
      user_id: req.user._id
    }
  );

  post = await card.save();
  res.send(post);

});

module.exports = router; 