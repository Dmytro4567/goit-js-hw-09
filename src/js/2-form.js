const form = document.querySelector('.feedback-form');
let formData = {
  email: '',
  message: ''
};

function loadFormData() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
}

loadFormData();

form.addEventListener('input', ({target: {name, value}}) => {
  formData[name] = value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const {email, message} = formData;

  if (!email || !message) {
    alert('Fill all fields');
    return;
  }

  console.log('Submitted Data:', formData);

  localStorage.removeItem('feedback-form-state');
  formData = {email: '', message: ''};
  form.reset();
});
