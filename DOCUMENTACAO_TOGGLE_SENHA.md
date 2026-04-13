# Documentação - Toggle Visualizar/Ocultar Senha

## Resumo das Alterações

Adicionada funcionalidade de visualizar/ocultar senha no formulário de login com ícone de olho interativo.

---

## Arquivos Modificados

### 1. **login.html**

**Local da alteração:** Campo de senha do formulário

**O que foi mudado:**

- Substituído o input simples de senha por um container com estrutura melhorada
- Adicionado um botão tipo `button` com SVG (ícone de olho)
- O botão tem atributo `type="button"` para não submeter o formulário

**Código adicionado:**

```html
<div class="password-container">
  <input type="password" id="password" name="password" required />
  <button type="button" class="toggle-password" id="toggle-password">
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  </button>
</div>
```

**IDs utilizados:**

- `#password` - Input de senha (já existia)
- `#toggle-password` - Botão para alternar visualização (novo)

---

### 2. **style.css**

**Local da alteração:** Após os estilos de `.btn-login:hover`

**O que foi adicionado:**

#### `.password-container`

- Posicionamento relativo para o posicionamento absoluto do ícone
- Display flex com alinhamento central

#### `.password-container input`

- Padding direito aumentado (40px) para não sobrepor com o ícone

#### `.toggle-password`

- Posicionamento absoluto à direita do input
- Sem fundo, sem borda (aparência limpa)
- Cursor pointer para indicar interatividade
- Cor padrão cinza (#666)
- Transição de cor suave (0.3s)

#### `.toggle-password:hover`

- Muda cor para laranja (#ff8c00) ao passar o mouse

#### `.toggle-password svg`

- Tamanho fixo 20x20px

**Código CSS adicionado:**

```css
.password-container {
  position: relative;
  display: flex;
  align-items: center;
}

.password-container input {
  padding-right: 40px;
}

.toggle-password {
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  transition: color 0.3s ease;
}

.toggle-password:hover {
  color: #ff8c00;
}

.toggle-password svg {
  width: 20px;
  height: 20px;
}
```

---

### 3. **script.js**

**Local da alteração:** Início do arquivo, antes do `DOMContentLoaded`

**O que foi adicionado:**

Bloco de código executado imediatamente quando o script carrega:

```javascript
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
      svg.innerHTML =
        '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>'
    } else {
      // Restaurar ícone original (olho fechado)
      svg.innerHTML =
        '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>'
    }
  })
}
```

**Funcionalidade:**

1. Obtém referência do botão e do input de senha
2. Valida se ambos existem no DOM
3. Adiciona event listener ao clique
4. Impede comportamento padrão com `e.preventDefault()`
5. Alterna o tipo do input entre "password" e "text"
6. Muda o SVG do ícone:
   - De olho aberto para olho tachado quando mostra a senha
   - De olho tachado para olho aberto quando oculta a senha

---

## Comportamento da Funcionalidade

### Usuário clica no ícone:

1. ✅ Input muda de `type="password"` para `type="text"` (mostra a senha)
2. ✅ Ícone muda para olho tachado (indicando que está visível)
3. ✅ Cor do ícone fica laranja no hover

### Usuário clica novamente:

1. ✅ Input muda de `type="text"` para `type="password"` (oculta a senha)
2. ✅ Ícone volta ao padrão (olho aberto)
3. ✅ Comportamento se repete indefinidamente

---

## Compatibilidade

- ✅ HTML5 semântico
- ✅ SVG inline (compatível com navegadores modernos)
- ✅ CSS3 (flexbox, transition)
- ✅ JavaScript vanilla (sem dependências)
- ✅ Funciona em navegadores modernos (Chrome, Firefox, Safari, Edge)

---

## Acessibilidade

- O ícone usa SVG com `stroke` para melhor contraste
- Transições suaves para mudança de cor
- Cursor pointer indica elemento interativo
- Botão sem formulário evita conflitos de submit

---

## Melhorias Futuras (Sugestões)

- Adicionar atributo `aria-label` ao botão para leitores de tela
- Adicionar atributo `title` ao botão para tooltip
- Implementar animação ao mudar ícone (exemplo: rotação suave)
