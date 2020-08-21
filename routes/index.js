const express = require('express');
const router = express.Router();
const { buyBitcoinRequest } = require('../utils/mail_buyBitcoin');
const { sellBitcoinRequest } = require('../utils/mail_sellBitcoin');

// @desc get
// access public
router.get('/', (req, res) => {
  res.render('pages/home');
});

// @desc buy bitcoin request form
router.get('/buy-bitcoin', (req, res) => {
  res.render('pages/buy');
});
//  @desc send mail post request for buy bitcoin method=== POST
router.post('/buy-email', (req, res) => {
  try {
    const { firstName, lastName, email, phone, state, baccn } = req.body;
    const { amount, wallet, screenshot, bankname, country } = req.body;

    const buyData = {
      firstName,
      lastName,
      email,
      phone,
      state,
      baccn,
      amount,
      wallet,
      screenshot,
      bankname,
      country,
    };

    if (
      firstName == '' ||
      lastName == '' ||
      email == '' ||
      phone == '' ||
      state == '' ||
      amount == '' ||
      wallet == '' ||
      country == '' ||
      bankname == '' ||
      baccn == '' ||
      screenshot == ''
    ) {
      console.log('error');
      return res.status(400).json({ msg: 'error' });
    } else {
      buyBitcoinRequest(buyData, req, res, function (err, data) {
        if (err) {
          res.status(500).json({ msg: 'something is wrong somewhere' });
        } else {
          console.log('Data: ', req.body);
          return res.status(200).json({ msg: 'order recived' });
        }
        console.log('Data: ', req.body);
        return res.status(200).json({ msg: 'order recived' });
      });
    }
  } catch (err) {
    if (err) {
      return res.status(500).json({ error: 'server error' });
    }
  }

  // buyBitcoinRequest(buyData, req, res, function (err, data) {
  //   if (err) {
  //     res.status(500).json({ msg: 'server error' });
  //   } else {
  //     res.status(200).json({ msg: 'message sent' });
  //   }
  // });
});

//  @desc get sell bitcoin page
router.get('/sell-bitcoin', (req, res) => {
  res.render('pages/sell');
});

router.post('/sell-email', (req, res) => {
  try {
    const { firstName, lastName, email, phone, state } = req.body;
    const { amount, wallet, screenshot, country } = req.body;

    const sellData = {
      firstName,
      lastName,
      email,
      phone,
      state,
      country,
      wallet,
      amount,
      screenshot,
    };

    if (
      firstName == '' ||
      lastName == '' ||
      email == '' ||
      phone == '' ||
      state == '' ||
      amount == '' ||
      wallet == '' ||
      country == '' ||
      screenshot == ''
    ) {
      console.log('error');
      return res.status(400).json({ msg: 'error' });
    } else {
      sellBitcoinRequest(sellData, req, res, function (err, data) {
        if (err) {
          res.status(500).json({ msg: 'something is wrong somewhere' });
        } else {
          console.log('Data: ', req.body);
          return res.status(200).json({ msg: 'order recived' });
        }
        console.log('Data: ', req.body);
        return res.status(200).json({ msg: 'order recived' });
      });
    }
  } catch (err) {
    if (err) {
      return res.status(500).json({ error: 'server error' });
    }
  }
});

module.exports = router;
