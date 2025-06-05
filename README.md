# Evandro Casanova - Portfolio

Portfolio pessoal de Evandro Casanova, Desenvolvedor Web e UI Designer.

## 🚀 Tecnologias

- **React** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - JavaScript com tipagem estática
- **Vite** - Build tool rápida para desenvolvimento
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones para React

## 🌟 Características

- Design Glassmorphism com efeitos visuais modernos
- Totalmente responsivo para todos os dispositivos
- Suporte a múltiplos idiomas (Português, Inglês, Espanhol)
- Scroll spy para navegação inteligente
- Animações suaves e interativas
- Seções: Hero, Projetos, Sobre mim, Educação, Contato

## 📦 Instalação

```bash
# Clone o repositório
git clone <repository-url>

# Navegue até o diretório
cd evandro-portfolio

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça push do código para um repositório Git (GitHub, GitLab, Bitbucket)
2. Conecte sua conta Vercel ao repositório
3. Configure as seguintes opções:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Deploy automático a cada push na branch principal

### Build Local

```bash
# Gerar build de produção
npm run build

# Preview do build
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
├── contexts/           # Context API (Traduções)
├── assets/            # Arquivos estáticos
└── main.tsx          # Ponto de entrada

public/
├── images/           # Imagens dos projetos
└── favicon.svg      # Ícone customizado
```

## 🎨 Personalização

- **Cores**: Definidas em Tailwind CSS com tema escuro e acentos ciano
- **Traduções**: Arquivo `TranslationContext.tsx` contém todas as traduções
- **Projetos**: Dados dos projetos em `Projects.tsx`
- **Informações pessoais**: Atualize os links e dados em `Contact.tsx`

---

Desenvolvido com ❤️ por **Evandro Casanova** 