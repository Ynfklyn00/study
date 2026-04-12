# Documentação - Sistema de Login

## Data: 12/04/2026

---

## 📋 Resumo das Modificações

Foi implementado um fluxo de login no projeto com redirecionamento de página. Quando o usuário clica no botão "Faça login" na página inicial, ele é redirecionado para uma tela de login dedicada.

---

## 🔄 Funcionalidades Implementadas

### 1. **Redirecionamento do Botão de Login**

- **Arquivo modificado:** `index.html`
- **O que foi feito:**
  - Alterado o link do botão "Faça login" de `href="#"` para `href="login.html"`
  - Agora clicando no botão, o usuário é redirecionado para a página de login

**Antes:**

```html
<a href="#" class="btn">Faça login</a>
```

**Depois:**

```html
<a href="login.html" class="btn">Faça login</a>
```

---

### 2. **Página de Login**

- **Arquivo criado:** `login.html`
- **O que contém:**

#### Estrutura do Formulário:

- Campo de **Email** (type: email)
- Campo de **Senha** (type: password)
- Botão **"Entrar"** (type: submit)
- Link para **Voltar** à página principal

#### Estilos CSS Inclusos:

- `.login-container` - Contêiner principal com borda e fundo
- `.form-group` - Agrupamento de campos do formulário
- `.btn-login` - Estilo do botão de entrada
- `.back-link` - Estilo do link de voltar

#### Características de Design:

- Formulário centralizado com largura máxima de 400px
- Cores: Azul (#007bff) para botões e links
- Efeito hover nos botões (azul mais escuro #0056b3)
- Efeito focus nos inputs (borda azul, fundo azul claro)
- Responsivo com `viewport` configurado
- Font: Inter Tight (Google Fonts)

---

## 📁 Estrutura de Arquivos

```
study/
├── index.html           (página inicial com botões)
├── login.html           (página de login - NOVO)
├── style.css            (estilos compartilhados)
├── assets/              (pasta de assets)
└── DOCUMENTACAO.md      (este arquivo)
```

---

## 🔗 Fluxo de Navegação

```
index.html
   ↓ (clica em "Faça login")
login.html
   ↓ (clica em "Voltar")
index.html
```

---

## 💡 Próximos Passos (Sugestões)

- [ ] Implementar validação de formulário em JavaScript
- [ ] Conectar o formulário a um backend para autenticação
- [ ] Adicionar recuperação de senha
- [ ] Criar página de cadastro
- [ ] Adicionar proteção CSRF
- [ ] Implementar "Lembrar-me"

---

## 📝 Notas

- O formulário atualmente não faz login real (falta integração com backend)
- Os campos são obrigatórios mas não há validação JS adicional
- O link "Voltar" permite retornar à página inicial
- Todo o CSS está embutido no HTML da página de login
