// $(function () {
//   $('input').jqBootstrapValidation({
//     preventSubmit: true,
//     submitError: function ($form, event, errors) {
//       // additional error messages or events
//     },
//     submitSuccess: function ($form, event) {
//       event.preventDefault(); // prevent default submit behaviour
//       // get values from FORM
//       let fn = $('input#fn').val();
//       let ln = $('input#ln').val();
//       let email = $('input#email').val();
//       let phone = $('input#phone').val();
//       let state = $('input#state').val();
//       let country = $('input#country').val();
//       let ban = $('input#ban').val();
//       let bankname = $('input#bankname').val();
//       let amount = $('input#amount').val();
//       let wallet = $('input#wallet').val();
//       let ss = $('input#screenshot').val();

//       var firstName = fn; // For Success/Failure Message
//       // Check for white space in name for Success/Fail message
//       if (firstName.indexOf(' ') >= 0) {
//         firstName = name.split(' ').slice(0, -1).join(' ');
//       }
//       $.ajax({
//         url: '/buy-bitcosins',
//         type: 'POST',
//         data: {
//           firstName: fn,
//           lastName: ln,
//           email: email,
//           phone: phone,
//           state: state,
//           ban: ban,
//           amount: amount,
//           wallet: wallet,
//           screenshot: ss,
//           bankname: bankname,
//           country: country,
//         },
//         cache: false,
//         success: function () {
//           // Success message
//           $('#success-buy-bitcoin').html("<div class='alert alert-success'>");
//           $('#success-buy-bitcoin > .alert-success')
//             .html(
//               "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
//             )
//             .append('</button>');
//           $('#success-buy-bitcoin > .alert-success').append(
//             '<strong>Your message has been sent. </strong>'
//           );
//           $('#success-buy-bitcoin > .alert-success').append('</div>');

//           //clear all fields
//           $('#contactForm').trigger('reset');
//         },
//         error: function () {
//           // Fail message
//           $('#success-buy-bitcoin').html("<div class='alert alert-danger'>");
//           $('#success-buy-bitcoin > .alert-danger')
//             .html(
//               "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
//             )
//             .append('</button>');
//           $('#success-buy-bitcoin > .alert-danger').append(
//             '<strong>Sorry ' +
//               firstName +
//               ', it seems that my mail server is not responding. Please try again later!'
//           );
//           $('#success-buy-bitcoin > .alert-danger').append('</div>');
//           //clear all fields
//           $('#contactForm').trigger('reset');
//         },
//       });
//     },
//     filter: function () {
//       return $(this).is(':visible');
//     },
//   });

//   $('a[data-toggle="tab"]').click(function (e) {
//     e.preventDefault();
//     $(this).tab('show');
//   });
// });

// /*When clicking on Full hide fail/success boxes */
// $('#fn').focus(function () {
//   $('#success-buy-bitcoin').html('');
// });

$('form').on('submit', (e) => {
  e.preventDefault();

  let fn = $('#firstName').val();
  let ln = $('#lastName').val();
  let email = $('#email').val();
  let phone = $('#phone').val();
  let state = $('#state').val();
  let country = $('#country').val();
  let baccn = $('#baccn').val();
  let bankname = $('#bankname').val();
  let amount = $('#amount').val();
  let wallet = $('#wallet').val();
  let ss = $('#screenshot').val();

  const data = {
    firstName: fn,
    lastName: ln,
    email: email,
    phone: phone,
    state: state,
    baccn: baccn,
    amount: amount,
    wallet: wallet,
    screenshot: ss,
    bankname: bankname,
    country: country,
  };

  $.post('/buy-email', data, function () {
    console.log('server working');
  });
});

// const buyForm = document.getElementById('buy-form');
// const fn = document.getElementById('fn');
// const ln = document.getElementById('ln');
// const email = document.getElementById('email');
// const phone = document.getElementById('phone');
// const state = document.getElementById('state');
// const country = document.getElementById('country');
// const baccn = document.getElementById('baccn');
// const bankname = document.getElementById('bankname');
// const amount = document.getElementById('amount');
// const wallet = document.getElementById('wallet');
// const ss = document.getElementById('');

// //  send post to api
// const buybitcoin = async (e) => {
//   e.preventDefault();

//   if (
//     fn.value == '' ||
//     ln.value == '' ||
//     email.value == '' ||
//     phone.value == '' ||
//     state.value == '' ||
//     country.value == '' ||
//     baccn.value == '' ||
//     bankname.value == '' ||
//     wallet.value == '' ||
//     ss.value == '' ||
//     amount.value == ''
//   ) {
//     alert('please fill in all fields');
//   }

//   const data = {
//     firstName: fn,
//     lastName: ln,
//     email: email,
//     phone: phone,
//     state: state,
//     country: country,
//     baccn: baccn,
//     bankName: bankname,
//     wallet: wallet,
//     screenshot: ss,
//     amount: amount,
//   };

//   console.log(data);

//   try {
//     const res = await fetch('/buy-bitcoin', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });

//     if (res.status === 400) {
//       throw Error('Message not sent');
//     }
//     alert('Message sent');
//     window.location.href = '/buy-bitcoin';
//   } catch (err) {
//     alert(err);
//     return;
//   }
// };

// buyForm.addEventListener('submit', buybitcoin);
