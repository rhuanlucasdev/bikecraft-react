<div align="center">

<img src="https://img.shields.io/badge/STATUS-Em%20Desenvolvimento-FFB800?style=for-the-badge&labelColor=1a1a1a" alt="Status" />
&nbsp;
<img src="https://img.shields.io/badge/VERSÃO-0.1.0-FFB800?style=for-the-badge&labelColor=1a1a1a" alt="Versão" />
&nbsp;
<img src="https://img.shields.io/badge/LICENÇA-MIT-FFB800?style=for-the-badge&labelColor=1a1a1a" alt="Licença" />

<br /><br />

# 🚲 Bikecraft — Next.js Version

<p>
  Recriação do projeto Bikecraft em arquitetura moderna com <strong>React 19</strong> e <strong>Next.js App Router</strong>,
  organizada por rotas, páginas e componentes reutilizáveis.
</p>

<br/>

</div>

---

## 🧭 Sobre o Projeto

O **Bikecraft** nasceu como um estudo de frontend com HTML semântico, CSS e JavaScript puros. Esta versão em **Next.js** atualiza a base do projeto para uma estrutura mais escalável, com rotas dedicadas, layout compartilhado e composição por componentes.

O foco atual é manter o visual e a proposta do projeto original enquanto a aplicação evolui com práticas mais próximas do desenvolvimento moderno em React.

---

## 🛠️ Tecnologias Utilizadas

<div align="center">

<img src="https://img.shields.io/badge/Next.js%2016-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js 16" />
&nbsp;
<img src="https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" />
&nbsp;
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
&nbsp;
<img src="https://img.shields.io/badge/CSS%20Modules-000000?style=for-the-badge&logo=cssmodules&logoColor=white" alt="CSS Modules" />
&nbsp;
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
&nbsp;
<img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />

</div>

<br/>

| Tecnologia      | Versão | Uso no projeto                                            |
| --------------- | ------ | --------------------------------------------------------- |
| **Next.js**     | 16.2.6 | Framework principal com App Router para rotas e rendering |
| **React**       | 19.2.4 | Construção de interfaces com componentes reutilizáveis    |
| **React DOM**   | 19.2.4 | Renderização no navegador                                 |
| **CSS Modules** | —      | Escopo isolado de estilos por componente                  |
| **ESLint**      | ^9     | Padronização e qualidade de código                        |
| **next/font**   | —      | Carregamento otimizado de fontes                          |
| **next/image**  | —      | Otimização automática de imagens                          |
| **next/link**   | —      | Navegação client-side com prefetch automático             |

---

## 🎯 Objetivos do Projeto

- Praticar **componentização** no React 19
- Estruturar a aplicação com **Next.js App Router**
- Separar páginas, seções e componentes reutilizáveis
- Melhorar **organização e escalabilidade** do código
- Aplicar **boas práticas** de frontend moderno
- Utilizar **otimizações nativas** do Next.js

---

## 🗂️ Estrutura do Projeto

```
bikecraft-react/
│
├── public/
│   ├── img/
│   └── videos/
│
├── src/
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js
│   │   ├── not-found.js
│   │   ├── globals.css
│   │   ├── bicicletas/page.js
│   │   ├── contato/page.js
│   │   └── seguros/page.js
│   │
│   └── components/
│       ├── BikeCard.js
│       ├── BikeList/
│       ├── Footer/
│       ├── Header/
│       ├── Home/
│       │   ├── Hero/
│       │   ├── Tecnologias/
│       │   ├── Parceiros/
│       │   └── Depoimentos/
│       ├── NotFound/
│       ├── Seguros/
│       ├── pages/
│       │   ├── bicicletas/
│       │   ├── contato/
│       │   └── seguros/
│       └── ui/
│           └── Button/
│
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
└── README.md
```

---

## 🧩 Arquitetura Atual

### Layout compartilhado

O arquivo de layout centraliza a estrutura global da aplicação com `Header` e `Footer`, além de carregar a fonte via `next/font`.

### Página inicial

A home é composta por seções já organizadas em componentes separados:

- `Hero`
- `BikeList`
- `Tecnologias`
- `Parceiros`
- `Depoimentos`
- `SegurosSection`

### Rotas internas

Além da home, o projeto possui páginas dedicadas para `bicicletas`, `contato` e `seguros`, cada uma montando sua própria composição de seções e componentes.

### Componentes reutilizáveis

- `Button` concentra variações de botão e link
- `BikeCard` representa um item de bicicleta
- `Header` e `Footer` são compartilhados em toda a aplicação

---

## ✅ Funcionalidades Implementadas

- [x] Roteamento com App Router do Next.js
- [x] Layout global com `Header` e `Footer`
- [x] Página inicial composta por seções reutilizáveis
- [x] Páginas dedicadas para `bicicletas`, `contato` e `seguros`
- [x] Página 404 personalizada
- [x] Componentização de cards, listas e blocos visuais
- [x] CSS Modules para escopo isolado de estilos
- [x] Uso de `next/image` e `next/link`
- [x] Metadados por página
- [x] Configuração de ESLint com `eslint-config-next`

---

## 🔧 Como Executar

### Pré-requisitos

<img src="https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node 18+" />
&nbsp;
<img src="https://img.shields.io/badge/npm-CC3534?style=flat-square&logo=npm&logoColor=white" alt="npm" />

### Instalação e execução

```bash
# 1. Clone o repositório
git clone https://github.com/rhuanlucasdev/bikecraft-react.git

# 2. Acesse a pasta do projeto
cd bikecraft-react

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse **http://localhost:3000** no seu navegador.

### Scripts disponíveis

```bash
npm run dev      # Servidor de desenvolvimento com hot-reload
npm run build    # Build otimizado para produção
npm start        # Inicia o servidor em modo produção
npm run lint     # Verifica padrões de código com ESLint
```

---

## 📐 Decisões de Arquitetura

### Por que CSS Modules?

Mantém a familiaridade com CSS puro do projeto original, adicionando escopo local de estilos por componente sem dependência de bibliotecas de CSS-in-JS.

### Por que dividir por páginas e componentes?

Separar `app/` de `components/` deixa as rotas enxutas e concentra a lógica visual nos blocos que realmente precisam renderizar conteúdo.

### Por que React 19 + Next.js 16?

O projeto acompanha versões recentes do ecossistema para praticar com a API moderna do React e com as otimizações nativas do Next.js.

---

## 📚 Aprendizados

Este projeto consolida conhecimentos em:

- **App Router** do Next.js (layout, rotas e metadados)
- **Componentização progressiva** a partir de uma interface estática
- **CSS Modules** em um projeto React real
- **Separação de responsabilidades** entre páginas, seções e componentes de apoio
- **Otimizações do Next.js** para imagens, navegação e fontes
- **React 19**: novas APIs e melhorias de performance

---

## 👨‍💻 Autor

<div align="center">

<a href="https://github.com/rhuanlucasdev">
  <img src="https://github.com/rhuanlucasdev.png" width="100" style="border-radius: 50%;" alt="@rhuanlucasdev" />
</a>

<br/><br/>

<a href="https://github.com/rhuanlucasdev">
  <img src="https://img.shields.io/badge/@rhuanlucasdev-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub @rhuanlucasdev" />
</a>

<br/><br/>

Desenvolvido com dedicação como parte de um processo contínuo de evolução como desenvolvedor frontend,<br/>
com foco em <strong>React</strong>, <strong>Next.js</strong> e <strong>arquitetura de componentes reutilizáveis</strong>.

</div>

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

<div align="center">

<sub>Projeto original Bikecraft desenvolvido durante estudos de frontend com HTML, CSS e JavaScript puro.<br/>Esta versão Next.js é uma recriação focada em modernização de arquitetura.</sub>

<br/><br/>

⭐ Se este projeto te ajudou, considera deixar uma estrela no repositório!

</div>
