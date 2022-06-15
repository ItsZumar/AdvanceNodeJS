// // const { showAlert } = require('./alert');

const loginForm = document.querySelector('.form');

const login = async (email, password) => {
  try {
    // console.log(email, password);
    let res = await axios.post(`/api/v1/users/login`, {
      email,
      password,
    });

    if (res.data.status === 'success') {
      // showAlert('success', 'Logged in successfully!');
      alert('success');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    // showAlert('error', err.message);
    alert('error');
  }
};

const logout = async () => {
  try {
    let res = await axios.get(`/api/v1/users/logout`);
    if ((res.data.status = 'success')) location.reload(true);
  } catch (err) {
    // showAlert('error', 'Error logging out try again!');
    alert('error');
  }
};

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  login(email, password);
});
