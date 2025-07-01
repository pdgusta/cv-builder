# 📄 CV Builder

> Construa currículos bonitos, rapidamente, sem precisar de software pesado – tudo direto no navegador, 100 % local/off-line.

[![GitHub Pages](https://img.shields.io/badge/demo-live-green?logo=github)](https://pdgusta.github.io/cv-builder/)
![GitHub repo size](https://img.shields.io/github/repo-size/pdgusta/cv-builder)
![License: GPL 3.0](https://img.shields.io/badge/license-GPLv3-blue)

---

## Descrição

O **CV Builder** é um editor visual de currículos baseado em React + Vite + Tailwind. Totalmente construído utilizando Codex + ChatGPT Plus.
O objetivo é **fazer poucas coisas, mas muito bem-feitas**:

- Blocos pré-definidos (Dados pessoais, Experiência, Habilidades…)
- Drag-and-drop para reordenar seções
- Visualização em tempo real
- Exportação em PDF de alta qualidade
- Persistência local (nada sai do seu computador)

> **Importante:** Este projeto é **pessoal/off-line** – não há backend nem coleta de dados.

---

## 🚀 Stack

| Camada           | Tecnologias                             |
| ---------------- | --------------------------------------- |
| UI               | React 18 · Vite · Tailwind CSS          |
| Drag-and-drop    | [`@dnd-kit`](https://dndkit.com/)       |
| PDF export       | [`@react-pdf/renderer`](https://react-pdf.org/) |
| Persistência     | `localStorage` (hook `usePersistedState`)|
| Deploy           | GitHub Pages (`gh-pages` npm script)    |

---

## 📸 Screenshot

> 

---

## 🛠️ Instalação e uso

```bash
# clone
git clone https://github.com/pdgusta/cv-builder.git
cd cv-builder

# dependências
npm install                # ou pnpm install / yarn

# modo dev
npm run dev                # abre em http://localhost:5173

# build de produção
npm run build              # gera dist/

# deploy para GitHub Pages
npm run deploy             # exige branch gh-pages configurado
