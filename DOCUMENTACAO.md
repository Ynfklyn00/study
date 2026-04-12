# Documentação - Sistema de Login e Cadastro

## Data: 12/04/2026

---

## 📋 Resumo das Modificações

Foi implementado um fluxo completo de autenticação no projeto com redirecionamento de páginas. Quando o usuário clica nos botões "Faça login" ou "Cadastre-se" na página inicial, ele é redirecionado para as respectivas telas dedicadas.

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

### 3. **Redirecionamento do Botão Cadastre-se**

- **Arquivo modificado:** `index.html`
- **O que foi feito:**
  - Alterado o link do botão "Cadastre-se" de `href="#"` para `href="cadastro.html"`
  - Agora clicando no botão, o usuário é redirecionado para a página de cadastro

**Antes:**

```html
<a href="#" class="btn">Cadastre-se</a>
```

**Depois:**

```html
<a href="cadastro.html" class="btn">Cadastre-se</a>
```

---

### 4. **Página de Cadastro**

- **Arquivo criado:** `cadastro.html`
- **O que contém:**

#### Estrutura do Formulário:

- Campo de **Nome de usuário** (type: text)
- Campo de **Email** (type: email)
- Campo de **Senha** (type: password)
- Botão **"Cadastrar"** (type: submit)
- Link para **Voltar** à página principal

#### Estilos CSS Inclusos:

- `.cadastro-container` - Contêiner principal com borda e fundo
- `.form-group` - Agrupamento de campos do formulário
- `.btn-cadastro` - Estilo do botão de cadastro
- `.back-link` - Estilo do link de voltar

#### Características de Design:

- Formulário centralizado com largura máxima de 400px
- Cores: Verde (#28a745) para botões e links (diferente do login)
- Efeito hover nos botões (verde mais escuro #218838)
- Efeito focus nos inputs (borda verde, fundo verde claro)
- Responsivo com `viewport` configurado
- Font: Inter Tight (Google Fonts)
- Design consistente com a página de login, mas com paleta de cores diferenciada

---

## 📁 Estrutura de Arquivos

```
study/
├── index.html           (página inicial com botões)
├── login.html           (página de login - NOVO)
├── cadastro.html        (página de cadastro - NOVO)
├── style.css            (estilos compartilhados)
├── assets/              (pasta de assets)
└── DOCUMENTACAO.md      (este arquivo)
```

---

## 🔗 Fluxo de Navegação

```
                          index.html
                          /        \
                         /          \
            (Faça login) /            \ (Cadastre-se)
                       /                \
                   login.html        cadastro.html
                      |                 |
          (Voltar)     |    (Voltar)     |
                       \                /
                        \              /
                          \            /
                            index.html
```

**Detalhamento:**
- **Página Inicial (index.html):** Apresenta 3 botões: "Faça login", "Cadastre-se" e "Esqueci minha senha"
- **Login (login.html):** Permite usuário existente fazer login com email e senha
- **Cadastro (cadastro.html):** Permite novo usuário se registrar com nome de usuário, email e senha
- **Voltar:** Ambas as páginas possuem link para retornar à página inicial

---

## 💡 Próximos Passos (Sugestões)

- [x] ~~Criar página de cadastro~~ ✅ Concluído
- [ ] Implementar validação de formulário em JavaScript
- [ ] Conectar formulários a um backend para autenticação
- [ ] Adicionar recuperação de senha (página "Esqueci minha senha")
- [ ] Adicionar proteção CSRF nos formulários
- [ ] Implementar função "Lembrar-me" no login
- [ ] Criar sistema de confirmação de email
- [ ] Adicionar verificação de força de senha
- [ ] Implementar rate limiting para tentativas de login
- [ ] Criar página de dashboard/home após login bem-sucedido

---

## 📝 Notas

- Os formulários atualmente não fazem autenticação real (falta integração com backend)
- Todos os campos são obrigatórios mas não há validação JavaScript adicional
- Os links "Voltar" permitem retornar à página inicial
- Todo o CSS está embutido no HTML de cada página (login.html e cadastro.html)
- A página de login usa cores **azuis** (#007bff) para diferenciação visual
- A página de cadastro usa cores **verdes** (#28a745) para diferenciação visual
- Ambas as páginas usam a mesma fonte (Inter Tight) e layout responsivo
- O botão "Esqueci minha senha" ainda não possui redirecionamento (TODO)

---

## 📊 Comparação: Login vs Cadastro

| Aspecto | Login | Cadastro |
|---------|-------|----------|
| **Arquivo** | login.html | cadastro.html |
| **Cor Principal** | Azul (#007bff) | Verde (#28a745) |
| **Campo 1** | Email | Nome de usuário |
| **Campo 2** | Senha | Email |
| **Campo 3** | — | Senha |
| **Botão** | Entrar | Cadastrar |
| **Para quem** | Usuários existentes | Novos usuários |

---

## 🎨 Paleta de Cores

### Login (Azul)
- Primária: `#007bff`
- Hover: `#0056b3`
- Focus: `#f0f7ff`

### Cadastro (Verde)
- Primária: `#28a745`
- Hover: `#218838`
- Focus: `#f0fff4`
