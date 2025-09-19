# 🎮 Locadora de Jogos API

API para gerenciamento de aluguel de jogos, permitindo cadastro de clientes, jogos, aluguéis e finalização de aluguéis, com cálculo de multas por atraso.

---

## 🚀 Tecnologias

- Node.js
- Express
- PostgreSQL
- Joi (validação de dados)
- dotenv (variáveis de ambiente)
- express-async-errors
- Cors

---

## 📂 Estrutura do Projeto

project/  
│    
├── controllers/        # Lógica das rotas  
│   ├── customers.controllers.js  
│   ├── games.controllers.js  
│   └── rentals.controllers.js    
├──  database          # Ponto de entrada do servido  
│   └── database.js  
│   
├── middlewares/        # Middlewares de validação e erro  
│   ├── errorHandler.middleware.js  
│   └── validateSchema.middleware.js  
│  
├── repositories/       # Acesso ao banco de dados  
│   ├── customers.repositories.js  
│   ├── games.repositories.js  
│   └── rentals.repositories.js  
│  
│  
├── routers/            # Rotas da API  
│   ├── customers.routers.js  
│   ├── games.routers.js  
│   └── rentals.routers.js  
│  
├── schemas/           # Lógica de validação dos schema  
│   ├── customers.schemas.js  
│   ├── games.schemas.js  
│   └── rentals.schemas.js  
│  
├── services/           # Lógica de negócio e validações  
│   ├── customers.services.js  
│   ├── games.services.js  
│   └── rentals.services.js  
│  
├── utils/              # Funções utilitárias  
│   └── formatDate.js  
│  
├── .env                # Variáveis de ambiente  
├── package.json  


---

## ⚡ Funcionalidades

### 👤 Clientes
- Listar clientes
- Inserir cliente
- Buscar cliente por ID

### 🎲 Jogos
- Listar jogos
- Criar jogo

### 📦 Aluguéis
- Listar aluguéis
- Criar aluguel
- Finalizar aluguel (com cálculo de multa)
- Deletar alguem por ID

---
## 🛠️ Configuração

### Instale as dependências
 
  `npm install`

### Crie o arquivo .env
```js
  PORT=5000
  DATABASE_URL=postgres://usuario:senha@localhost:5432/nomedobanco
```

### Execute o servidor

  `npm run dev`

---

## 💾 Banco de Dados

### Crie um banco de dados chamado "boardcamp"

### Crie as tabelas
```sql
  CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT NOT NULL,
    "stockTotal" INTEGER NOT NULL,
    "pricePerDay" INTEGER NOT NULL
  );
  
  CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    cpf VARCHAR(11) NOT NULL
  );
  
  CREATE TABLE rentals (
    id SERIAL PRIMARY KEY,
    "customerId" INTEGER NOT NULL,
    "gameId" INTEGER NOT NULL,
    "rentDate" DATE NOT NULL,
    "daysRented" INTEGER NOT NULL,
    "returnDate" DATE,
    "originalPrice" INTEGER NOT NULL,
    "delayFee" INTEGER
  );
```



