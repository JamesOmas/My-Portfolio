document.querySelectorAll('nav a').forEach(link=>{
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetID = link.getAttribute('href').slice(1);
    const targetEl = document.getElementById(targetID);
  if(targetEl){
      targetEl.scrollIntoView({behavior: 'smooth'});
      targetEl.focus({preventScroll: true});  
    }
  });
});

(() => {
  const form = document.getElementById('contactForm');
  const nameInput = form.elements['name'];
  const emailInput = form.elements['email'];
  const messageInput = form.elements['message'];
  const nameHelp = document.getElementById('nameHelp');
  const emailHelp = document.getElementById('emailHelp');
  const messageHelp = document.getElementById('messageHelp');
  const formFeedback = document.getElementById('formFeedback');

  function validateEmail(mail) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(mail.toLowerCase());
  }
form.addEventListener('submit', e => {
  e.preventDefault();
    let valid = true;

  if(nameInput.value.trim().length < 2) {
      nameHelp.textContent = 'Enter at least two characters.';
      valid = false;
    } else {
      nameHelp.textContent = '';
    }

  if(!validateEmail(emailInput.value.trim())) {
      emailHelp.textContent = 'Enter a valid email address.';
      valid = false;
    } else {
      emailHelp.textContent = '';
  }
  if(messageInput.value.trim().length < 10) {
    messageHelp.textContent = 'Message must be at least 10 characters long.';
      valid = false;
  } else {
    messageHelp.textContent = '';
  }
  if(valid) {
    formFeedback.textContent = '';
    form.querySelector('button[type="submit"]').disabled = true;
    form.querySelector('button[type="submit"]').textContent = 'Sending...';

  setTimeout(() => {
    form.querySelector('button[type="submit"]').disabled = false;
    form.querySelector('button[type="submit"]').textContent = 'Send Message';
    form.reset();
    formFeedback.textContent = 'Message sent successfully! Thank you.';
    formFeedback.classList.remove('error');
    formFeedback.classList.add('success');
  }, 1500);
  } else {
    formFeedback.textContent = 'Please correct the errors and try again.';
    formFeedback.classList.remove('success');
    formFeedback.classList.add('error');
    }
  });
})();


(() => {
  const fadeEls = document.querySelectorAll('.fade-in-section');
  const onScroll = () => {
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if(rect.top <= window.innerHeight * 0.9) {
        el.classList.add('is-visible');
      }
    });
  };
  window.addEventListener('scroll', onScroll);
  window.addEventListener('resize', onScroll);
  document.addEventListener('DOMContentLoaded', onScroll);
})();