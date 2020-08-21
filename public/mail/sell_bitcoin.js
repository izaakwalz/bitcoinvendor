const form_sell = document.getElementById('form_2');
const firstName2 = document.getElementById('firstN');
const lastName2 = document.getElementById('lastN');
const email2 = document.getElementById('email2');
const tell = document.getElementById('tell');
const state2 = document.getElementById('state2');
const country2 = document.getElementById('country2');
const wallet2 = document.getElementById('wallet2');
const amount2 = document.getElementById('amount2');
const ss2 = document.getElementById('screenshot2');

const buy_form = document.getElementById('form_1');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const state = document.getElementById('state');
const country = document.getElementById('country');
const wallet = document.getElementById('wallet');
const amount = document.getElementById('amount');
const bankName = document.getElementById('bankname');
const baccn = document.getElementById('baccn');
const ss = document.getElementById('screenshot');

// form1.addEventListener('submit', (e) => {
//   e.preventDefault();

//   checkInput();
// });

async function sellBitcoin(e) {
  e.preventDefault();

  // if (firstName.value === '' || lastName.value === '') {
  //   alert('Please fill in fields');
  // }

  // checkInput();

  // get values form inputs
  const fnValue = firstName2.value.trim();
  const lnValue = lastName2.value.trim();
  const emailValue = email2.value.trim();
  const tellValue = tell.value.trim();
  const stateValue = state2.value.trim();
  const countryValue = country2.value.trim();
  const walletValue = wallet2.value.trim();
  const amountValue = amount2.value.trim();
  const ssValue = ss2.value;

  if (fnValue === '') {
    //   show error
    // add error class
    setErrorFor(firstName2, 'First name cannot be blank');
  } else {
    //   add success class
    setSuccessFor(firstName2);
  }

  if (lnValue === '') {
    //   show error
    // add error class
    setErrorFor(lastName2, 'Last name cannot be blank');
  } else {
    //   add success class
    setSuccessFor(lastName2);
  }

  if (emailValue === '') {
    //   show error
    // add error class
    setErrorFor(email2, 'Email  cannot be blank');
  } else if (!isEmail(emailValue)) {
    //   add success class
    setErrorFor(email2, "that does't look like a valid email");
  } else {
    setSuccessFor(email2);
  }

  if (tellValue === '') {
    //   show error
    // add error class
    setErrorFor(tell, 'Please enter your mobile no.');
  } else {
    setSuccessFor(tell);
  }

  if (stateValue === '') {
    //   show error
    // add error class
    setErrorFor(state2, 'State cannot be blank ');
  } else {
    //   add success class
    setSuccessFor(state2);
  }

  if (countryValue === '') {
    //   show error
    // add error class
    setErrorFor(country2, 'Please select a country');
  } else {
    //   add success class
    setSuccessFor(country2);
  }

  if (walletValue === '') {
    //   show error
    // add error class
    setErrorFor(wallet2, 'Kindly enter your wallet address');
  } else {
    //   add success class
    setSuccessFor(wallet2);
  }

  if (amountValue === '') {
    //   show error
    // add error class
    setErrorFor(amount2, '$ tell us the amount of coin u want');
  } else {
    //   add success class
    setSuccessFor(amount2);
  }

  const sellForm = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email2.value,
    phone: tell.value,
    state: state2.value,
    country: country2.value,
    wallet: wallet2.value,
    amount: amount2.value,
    screenshot: ss.value,
  };

  try {
    const res = await fetch('/sell-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sellForm),
    });
    if (res.status === 400) {
      const errorInfo = document.getElementById('sell-info');
      errorInfo.innerHTML = `
      <div class='alert alert-warning'>
        <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;
          </button>
        <p>Please fill in all fields</p>
      </div>
      `;
    } else {
      const errorInfo = document.getElementById('sell-info');
      errorInfo.innerHTML = `
      <div class='alert alert-success'>
        <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;
          </button>
        <strong>Request sent</strong>
      </div>
      `;
    }
  } catch (err) {
    if (err) {
      const errorInfo = document.getElementById('sell-info');
      errorInfo.innerHTML = `
    <div class='alert alert-danger'>
      <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;
        </button>
      <p>Server Error</p>
    </div>
    `;
    }
    return;
  }
}

async function buyBitcoin(e) {
  e.preventDefault();

  // get values form inputs
  const fnValue = firstName.value.trim();
  const lnValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const tellValue = phone.value.trim();
  const stateValue = state.value.trim();
  const countryValue = country.value.trim();
  const walletValue = wallet.value.trim();
  const amountValue = amount.value.trim();
  const bankNameValue = bankName.value.trim();
  const baccnValue = baccn.value.trim();
  const ssValue = ss.value;

  if (fnValue === '') {
    //   show error
    // add error class
    setErrorFor(firstName, 'First name cannot be blank');
  } else {
    //   add success class
    setSuccessFor(firstName);
  }

  if (lnValue === '') {
    //   show error
    // add error class
    setErrorFor(lastName, 'Last name cannot be blank');
  } else {
    //   add success class
    setSuccessFor(lastName);
  }

  if (emailValue === '') {
    //   show error
    // add error class
    setErrorFor(email, 'Email  cannot be blank');
  } else if (!isEmail(emailValue)) {
    //   add success class
    setErrorFor(email, "that does't look like a valid email");
  } else {
    setSuccessFor(email);
  }

  if (tellValue === '') {
    //   show error
    // add error class
    setErrorFor(phone, 'Please enter your mobile no.');
  } else {
    setSuccessFor(phone);
  }

  if (stateValue === '') {
    //   show error
    // add error class
    setErrorFor(state, 'State cannot be blank ');
  } else {
    //   add success class
    setSuccessFor(state);
  }

  if (countryValue === '') {
    //   show error
    // add error class
    setErrorFor(country, 'Please select a country');
  } else {
    //   add success class
    setSuccessFor(country);
  }

  if (walletValue === '') {
    //   show error
    // add error class
    setErrorFor(wallet, 'Kindly enter your wallet address');
  } else {
    //   add success class
    setSuccessFor(wallet);
  }

  if (amountValue === '') {
    //   show error
    // add error class
    setErrorFor(amount, '$ tell us the amount of coin u want');
  } else {
    //   add success class
    setSuccessFor(amount);
  }

  if (baccnValue === '') {
    //   show error
    // add error class
    setErrorFor(baccn, 'Bank Account Number cannot be blank');
  } else {
    //   add success class
    setSuccessFor(baccn);
  }

  if (bankNameValue === '') {
    //   show error
    // add error class
    setErrorFor(bankName, 'Bank name cannot be blank');
  } else {
    //   add success class
    setSuccessFor(bankName);
  }

  const buyForm = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phone: phone.value,
    state: state.value,
    country: country.value,
    wallet: wallet.value,
    bankname: bankName.value,
    baccn: baccn.value,
    amount: amount.value,
    screenshot: ss.value,
  };

  try {
    const res = await fetch('/buy-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(buyForm),
    });
    if (res.status === 400) {
      const errorInfo = document.getElementById('buy-info');
      errorInfo.innerHTML = `
      <div class='alert alert-warning'>
        <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;
          </button>
        <p>Please fill in all fields</p>
      </div>
      `;
    } else {
      const errorInfo = document.getElementById('buy-info');
      errorInfo.innerHTML = `
      <div class='alert alert-success'>
        <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;
          </button>
        <strong>Request sent</strong>
      </div>
      `;
    }
  } catch (err) {
    if (err) {
      const errorInfo = document.getElementById('buy-info');
      errorInfo.innerHTML = `
    <div class='alert alert-danger'>
      <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;
        </button>
      <p>Server Error</p>
    </div>
    `;
    }
    return;
  }
}

function setErrorFor(input, message) {
  const formcontrol = input.parentElement; // .extra-style
  const small = formcontrol.querySelector('small');

  //   add error message inside small
  small.innerText = message;

  //   add error class
  formcontrol.className = 'extra-style error1';
}

function setSuccessFor(input) {
  const formcontrol = input.parentElement; // .extra-style
  //   add error class
  formcontrol.className = 'extra-style success1';
}

function isEmail(email2) {
  const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email2
  );
  return regEmail;
}

buy_form.addEventListener('submit', buyBitcoin);

form_sell.addEventListener('submit', sellBitcoin);
