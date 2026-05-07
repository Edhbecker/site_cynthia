# Site Arquitetônico - Cynthia Aparecida

Website profissional para arquiteta especializada em design de interiores e projetos arquitetônicos com abordagem feminina e humanizada.

## 🏗️ Tecnologias

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Node.js + Express + TypeScript
- **Database**: PostgreSQL + Drizzle ORM
- **Styling**: Tailwind CSS + shadcn/ui
- **Validação**: Zod
- **State Management**: TanStack Query

## 🚀 Como executar

### Pré-requisitos
- Node.js 18+
- PostgreSQL
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <seu-repositorio>
cd site-arquitetonico
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

Configure sua `DATABASE_URL` no arquivo `.env`:
```
DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome_do_banco
```

4. Execute as migrações do banco:
```bash
npm run db:push
```

5. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

O site estará disponível em `http://localhost:5000`

## 📁 Estrutura do Projeto

```
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/     # Componentes React
│   │   ├── pages/         # Páginas da aplicação
│   │   └── lib/           # Utilitários e configurações
├── server/                # Backend Express
│   ├── routes.ts          # Rotas da API
│   ├── storage.ts         # Camada de dados
│   └── db.ts             # Configuração do banco
├── shared/               # Código compartilhado
│   └── schema.ts         # Schemas do banco e validação
└── components.json       # Configuração shadcn/ui
```

## 🎨 Características

- **Design Responsivo**: Adaptado para todos os dispositivos
- **Método Coração Arquitetônico®**: Metodologia exclusiva da arquiteta
- **Paleta Feminina**: Cores suaves (rose antique, terracotta, sage green)
- **Formulário de Contato**: Integrado com banco de dados
- **Galeria de Projetos**: Showcase dos trabalhos realizados
- **Depoimentos**: Seção de feedback dos clientes

## 🗄️ Banco de Dados

O projeto utiliza PostgreSQL com as seguintes tabelas:
- `users` - Usuários do sistema
- `projects` - Projetos arquitetônicos
- `testimonials` - Depoimentos de clientes
- `contacts` - Mensagens do formulário de contato
- `blog_posts` - Posts do blog (funcionalidade futura)

## 📝 Scripts Disponíveis

```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Build para produção
npm run db:push      # Aplica mudanças no schema do banco
npm run db:studio    # Interface visual do banco (Drizzle Studio)
```

## 🚀 Deploy

O projeto pode ser implantado em plataformas como Vercel, Railway, Render ou Heroku.

## 📄 Licença

Este projeto é propriedade de Cynthia Aparecida da Silva.