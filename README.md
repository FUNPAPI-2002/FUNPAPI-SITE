# 🌍 Site Oficial da ONG FUNPAPI

Este repositório contém o código-fonte do site oficial da **FUNPAPI**, desenvolvido com o objetivo de divulgar as ações, compartilhar os projetos e facilitar o contato com a instituição.

O site foi arquitetado para ser **rápido, responsivo e totalmente gerenciável** pela própria equipe da ONG através de um painel administrativo intuitivo e livre de custos com servidores.

## 🛠️ Tecnologias Utilizadas

- **Framework principal:** [React](https://react.dev/) via [Vite](https://vitejs.dev/)
- **Roteamento:** React Router DOM (HashRouter)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/) com componentes base do [Shadcn UI](https://ui.shadcn.com/)
- **Painel Administrativo (CMS):** [Sveltia CMS](https://sveltia.org/) (compatível com Decap/Netlify CMS)
- **Hospedagem:** GitHub Pages
- **Processamento de Formulário:** FormSubmit

## 📂 Estrutura Principal do Projeto

A lógica de interface está localizada em `src/app/components/`:
- `Projects.tsx`: Responsável por listar os projetos na página inicial, fatiando os dados lidos dos arquivos JSON e gerenciando a paginação dinâmica.
- `ProjectDetails.tsx`: Página dedicada para cada projeto. Monta de forma dinâmica o carrossel de fotos principal e a galeria extra de imagens convertendo os dados estruturados do CMS.
- `Header.tsx`: Controla a navegação no estilo SPA (Single Page Application). Resolve conflitos de âncoras na mesma página e implementa o menu mobile responsivo.

Os dados (textos e links de imagens) são gerados pelo painel administrativo e salvos em `src/content/projetos/` no formato `.json`.

## ⚙️ Painel de Administração (CMS)

A configuração do painel encontra-se em `public/admin/config.yml`.
O site não exige um banco de dados tradicional. Ao criar ou editar projetos pelo site `/admin`, o CMS salva automaticamente um arquivo JSON no repositório. O processo de Build do Vite é disparado pelo GitHub Actions, atualizando o site na internet.

### Como acessar o Painel:
1. Acesse `https://[SEU-DOMINIO]/admin/`
2. No campo **Personal Access Token**, cole o token do GitHub autorizado com permissões de `repo`.
3. Clique em Sign in.

## 💻 Como rodar o projeto localmente (Para Desenvolvedores)

1. Clone este repositório:
   ```bash
   git clone [https://github.com/GDK-13/shaggy-solstice.git](https://github.com/GDK-13/shaggy-solstice.git)
  