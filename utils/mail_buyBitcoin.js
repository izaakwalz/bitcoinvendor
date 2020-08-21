const api_key = `${process.env.MY_MAil_API_KEY_MAILGUN}`;
const DOMAIN = `${process.env.MY_MAIL_DOMAIN_NAME}`;
const mailgun = require('mailgun-js')({
  apiKey: api_key,
  domain: DOMAIN,
});
const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');

exports.buyBitcoinRequest = async (buyData, req, res, next) => {
  const emailTemplateSource = fs.readFileSync(
    path.join(__dirname, './template/buy_bitcoin.hbs'),
    'utf8'
  );

  const template = handlebars.compile(emailTemplateSource);
  const htmlToSend = template({
    firstName: buyData.firstName,
    lastName: buyData.lastName,
    email: buyData.email,
    phone: buyData.phone,
    state: buyData.state,
    country: buyData.country,
    baccn: buyData.baccn,
    amount: buyData.amount,
    wallet: buyData.wallet,
    screenshot: buyData.screenshot,
    bankname: buyData.bankname,
  });

  const data = {
    from: buyData.email,
    to: 'iblack.xyz@gmail.com',
    subject: 'Buy Bitcoin Request',
    text: 'wellcome',
    html: htmlToSend,
    attachemts: buyData.screenshot,
  };

  mailgun.messages().send(data, (err, body) => {
    if (err) {
      console.log(err);
    } else {
      console.log(body.message);
    }
  });
};
