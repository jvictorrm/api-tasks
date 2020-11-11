# api-tasks

API simples feito em Node.js + TypeScript + TypeORM + JWT para registrar usuários podendo criar suas listas de tarefas

## Para desenvolver

#### Ambiente

1. Node >= 12.x.x
2. Yarn (Opcional. Usado no projeto)

#### Projeto
1. Instale as dependências
2. Crie o arquivo .env e altere seus valores
3. Execute as migrações para o banco de dados

```
yarn | npm install
cp .env.example .env
yarn | npx typeorm migration:run
```
---
## Rotas (Base: /api )

### `/v1`

#### /users

Endpoint | HTTP | Descrição
-------- | ---- | ---------
/        | POST | Criar usuário

#### /auths

Endpoint | HTTP | Descrição
-------- | ---- | ---------
/        | POST | Efetuar login

#### /tasks

Endpoint |  HTTP  | Descrição
-------- | ------ | ---------
/        | GET    | Listar todas as tarefas do usuário logado
/        | POST   | Criar tarefa
/:id     | PUT    | Alterar tarefa
/:id     | GET    | Buscar a tarefa por ID
/:id     | DELETE | Excluir tarefa

---
## TODO

- Refresh Token