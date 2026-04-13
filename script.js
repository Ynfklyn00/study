// Objeto para guardar usuários cadastrados
let users = JSON.parse(localStorage.getItem("users")) || []

// Toggle para visualizar/ocultar senha
const togglePasswordBtn = document.getElementById("toggle-password")
const passwordInput = document.getElementById("password")

if (togglePasswordBtn && passwordInput) {
  togglePasswordBtn.addEventListener("click", function (e) {
    e.preventDefault()
    
    const isPassword = passwordInput.type === "password"
    passwordInput.type = isPassword ? "text" : "password"
    
    // Mudar o ícone
    const svg = this.querySelector("svg")
    if (isPassword) {
      // Mostrar olho aberto (ocultar ícone de olho fechado)
      svg.innerHTML = '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>'
    } else {
      // Restaurar ícone original (olho fechado)
      svg.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>'
    }
  })
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form")
  const usernameInput = document.getElementById("username")
  const usernameError = document.getElementById("username-error")

  // Validar username em tempo real enquanto o usuário digita
  if (usernameInput) {
    usernameInput.addEventListener("input", function () {
      const username = this.value.trim()

      if (username.length === 0) {
        usernameError.classList.remove("show")
        usernameError.textContent = ""
        return
      }

      // Verificar se o username já existe
      const usernameExists = users.some(
        (user) => user.username.toLowerCase() === username.toLowerCase(),
      )

      if (usernameExists) {
        usernameError.textContent = "Nome de usuário já em uso!"
        usernameError.classList.add("show")
      } else {
        usernameError.classList.remove("show")
        usernameError.textContent = ""
      }
    })
  }

  // Validar no envio do formulário
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault()

      const username = usernameInput.value.trim()
      const email = document.getElementById("email").value.trim()
      const password = document.getElementById("password").value

      // Verificar se username já existe
      const usernameExists = users.some(
        (user) => user.username.toLowerCase() === username.toLowerCase(),
      )

      if (usernameExists) {
        usernameError.textContent = "Nome de usuário já em uso!"
        usernameError.classList.add("show")
        return
      }

      // Se tudo estiver OK, adicionar novo usuário
      users.push({
        username: username,
        email: email,
        password: password,
      })

      localStorage.setItem("users", JSON.stringify(users))

      // Limpar formulário
      form.reset()
      usernameError.classList.remove("show")

      alert("Cadastro realizado com sucesso!")
      window.location.href = "login.html"
    })
  }
})
