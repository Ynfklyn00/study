// Objeto para guardar usuários cadastrados
let users = JSON.parse(localStorage.getItem("users")) || []

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
