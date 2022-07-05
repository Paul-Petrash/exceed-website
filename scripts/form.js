import {gc} from './header_footer.js';

gc('.cfbtn', start_h)

const fileInput = ge('#fileLoader');
if(fileInput){
  fileInput.addEventListener('change',  (e) => {
    if(e.target.files.length){
      e.target.classList.toggle('empty', false)
    }else{
      e.target.classList.toggle('empty', true)
    }
  })
}
console.log('LOOOG', 'HRERE');
let localFullName = localStorage.getItem('fullName');
let localPhone = localStorage.getItem('phone');
let localEmail = localStorage.getItem('email');
let localComment = localStorage.getItem('comment');
let localNda = localStorage.getItem('nda');
let localTags = localStorage.getItem('card-tag');

function init(){
  // const mainParent = el.parentElement.classList.contains('cff') ? el.parentElement : el.parentElement.parentElement
  const mainParent = document.querySelector('.request-form');
  const nameEl = mainParent.querySelector('.cfn');
  const phoneEl = mainParent.querySelector('.cfp');
  const emailEl = mainParent.querySelector('.cfe');
  const messageEl = mainParent.querySelector('.cfm');
  const ndaEl = mainParent.querySelector('.cfnda');
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
  if(!ndaEl.onclick){
    ndaEl.onclick = handleChange
  }
  if(!cardAutoEl.onclick){
    cardAutoEl.onclick = handleChange
  }
}

function handleChange(e) {
  tCl(e.target.parentNode, 'error', false);
  tCl(e.target.parentNode, 'error-format', false);
  const name = e.target.getAttribute('name');
  const value = e.target.value;

  if(name === 'full_name') {
    if(!value.trim()){
      tCl(e.target.parentElement, 'error', true)
    }

    if (value && /[0-9]/.test(value)) {
      tCl(e.target.parentElement, 'error', true)
      tCl(e.target.parentElement, 'error-format', true);
    }
    localStorage.setItem('fullName', value);
  }

  if(name === 'phone') {
    if (value && /[a-zA-Z]/.test(value)) {
      tCl(e.target.parentElement, 'error', true)
      tCl(e.target.parentElement, 'error-format', true);
    }
    localStorage.setItem('phone', value);
  }

  if(name === 'email') {
    if(!value.trim()){
      tCl(e.target.parentElement, 'error', true)
    }

    if (value && !/^((\w|\.|\-)+)@(\w+){2,}\.(\w+){1,}$/.test(value)) {
      tCl(e.target.parentElement, 'error', true)
      tCl(e.target.parentElement, 'error-format', true);
    }
    localStorage.setItem('email', value);
  }

  console.log('LOOOG', name, value);
  if(name === 'about_project') {
    console.log('LOOOG 222', name, value);
    localStorage.setItem('comment', value);
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
  const ndaEl = mainParent.querySelector('.cfnda');

  const cardAutoEl = mainParent.querySelectorAll('.active-tag');

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
  if(!ndaEl.onkeyup){
    ndaEl.onkeyup = handleChange
  }
  if(!cardAutoEl.onclick){
    cardAutoEl.onclick = handleChange
  }

  let arrEl = [...cardAutoEl];
  let arrTags = [];

  arrEl.forEach(val => {
    arrTags.push(val.id);
  })
  
  function gv(sel) {
    return (mainParent.querySelector(sel) || {}).value
  }

  function get_history() {
    try {
      let vv = JSON.parse(localStorage.getItem('history_arr')) || [];
      return vv.map(it => {
        return it.cd + ' x' + (it.count || 1) + ': ' + it.url
      }).join('\n')
    } catch (e) {
      return '----'
    }
  }

  let forSend = {
    form1_name: nameEl.value,
    form1_nda: ndaEl.checked,
    form1_tags: arrTags,
    form1_email: emailEl.value,
    form1_phone: gv(".cfp") || 'n/a',
    email: gv('[name="email_tr"]') || '',
    form1_comment: messageEl.value,
    history_count: localStorage.getItem('history_count'),
    history: get_history()
  }

  console.log(forSend.form1_phone)
  let isValid = true;

  if(!forSend.form1_name.trim()){
    tCl(nameEl.parentElement, 'error', true)
    isValid = false;
  }

  if(!forSend.form1_email.trim()){
    tCl(emailEl.parentElement, 'error', true)
    isValid = false;
  }

  if(forSend.form1_tags.length === 0){
    if(!forSend.form1_comment.trim()){
      tCl(messageEl.parentElement, 'error', true)
      isValid = false;
    }
  }

  if(forSend.form1_name && /[0-9]/.test(forSend.form1_name)){
    tCl(nameEl.parentElement, 'error', true)
    tCl(nameEl.parentElement, 'error-format', true);
    isValid = false;
  }
  if(forSend.form1_email && !/^((\w|\.|\-)+)@(\w+){2,}\.(\w+){2,}$/.test(forSend.form1_email)){
    tCl(emailEl.parentElement, 'error', true)
    tCl(emailEl.parentElement, 'error-format', true);
    isValid = false;
  }
  
  if(forSend.form1_phone !== 'n/a' && /[a-zA-Z]/.test(forSend.form1_phone)){
    tCl(phoneEl.parentElement, 'error', true)
    tCl(phoneEl.parentElement, 'error-format', true);
    isValid = false;
  }
  if(!isValid){
    return
  }

  let hasFile  = false
  const formData = new FormData();

  if(fileInput && fileInput.files.length){
    hasFile = true;
    formData.append('form1_name', forSend.form1_name)
    formData.append('form1_email', forSend.form1_email)
    formData.append('form1_phone', forSend.form1_phone)
    formData.append('form1_comment', forSend.form1_comment)
    // formData.append('form1_nda', forSend.form1_nda)
    if(forSend.email){
      formData.append('email', forSend.email)
    }
    formData.append('history_count', forSend.history_count)
    formData.append('history', forSend.history)
    formData.append('file', fileInput.files[0])

    forSend = formData;
  }
  console.log('LOOOG', forSend);
  a('POST', 'https://exceed-team.com/epapi/apply', forSend , (e) => {
      location.href = '/thank-you'
    }, (e) => {
    console.log('LOOOG', e);
      location.href = '/thank-you'
    }, hasFile
  )
}

init();

function completed() {
  document.removeEventListener( "DOMContentLoaded", completed );
  window.removeEventListener( "load", completed );
  jQuery.ready();
}