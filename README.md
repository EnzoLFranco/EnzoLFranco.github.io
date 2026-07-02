# Portfólio — Enzo Lemos Franco

Repositório do meu portfólio online, um cartão de visitas digital com identidade visual inspirada em terminal de desenvolvedor. Construído inteiramente com **HTML, CSS e JavaScript puros** — sem frameworks ou bibliotecas de build.

##  Acesso ao Vivo

**[https://enzolfranco.github.io/](https://enzolfranco.github.io/)**

##  Sobre o Projeto

O site simula uma janela de terminal: cada seção é apresentada como a saída de um comando (`whoami`, `cat skills.json`, `ls -la ~/projects`, `./contact.sh --help`), reforçando de forma temática o meu perfil como desenvolvedor. Inclui:

- Efeito de digitação (*typewriter*) na apresentação inicial;
- Animações de entrada ao rolar a página, via `IntersectionObserver`;
- Layout responsivo para desktop e mobile;
- Suporte a `prefers-reduced-motion`, desativando animações para quem prefere;
- Conteúdo sempre visível mesmo sem JavaScript habilitado (progressive enhancement).

##  Tecnologias Utilizadas

- **HTML5** — estrutura semântica do conteúdo.
- **CSS3** — estilização com variáveis customizadas, Grid e Flexbox, totalmente responsivo.
- **JavaScript (puro)** — interatividade, efeito de digitação e animações de rolagem.
- **[JetBrains Mono](https://www.jetbrains.com/lp/mono/)** — tipografia monoespaçada usada em todo o site.
- **[Font Awesome](https://fontawesome.com/)** — ícones.

##  Estrutura do Projeto
```
.
├── index.html      # Estrutura e conteúdo do site
├── style.css       # Estilos, temas e responsividade
├── script.js       # Animações e interatividade
└── README.md
```

##  Rodando Localmente

Por ser um site estático, basta clonar o repositório e abrir o `index.html` no navegador:

```bash
git clone https://github.com/EnzoLFranco/EnzoLFranco.github.io.git
cd EnzoLFranco.github.io
```

Ou, para simular o ambiente com um servidor local:

```bash
python3 -m http.server 8000
```

E acesse `http://localhost:8000`.

##  Contato

Vamos nos conectar!

- **LinkedIn:** [enzo-lemos-franco](https://www.linkedin.com/in/enzo-lemos-franco/)
- **Email:** [fenzolemos@gmail.com](mailto:fenzolemos@gmail.com)
- **GitHub:** [@EnzoLFranco](https://github.com/EnzoLFranco)
