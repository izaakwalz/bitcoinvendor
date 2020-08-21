const api_key = `${process.env.MY_MAil_API_KEY_MAILGUN}`;
const DOMAIN = `${process.env.MY_MAIL_DOMAIN_NAME}`;
const mailgun = require('mailgun-js')({
  apiKey: api_key,
  domain: DOMAIN,
});
const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');

exports.sellBitcoinRequest = async (sellData, req, res, next) => {
  const emailTemplateSource = fs.readFileSync(
    path.join(__dirname, './template/sell_bitcoin.hbs'),
    'utf8'
  );

  const template = handlebars.compile(emailTemplateSource);
  const htmlToSend = template({
    firstName: sellData.firstName,
    lastName: sellData.lastName,
    email: sellData.email,
    phone: sellData.phone,
    state: sellData.state,
    country: sellData.country,
    amount: sellData.amount,
    wallet: sellData.wallet,
    // screenshot: sellData.screenshot,
  });

  const data = {
    from: sellData.email,
    to: 'iblack.xyz@gmail.com',
    subject: 'Sell Bitcoin Request',
    text: 'wellcome',
    html: htmlToSend,
  };

  mailgun.messages().send(data, (err, body) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'email error' });
    } else {
      console.log(body.message);
      //   return res.status(200).json({ message });
    }
  });
};
