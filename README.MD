
#Api com boleirplate e Fastify 🚀

Este é um projeto de boilerplate para Node.js utilizando Fastify com TypeScript. Ele inclui um servidor básico com rotas configuradas para retornar dados de equipes e pilotos de Fórmula 1. Além disso, está configurado para suportar o CORS e inclui scripts para desenvolvimento e build.


## 🚀 Começando

### Pré-requisitos

Certifique-se de ter o Node.js instalado na sua máquina. Recomenda-se a versão mais recente do LTS.

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/FranciscoBraga/api-node-boleirplate-fastify.git
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

### Scripts Disponíveis

- **`start:dev`**: Inicia o servidor em modo de desenvolvimento utilizando `tsx`.
  
  ```bash
  npm run start:dev
  ```

- **`start:watch`**: Inicia o servidor em modo de desenvolvimento com watch mode, reiniciando a cada alteração.

  ```bash
  npm run start:watch
  ```

- **`dist`**: Gera a build do projeto usando `tsup`.

  ```bash
  npm run dist
  ```

- **`start:dist`**: Gera a build e inicia o servidor a partir dos arquivos compilados.

  ```bash
  npm run start:dist
  ```

## 🚀 API Endpoints

### Listar todas as equipes

```bash
GET /teams
```

Retorna a lista de todas as equipes de Fórmula 1.

### Listar todos os pilotos

```bash
GET /drivers
```

Retorna a lista de todos os pilotos de Fórmula 1.

### Obter detalhes de um piloto por ID

```bash
GET /drivers/:id
```

Retorna as informações de um piloto específico, com base no ID fornecido.

## 🛠️ Tecnologias Utilizadas

- **Fastify**: Framework web rápido e leve para Node.js.
- **TypeScript**: Superconjunto de JavaScript que adiciona tipagem estática.
- **tsup**: Bundler para TypeScript.
- **tsx**: Ferramenta para executar código TypeScript diretamente.

## 🚀 Inicialização do Servidor

Para iniciar o servidor em modo de desenvolvimento, use o seguinte comando:

```bash
npm run start:dev
```

O servidor será iniciado na porta `3333` e exibirá no console a mensagem `Server init`.

## 🔧 Configuração do CORS

O CORS está configurado para permitir solicitações de qualquer origem:

```javascript
server.register(cors, {
  origin: "*"
});
```


# Credits

## Author NODE BOILERPLATE - BLUE EDITION

| [<img src="https://avatars3.githubusercontent.com/u/37452836?s=96&v=4"><br><sub>Felipe Aguiar</sub>](https://github.com/felipeAguiarCode) |
| :---------------------------------------------------------------------------------------------------------------------------------------: |
|                                            [Linkedin](www.linkedin.com/in/felipe-aguiar-exe/)    
|                                      repositório https://github.com/felipeAguiarCode/node-blue-boilerplate.git

