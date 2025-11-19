# Memória Viva+ 🥭

> Tecnologia Afetiva para Bem-Estar Mental e Inclusão Social 60+

Demo frontend desenvolvido para o **Campus GO - Ideathon 2025 - Desafio 1**

## 🎯 Sobre o Projeto

Plataforma digital que combina:
- 🎙️ **Narração de Memórias** com IA (storytelling terapêutico)
- 👥 **Rede Social Segura** entre idosos (Círculos de Sabedoria)
- 🤖 **IA Companheira "Pequi"** (suporte emocional personalizado)
- 🗺️ **Integração Territorial** com serviços públicos de Goiás
- 🎤 **Interface por Voz** (zero barreira tecnológica)

## 🚀 Como Rodar

### Pré-requisitos
- Node.js 18+ (recomendado v21.7.3)
- npm 10+

### Instalação

```bash
# Entre na pasta do projeto
cd memoria-viva-demo

# Instale as dependências (se ainda não instalou)
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 🛠️ Stack Tecnológica

- **Framework**: Next.js 15 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS v4
- **Animações**: Framer Motion
- **Ícones**: Lucide React
- **Font**: Inter (Google Fonts)

## 🎨 Design System

### Paleta de Cores

- **Amarelo Cerrado** (`#F2C94C`) - Acolhimento, otimismo
- **Verde Ipê** (`#27AE60`) - Vida, natureza de Goiás
- **Roxo Sabedoria** (`#9B59B6`) - Sabedoria, espiritualidade

### Princípios de Acessibilidade

- ✅ Botões grandes (mínimo 80x80px)
- ✅ Alto contraste (WCAG AAA)
- ✅ Fontes ajustáveis (16-32pt)
- ✅ Máximo 3 opções por tela
- ✅ Ícones + texto em todas ações
- ✅ Navegação por voz

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página home
│   └── globals.css         # Estilos globais + tema
├── components/
│   ├── Hero.tsx            # Seção hero com layout assimétrico
│   ├── Features.tsx        # Cards de funcionalidades
│   ├── MemoryTimeline.tsx  # Timeline de memórias
│   ├── AICompanion.tsx     # Interface do Acolhe (IA)
│   ├── SocialCircles.tsx   # Círculos de Sabedoria
│   ├── EventsMap.tsx       # Mapa de eventos
│   └── Footer.tsx          # Rodapé
└── lib/
    └── utils.ts            # Utilitários (cn para classes)
```

## 🎭 Layout Assimétrico

Inspirado no site da Colossal, o layout utiliza:
- Grid não uniforme com proporções variadas
- Elementos decorativos posicionados assimetricamente
- Cards de tamanhos diferentes (masonry-style)
- Sobreposições e floating elements
- Gradientes e formas orgânicas

## 📊 Métricas de Impacto (Projetadas)

- 📈 **40%** redução nos índices de solidão
- 📈 **60%** aumento na participação comunitária
- 📈 **50%** melhoria em bem-estar mental
- 📈 **10 mil** idosos incluídos digitalmente no ano 1

## 🏗️ Build para Produção

```bash
# Build otimizado
npm run build

# Preview do build
npm start
```

## 🤝 Equipe

Projeto desenvolvido para o **Ideathon Campus Party Goiás 2025**

---

**Tagline**: *"Sua história merece ser contada. Sua voz merece ser ouvida."*

**Mascote**: Pequi 🥭 (pequi humanizado - símbolo de Goiás)
