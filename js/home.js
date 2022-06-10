let logged = sessionStorage.getItem('logged')
const session = localStorage.getItem('session')

let data = {
  transactions: []
}

alert('Login efetuado com sucesso!')

document.getElementById('button-logout').addEventListener('click', logout)

checkLogged()

function checkLogged() {
  if (session) {
    sessionStorage.setItem('logged', session)
    logged = session
  }

  if (!logged) {
    window.location.href = 'index.html'
    return
  }

  const dataUser = localStorage.getItem(logged)
  if (dataUser) {
    data = JSON.parse(dataUser)
  }
}

function logout() {
  sessionStorage.removeItem('logged')
  localStorage.removeItem('session')

  window.location.href = 'index.html'
}

function saveData(data) {
  localStorage.setItem(data.login, JSON.stringify(data))
}
