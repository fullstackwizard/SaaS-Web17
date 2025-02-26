# SaaS-Web17

📌 Tecnologias e Estrutura
Backend: .NET Core 6+ (com ASP.NET Web API)
Frontend: React.js (com TypeScript)
Banco de Dados: SQL Server (via Entity Framework)
Infraestrutura: Docker + CI/CD + AWS (opcional)
Autenticação: JWT (com Identity)
Versionamento: Git (com GitHub/GitLab)
Testes: xUnit para backend e Jest para frontend

📌 Projeto: SaaS & CRM Web17
💡 Visão Geral:
Plataforma SaaS que permite que empresas contratem e gerenciem serviços digitais, funcionando como um CRM completo.

🎯 Funcionalidades Principais:
✅ Área Pública: Exibição de serviços, preços, planos e integração com checkout.
✅ Área do Cliente: Dashboard para gerenciar serviços adquiridos, suporte e faturamento.
✅ Admin Panel: Gestão de clientes, serviços e automação de processos.
✅ Funil de Vendas: Captura de leads, segmentação e automação de marketing.
✅ Integrações: Pagamentos (Stripe/Mercado Pago), E-mails, Notificações, e APIs externas.

🛠️ Tecnologias e Arquitetura
Backend (.NET Core 8)
ASP.NET Core Web API
Entity Framework Core + SQL Server
Identity + JWT (Autenticação)
MediatR (CQRS)
Docker + CI/CD
Frontend (React + TypeScript)
React com Vite
TailwindCSS
Redux Toolkit (Gerenciamento de Estado)
Infraestrutura
AWS (EC2, S3, RDS)
Docker e Kubernetes (opcional)


📂 Estrutura do Projeto

SaaS-Web17/
├── backend/ (ASP.NET Core API)
│   ├── Controllers/
│   ├── Models/
│   ├── Services/
│   ├── Repositories/
│   ├── Data/
│   ├── DTOs/
│   ├── Auth/
│   ├── Tests/
│   ├── Program.cs
│   ├── appsettings.json
├── frontend/ (React + TypeScript)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── store/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   ├── public/
│   ├── package.json
│   ├── tailwind.config.js
├── docker-compose.yml
├── README.md
