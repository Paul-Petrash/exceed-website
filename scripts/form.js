import {gc} from './header_footer.js';
import {sendForm, getElement, toggleClass} from './dom.js';

gc('.cfbtn', start_h)

const fileInput = getElement('#img-upload');

if(fileInput){
  fileInput.addEventListener('change',  (e) => {
    if(e.target.files.length){
      e.target.classList.toggle('empty', false)
    }else{
      e.target.classList.toggle('empty', true)
    }
  })
}

let localFullName = JSON.parse(localStorage.getItem('fullName'));
let localPhone = JSON.parse(localStorage.getItem('phone'));
let localEmail = JSON.parse(localStorage.getItem('email'));
let localComment = JSON.parse(localStorage.getItem('comment'));
// let localNda = localStorage.getItem('nda');

function init(){
  // const mainParent = el.parentElement.classList.contains('cff') ? el.parentElement : el.parentElement.parentElement
  const mainParent = document.querySelector('.request-form');
  const nameEl = mainParent.querySelector('.cfn');
  const phoneEl = mainParent.querySelector('.cfp');
  const emailEl = mainParent.querySelector('.cfe');
  const messageEl = mainParent.querySelector('.cfm');
  // const ndaEl = mainParent.querySelector('.cfnda');
  const cardAutoEl = mainParent.querySelectorAll('.active-tag');
  
  if(localFullName !== null){
    nameEl.value = localFullName
  }
  if(localPhone !== null){
    phoneEl.value = localPhone
  }
  if(localEmail !== null){
    emailEl.value = localEmail
  }
  if(localComment !== null){
    messageEl.value = localComment
  }
  if(!nameEl.onkeyup){
    nameEl.onkeyup = handleChange
  }
  if(!phoneEl.onkeyup){
    phoneEl.onkeyup = handleChange
  }
  if(!emailEl.onkeyup){
    emailEl.onkeyup = handleChange
  }
  if(!messageEl.onkeyup){
    messageEl.onkeyup = handleChange
  }
  // if(!ndaEl.onclick){
  //   ndaEl.onclick = handleChange
  // }
  if(!cardAutoEl.onclick){
    cardAutoEl.onclick = handleChange
  }
}

function handleChange(e) {
  toggleClass(e.target, 'error', false);
  toggleClass(e.target, 'error-format', false);
  const name = e.target.getAttribute('name');
  const value = e.target.value;

  if(name === 'full_name') {
    if(!value.trim()){
      toggleClass(e.target, 'error', true)
    }
    if (value && /[0-9]/.test(value)) {
      toggleClass(e.target, 'error', true)
      toggleClass(e.target, 'error-format', true);
    }
    localStorage.setItem('fullName', JSON.stringify(value));
  }

  if(name === 'phone') {
    if (value && /[a-zA-Z]/.test(value)) {
      toggleClass(e.target, 'error', true)
      toggleClass(e.target, 'error-format', true);
    }
    localStorage.setItem('phone', JSON.stringify(value));
  }

  if(name === 'email') {
    if(!value.trim()){
      toggleClass(e.target, 'error', true)
    }

    if (value && !/^((\w|\.|\-)+)@(\w+){2,}\.(\w+){1,}$/.test(value)) {
      toggleClass(e.target, 'error', true)
      toggleClass(e.target, 'error-format', true);
    }
    localStorage.setItem('email', JSON.stringify(value));
  }

  if(name === 'about_project') {
    localStorage.setItem('comment', JSON.stringify(value));
  }
}

function start_h(el, e) {
  e.preventDefault();
  e.stopPropagation();
  const mainParent = el.parentElement.classList.contains('request-form') ? el.parentElement : el.parentElement.parentElement
  const nameEl = mainParent.querySelector('.cfn');
  const phoneEl = mainParent.querySelector('.cfp');
  const emailEl = mainParent.querySelector('.cfe');
  const messageEl = mainParent.querySelector('.cfm');
  // const ndaEl = mainParent.querySelector('.cfnda');
  let localTags = JSON.parse(localStorage.getItem('card-tag'));

  // const cardAutoEl = mainParent.querySelectorAll('.active-tag');

  if(!nameEl.onkeyup){
    nameEl.onkeyup = handleChange;
  }
  if(!phoneEl.onkeyup){
    phoneEl.onkeyup = handleChange;
  }
  if(!emailEl.onkeyup){
    emailEl.onkeyup = handleChange;
  }
  if(!messageEl.onkeyup){
    messageEl.onkeyup = handleChange;
  }
  // if(!ndaEl.onkeyup){
  //   ndaEl.onkeyup = handleChange
  // }
  // if(!cardAutoEl.onclick){
  //   cardAutoEl.onclick = handleChange
  // }

  // let arrEl = [...cardAutoEl];
  // let arrTags = [];

  // arrEl.forEach(val => {
  //   arrTags.push(val.id);
  // })
  
  function getValue(sel) {
    return (mainParent.querySelector(sel) || {}).value;
  }

  function get_history() {
    try {
      let vv = JSON.parse(localStorage.getItem('history_arr')) || [];
      return vv.map(it => {
        return it.cd + ' x' + (it.count || 1) + ': ' + it.url
      }).join('\n');
    } catch (e) {
      return '----';
    }
  }

  let forSend = {
    form1_name: nameEl.value,
    form1_nda: true, //ndaEl.checked
    form1_tags: localTags,
    form1_email: emailEl.value,
    form1_phone: getValue(".cfp") || 'n/a',
    email: getValue('[name="email_tr"]') || '',
    form1_comment: messageEl.value,
    history_count: localStorage.getItem('history_count'),
    history: get_history()
  }
  console.log(forSend)
  let isValid = true;

  if(!forSend.form1_name.trim()){
    toggleClass(nameEl, 'error', true);
    isValid = false;
  }

  if(!forSend.form1_email.trim()){
    toggleClass(emailEl, 'error', true);
    isValid = false;
  }

  if(forSend.form1_tags.length === 0){
    if(!forSend.form1_comment.trim()){
      toggleClass(messageEl, 'error', true);
      isValid = false;
    }
  }

  if(forSend.form1_name && /[0-9]/.test(forSend.form1_name)){
    toggleClass(nameEl, 'error', true);
    toggleClass(nameEl, 'error-format', true);
    isValid = false;
  }
  if(forSend.form1_email && !/^((\w|\.|\-)+)@(\w+){2,}\.(\w+){2,}$/.test(forSend.form1_email)){
    toggleClass(emailEl, 'error', true);
    toggleClass(emailEl, 'error-format', true);
    isValid = false;
  }
  if(forSend.form1_phone !== 'n/a' && /[a-zA-Z]/.test(forSend.form1_phone)){
    toggleClass(phoneEl, 'error', true);
    toggleClass(phoneEl, 'error-format', true);
    isValid = false;
  }
 
  if(!isValid) return;

  let hasFile  = false;


  console.log("will push=", fileInput, fileInput.files.length)
  if(fileInput && fileInput.files.length){
    const formData = new FormData();
    hasFile = true;

    formData.append('form1_name', 'forSend.form1_name');
    formData.append('form1_email', forSend.form1_email);
    formData.append('form1_phone', forSend.form1_phone);
    formData.append('form1_comment', forSend.form1_comment);
    // formData.append('form1_nda', forSend.form1_nda)
    if(forSend.email){
      formData.append('email', forSend.email);
    }
    formData.append('history_count', forSend.history_count);
    formData.append('history', forSend.history);
    formData.append('file', fileInput.files[0]);
    setTimeout(() => {
      console.dir('formData==', formData)
    }, 1000);
    forSend = formData;
  }
  console.dir("FINAL DATA=")
  for (let key of forSend.entries()) {
    console.log(key[0] + ', ' + key[1]);
  }

  sendForm('POST', 'https://exceed-team.com/epapi/apply', forSend , (e) => {
      console.log('success');
      location.href = 'pages/thank-you.html';
    }, (e) => {
      console.log('error')
      location.href = 'pages/error.html';
    }, hasFile
  )
}

init();

function completed() {
  document.removeEventListener( "DOMContentLoaded", completed );
  window.removeEventListener( "load", completed );
  jQuery.ready();
}