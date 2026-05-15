<div align="center">

<img src="https://img.shields.io/badge/STATUS-Em%20Desenvolvimento-FFB800?style=for-the-badge&labelColor=1a1a1a" alt="Status" />
&nbsp;
<img src="https://img.shields.io/badge/VERSÃO-0.1.0-FFB800?style=for-the-badge&labelColor=1a1a1a" alt="Versão" />
&nbsp;
<img src="https://img.shields.io/badge/LICENÇA-MIT-FFB800?style=for-the-badge&labelColor=1a1a1a" alt="Licença" />

<br /><br />

# 🚲 Bikecraft — Next.js Version

<p>
  Recriação do projeto Bikecraft em arquitetura moderna com <strong>React 19</strong> e <strong>Next.js App Router</strong>,<br/>
  transformando uma aplicação estática em uma estrutura escalável baseada em componentes reutilizáveis.
</p>

<br/>

</div>

---

## 🧭 Sobre o Projeto

O **Bikcraft** foi originalmente desenvolvido durante estudos de frontend utilizando HTML semântico, CSS e JavaScript puros. Esta versão em **Next.js** representa uma migração de arquitetura com foco em modernização, componentização e boas práticas do desenvolvimento frontend atual.

O projeto serve como exercício prático de evolução como desenvolvedor, aplicando React 19, Next.js App Router e CSS Modules em uma aplicação real com design fiel ao original.

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

| Tecnologia      | Versão | Uso no projeto                                                 |
| --------------- | ------ | -------------------------------------------------------------- |
| **Next.js**     | 16.2.6 | Framework principal com App Router para roteamento e rendering |
| **React**       | 19.2.4 | Construção de interfaces com componentes reutilizáveis         |
| **React DOM**   | 19.2.4 | Renderização no navegador                                      |
| **CSS Modules** | —      | Escopo isolado de estilos por componente                       |
| **ESLint**      | ^9     | Padronização e qualidade de código                             |
| **next/image**  | —      | Otimização automática de imagens                               |
| **next/link**   | —      | Navegação client-side com prefetch automático                  |

---

## 🎯 Objetivos do Projeto

- Praticar **componentização** no React 19
- Aprender arquitetura moderna com **Next.js App Router**
- Transformar elementos repetitivos em **componentes reutilizáveis**
- Melhorar **organização e escalabilidade** do código
- Aplicar **boas práticas** de frontend moderno
- Utilizar **otimizações nativas** do Next.js

---

## 🗂️ Estrutura do Projeto

```
bikecraft-react/
│
├── public/                     # Arquivos estáticos públicos
│
├── src/
│   ├── app/                    # App Router do Next.js
│   │   ├── layout.jsx          # Layout raiz da aplicação
│   │   ├── page.jsx            # Página inicial
│   │   └── globals.css         # Estilos globais
│   │
│   ├── components/
│   │   ├── ui/                 # Componentes genéricos e reutilizáveis
│   │   │   ├── Button/
│   │   │   │   ├── Button.jsx
│   │   │   │   └── Button.module.css
│   │   │   └── SectionTitle/
│   │   │       ├── SectionTitle.jsx
│   │   │       └── SectionTitle.module.css
│   │   │
│   │   └── domain/             # Componentes de domínio da aplicação
│   │       ├── BikeCard/
│   │       ├── InsuranceCard/
│   │       ├── SocialLinks/
│   │       └── FooterNav/
│   │
│   └── sections/               # Grandes áreas da página
│       ├── Hero/
│       ├── BikeList/
│       ├── Technology/
│       ├── Partners/
│       ├── Testimonial/
│       ├── Insurance/
│       └── Footer/
│
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
└── README.md
```

---

## 🧩 Arquitetura de Componentes

### Componentes de UI — `components/ui/`

Componentes **genéricos, reutilizáveis e independentes** da regra de negócio. Podem ser usados em qualquer contexto sem acoplamento.

**`Button`** — Botão com suporte a variantes de estilo:

```jsx
<Button variant="primary" href="/bikes">
  Ver bicicletas
</Button>
```

**`SectionTitle`** — Título padronizado de seção, garantindo consistência visual:

```jsx
<SectionTitle label="Nossas bikes" title="Modelos exclusivos" />
```

---

### Componentes de Domínio — `components/domain/`

Componentes com significado específico dentro do contexto Bikecraft:

<div align="center">

| Componente      | Responsabilidade                                         |
| --------------- | -------------------------------------------------------- |
| `BikeCard`      | Exibe informações de uma bicicleta (nome, preço, imagem) |
| `InsuranceCard` | Apresenta um plano de seguro disponível                  |
| `SocialLinks`   | Lista de links para redes sociais                        |
| `FooterNav`     | Navegação interna do rodapé                              |

</div>

---

### Seções da Página — `sections/`

Grandes áreas que compõem a estrutura completa da página. O `page.jsx` torna-se declarativo — apenas uma composição de seções:

<div align="center">

| Seção         | Descrição                               |
| ------------- | --------------------------------------- |
| `Hero`        | Seção principal com chamada para ação   |
| `BikeList`    | Listagem de bicicletas disponíveis      |
| `Technology`  | Diferenciais tecnológicos dos produtos  |
| `Partners`    | Parceiros e marcas associadas           |
| `Testimonial` | Depoimentos de clientes                 |
| `Insurance`   | Planos de seguro oferecidos             |
| `Footer`      | Rodapé completo com links e informações |

</div>

---

## ✅ Funcionalidades Implementadas

- [x] Navegação com `next/link` (client-side routing + prefetch)
- [x] Otimização de imagens com `next/image`
- [x] Componentização de cards e seções
- [x] Botões reutilizáveis com variantes
- [x] CSS Modules para escopo isolado de estilos
- [x] Estilos globais organizados
- [x] Responsividade baseada no projeto original
- [x] Estrutura escalável baseada em componentes
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

Mantém a familiaridade com CSS puro do projeto original, adicionando escopo local de estilos por componente — sem a necessidade de uma biblioteca de CSS-in-JS e sem conflitos globais de classe.

### Por que separar `ui/` e `domain/`?

A separação respeita o princípio de **baixo acoplamento**. Componentes em `ui/` são portáveis e agnósticos ao negócio. Componentes de domínio carregam o contexto específico do Bikecraft.

### Por que `sections/`?

As seções encapsulam as grandes áreas visuais da página. O `page.jsx` torna-se declarativo e limpo — apenas uma composição de seções, sem lógica visual embutida.

### Por que React 19 + Next.js 16?

Utilizando as versões mais recentes do ecossistema para praticar com as APIs mais modernas, incluindo melhorias de performance e novos hooks do React 19.

---

## 📚 Aprendizados

Este projeto consolida conhecimentos em:

- **App Router** do Next.js (layout, page, estrutura de rotas)
- **Componentização progressiva**: partir de HTML estático e identificar limites naturais de cada componente
- **CSS Modules** em um projeto React real
- **Separação de responsabilidades** entre UI genérica e componentes de domínio
- **Otimizações do Next.js**: carregamento eficiente de imagens e prefetch de rotas
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
