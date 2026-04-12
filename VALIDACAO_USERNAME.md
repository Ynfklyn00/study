# Documentação - Validação de Nomes de Usuário Repetidos

## 📋 Visão Geral

Este documento descreve o sistema de validação de nomes de usuário (username) que impede o cadastro duplicado de usuários. O sistema verifica em tempo real se um username já está em uso e exibe uma mensagem de erro em vermelho caso haja duplicação.

---

## 🎯 Funcionalidades

### 1. **Validação em Tempo Real**

- Enquanto o usuário digita na caixa de "Nome de usuário", o sistema verifica automaticamente se aquele nome já existe
- A mensagem de erro aparece/desaparece dinamicamente

### 2. **Bloqueio de Cadastro Duplicado**

- Se o username já existe, o botão "Cadastrar" não funciona
- O formulário não é enviado enquanto houver um nome de usuário duplicado

### 3. **Armazenamento de Dados**

- Todos os usuários cadastrados são salvos no `localStorage` do navegador
- Os dados persistem mesmo após fechar o navegador

### 4. **Mensagem de Erro Visual**

- Texto em **vermelho** (#dc3545)
- Aparecer abaixo da caixa de entrada de username
- Mensagem: "Nome de usuário já em uso!"

---

## 🔧 Componentes Técnicos

### **HTML** (cadastro.html)

```html
<div class="form-group">
  <label for="username">Nome de usuário:</label>
  <input type="text" id="username" name="username" required />
  <div id="username-error" class="error-message"></div>
</div>
```

- **`<input id="username">`**: Campo para entrada do nome de usuário
- **`<div id="username-error">`**: Elemento que exibe a mensagem de erro

### **CSS** (style.css)

```css
.error-message {
  color: #dc3545; /* Vermelho */
  font-size: 12px; /* Texto pequeno */
  margin-top: 5px; /* Espaçamento */
  display: none; /* Oculto por padrão */
}

.error-message.show {
  display: block; /* Visível quando tem erro */
}
```

- Classe `.error-message`: Define o estilo da mensagem (oculta por padrão)
- Classe `.show`: Mostra a mensagem quando ativada via JavaScript

### **JavaScript** (script.js)

#### 1. **Inicialização de Dados**

```javascript
let users = JSON.parse(localStorage.getItem("users")) || []
```

- Recupera lista de usuários do localStorage
- Se não existir, cria um array vazio

#### 2. **Validação em Tempo Real (addEventListener "input")**

```javascript
usernameInput.addEventListener("input", function () {
  const username = this.value.trim()

  if (username.length === 0) {
    usernameError.classList.remove("show")
    usernameError.textContent = ""
    return
  }

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
```

**Funcionamento:**

- Captura cada digitação/alteração no campo de username
- Remove espaços em branco com `.trim()`
- Se vazio, oculta a mensagem de erro
- Procura se o username existe na lista de usuários (case-insensitive)
- Se existe: mostra mensagem de erro em vermelho
- Se não existe: remove a mensagem de erro

#### 3. **Validação no Cadastro (addEventListener "submit")**

```javascript
form.addEventListener("submit", function (e) {
  e.preventDefault()

  const username = usernameInput.value.trim()
  const email = document.getElementById("email").value.trim()
  const password = document.getElementById("password").value

  const usernameExists = users.some(
    (user) => user.username.toLowerCase() === username.toLowerCase(),
  )

  if (usernameExists) {
    usernameError.textContent = "Nome de usuário já em uso!"
    usernameError.classList.add("show")
    return // ← Impede o cadastro
  }

  // Adiciona novo usuário
  users.push({
    username: username,
    email: email,
    password: password,
  })

  localStorage.setItem("users", JSON.stringify(users))

  form.reset()
  usernameError.classList.remove("show")

  alert("Cadastro realizado com sucesso!")
  window.location.href = "login.html"
})
```

**Funcionamento:**

- `e.preventDefault()`: Evita recarregar a página
- Coleta dados do formulário
- Verifica novamente se o username existe
- Se existe: mostra erro e para a execução (return)
- Se não existe:
  - Adiciona novo usuário ao array
  - Salva no localStorage
  - Limpa o formulário
  - Mostra confirmação
  - Redireciona para login

---

## 📊 Fluxo de Execução

```
Usuário digita username
    ↓
addEventListener "input" dispara
    ↓
Verifica se username existe
    ↓
    ├─ Sim → Mostra mensagem de erro em vermelho
    └─ Não → Remove mensagem de erro
    ↓
Usuário clica em "Cadastrar"
    ↓
addEventListener "submit" dispara
    ↓
Verifica novamente se username existe
    ↓
    ├─ Sim → Exibe erro, não permite cadastro
    └─ Não → Adiciona usuário, salva e redireciona
```

---

## 💾 Armazenamento (localStorage)

### Estrutura dos Dados

```json
{
  "users": [
    {
      "username": "joao",
      "email": "joao@email.com",
      "password": "senha123"
    },
    {
      "username": "maria",
      "email": "maria@email.com",
      "password": "senha456"
    }
  ]
}
```

### Como Acessar no Navegador

1. Abra o Developer Tools (F12)
2. Vá para a aba "Application" ou "Storage"
3. Clique em "Local Storage"
4. Selecione o domínio do site
5. Veja a chave "users" com o array de usuários

---

## ⚙️ Funcionalidades Detalhadas

### 1. **Case-Insensitive Validation**

```javascript
user.username.toLowerCase() === username.toLowerCase()
```

- Compara usernames em minúsculas
- "João" = "joão" = "JOÃO" (considera duplicado)

### 2. **Trim de Espaços**

```javascript
this.value.trim()
```

- Remove espaços em branco no início e fim
- " joao " vira "joao"

### 3. **Prevenção de Envio Duplicado**

- `e.preventDefault()` impede comportamento padrão do formulário
- `return` para a execução se houver erro

---

## 🚀 Como Testar

### Teste 1: Validação em Tempo Real

1. Abra a página de cadastro
2. Digite um username
3. Verifique se a mensagem de erro aparece/desaparece

### Teste 2: Bloqueio de Cadastro

1. Cadastre um usuário (ex: "usuario1")
2. Tente cadastrar outro com o mesmo nome
3. Verifique se o formulário não envia

### Teste 3: Persistência de Dados

1. Cadastre um usuário
2. Feche o navegador completamente
3. Reabra e tente cadastrar o mesmo username
4. Verifique se o sistema ainda reconhece como duplicado

---

## ⚠️ Limitações Atuais

- ⚠️ Os dados são armazenados apenas no `localStorage` (específico do navegador)
- ⚠️ Se o usuário limpar o cache/histórico, os dados são perdidos
- ⚠️ A validação é apenas no lado do cliente (front-end)
- ⚠️ Não há validação segura no servidor (back-end)

---

## 🔮 Futuras Melhorias

Para um sistema mais robusto, considere:

1. **Backend/Servidor**
   - Validação no servidor para maior segurança
   - Banco de dados para persistência durável

2. **Melhorias de UX**
   - Validação de email também
   - Requisitos de senha mais fortes
   - Confirmação de senha

3. **Segurança**
   - Hash de senhas antes de armazenar
   - Proteção contra SQL injection (se usar banco de dados)

---

## 📝 Resumo

Este sistema implementa uma **validação básica de duplicação de usernames** com:

- ✅ Verificação em tempo real
- ✅ Bloqueio de cadastro duplicado
- ✅ Mensagem de erro visual
- ✅ Armazenamento persistente (localStorage)

É uma solução adequada para **aplicações de aprendizado e protótipos**, mas recomenda-se adicionar validação no servidor para aplicações em produção.
