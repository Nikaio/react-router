# 🚀 Prime React Router

Um projeto **React moderno**, organizado e didático e seguindo **padrões profissionais utilizados no mercado**.

O projeto simula um website com múltiplas páginas, navegação SPA, layout reutilizável, **Sidebar responsivo**, **Dark / Light Theme real**, formulários interativos e otimização de performance com *lazy loading*.

---

## ✨ Preview do Projeto

🔹 Layout moderno com PrimeReact
🔹 Navegação fluida sem recarregar a página
🔹 Sidebar responsivo (desktop e mobile)
🔹 Dark / Light Theme real com troca dinâmica
🔹 Código organizado e escalável

---

## 🎯 Objetivo do Projeto

Este projeto foi criado para:

* Aprender e praticar **React Router DOM**
* Trabalhar com **componentes de layout reutilizáveis**
* Aplicar **lazy loading** para melhorar performance
* Utilizar bibliotecas de UI profissionais (**PrimeReact + PrimeFlex**)
* Implementar **Dark / Light Theme real**
* Desenvolver formulários interativos com feedback ao usuário
* Seguir uma estrutura próxima da realidade do mercado

---

## 🧠 Conceitos Trabalhados

* SPA (Single Page Application)
* Rotas dinâmicas e página 404
* Layout compartilhado (Header, Sidebar e Footer)
* Context API
* Hooks (`useState`, `useEffect`, `useContext`, `useParams`)
* Componentização
* Organização de pastas
* UX e UI

---

## 🛠️ Tecnologias Utilizadas

### ⚛️ Front-end

* **React** (com Vite)
* **React Router DOM**

### 🎨 UI / Estilo

* **PrimeReact** (componentes prontos e temas)
* **PrimeFlex** (grid, layout e responsividade)
* **PrimeIcons** (ícones)

### 🌗 Tema

* Dark Theme (Lara Dark Indigo)
* Light Theme (Lara Light Indigo)
* Alternância dinâmica via Context API

---

## 📂 Estrutura de Pastas

```bash
src/
│── components/
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   └── Footer.jsx
│
│── context/
│   └── ThemeContext.jsx
│
│── layouts/
│   └── MainLayout.jsx
│
│── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── User.jsx
│   └── NotFound.jsx
│
│── App.jsx
│── main.jsx
```

---

## 🧭 Rotas da Aplicação

| Rota        | Descrição                         |
| ----------- | --------------------------------- |
| `/`         | Página inicial                    |
| `/about`    | Sobre o projeto                   |
| `/contact`  | Formulário de contato             |
| `/user/:id` | Rota dinâmica (perfil de usuário) |
| `*`         | Página 404                        |

---

## 📬 Página de Contato (Formulário Interativo)

O formulário de contato possui:

* Campo **Nome**
* Campo **E-mail**
* Campo **Mensagem**
* Validação básica
* Feedback visual com **Toast**
* Reset automático após envio

Tudo controlado com **React Hooks**, seguindo boas práticas.

---

## 🌗 Dark / Light Theme

O projeto utiliza **troca real de tema do PrimeReact**.

✔ Context API para controle global
✔ Tema salvo em estado global
✔ Cards com contraste automático no modo Light
✔ Layout consistente em ambos os modos

---

## ⚡ Performance

* **Lazy Loading** com `React.lazy`
* `Suspense` com fallback visual
* Componentes carregados apenas quando necessários

---

## 👨‍💻 Perfil do Projeto

* 🔰 **Nível:** Dev Júnior
* 🏗️ **Padrão:** Profissional
* 🎨 **Design:** Moderno e clean
* 🧩 **Escalável:** Sim

---

## 📌 Próximas Evoluções Possíveis

* Autenticação (Login / Logout)
* Rotas protegidas
* Persistência de tema no LocalStorage
* Integração com API
* Dashboard
* Animações avançadas

---

## 📝 Autor Nicollas Alessandro

Projeto desenvolvido para fins de **aprendizado e prática profissional em React**.

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
