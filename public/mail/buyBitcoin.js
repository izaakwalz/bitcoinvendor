const form = document.getElementById('buy-form');
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

function isEmail(email) {
  const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
  return regEmail;
}

form.addEventListener('submit', buyBitcoin);
