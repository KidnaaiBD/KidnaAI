document.getElementById('start-btn').onclick = () => {
  document.getElementById('start-btn').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
};

document.getElementById('login-form').onsubmit = function (e) {
  e.preventDefault();
  const user = {
    name: document.getElementById('name').value,
    username: document.getElementById('username').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
    birthdate: document.getElementById('birthdate').value,
  };
  localStorage.setItem("kidnaUser", JSON.stringify(user));
  window.location.href = "dashboard.html";
};