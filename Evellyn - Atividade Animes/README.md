
# 📜 Descrição do Projeto  

Este projeto consiste em uma aplicação web para **gerenciamento de animes**, permitindo operações como adição, consulta, atualização e remoção de animes. A aplicação é composta por um **frontend em HTML, CSS e JavaScript** e um **backend em Flask (Python)** que expõe uma API REST para manipulação dos dados.  

## 🚀 Funcionalidades  

✅ **Adicionar Anime**: Insere um novo anime na lista.  
🔍 **Consultar Anime pelo ID**: Busca um anime pelo índice da lista.  
📜 **Listar Animes**: Exibe todos os animes cadastrados.  
✏️ **Atualizar Anime**: Modifica o nome de um anime existente.  
🗑️ **Remover Anime**: Deleta um anime da lista pelo ID.  

## 🏗️ Estrutura do Código  

### 📂 **Frontend** (Interface do Usuário)  

- **`index.html`** → Página principal da aplicação, estruturada com Bootstrap para melhor aparência e usabilidade.  
- **`style.css`** → Arquivo de estilização personalizado para aprimorar a interface.  
- **`script.js`** → Contém as funções JavaScript responsáveis por interagir com a API, enviando requisições HTTP para adicionar, buscar, atualizar e remover animes.  

### 📂 **Backend** (Servidor Flask)  

- **`main.py`** → Implementação da API utilizando Flask. Ele contém os endpoints para manipular os animes e utiliza `Flask-CORS` para permitir requisições de diferentes origens.  

#### 📌 **Principais Endpoints**  

- `GET /animes` → Retorna a lista de animes disponíveis.  
- `GET /animes/<id>` → Retorna um anime específico pelo ID.  
- `POST /animes/create` → Adiciona um novo anime à lista.  
- `PUT /animes/update/<id>` → Atualiza o nome de um anime existente.  
- `DELETE /animes/delete/<id>` → Remove um anime da lista.  

## 🛠️ Tecnologias Utilizadas  

- **Frontend:** HTML, CSS (Bootstrap) e JavaScript  
- **Backend:** Python (Flask)  
- **Banco de Dados:** Lista em memória (simulação)  
- **Ferramentas:** Flask-CORS, Fetch API  

## ▶️ Como Executar  

1️⃣ **Instalar dependências**  
```bash
pip install flask flask-cors
```  
2️⃣ **Rodar o servidor**  
```bash
python -m flask --app main run --host 0.0.0.0 --port 5000
```  
3️⃣ **Abrir `index.html` no navegador**  

---  
📌 *Esse projeto é ideal para quem deseja aprender sobre integração entre frontend e backend utilizando Flask!*
