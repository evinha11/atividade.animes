function showSection(section) {
    
    const sections = document.querySelectorAll('.card');
    sections.forEach(section => section.style.display = 'none');
    

    document.getElementById(section).style.display = 'block';
    
    
    const links = document.querySelectorAll('.sidebar a');
    links.forEach(link => link.classList.remove('active'));
    document.getElementById(`${section}AnimeLink`).classList.add('active');
}

function carregarAnimes() {
    fetch("http://localhost:5000/animes")
        .then(response => response.json())
        .then(data => {
            let listaAnimes = document.getElementById("animes");
            listaAnimes.innerHTML = "";
            if (data.animes) {
                data.animes.forEach(anime => listaAnimes.appendChild(ListItem(anime)));
            } else {
                listaAnimes.innerHTML = "<li>Nenhum anime encontrado.</li>";
            }
        })
        .catch(error => console.error("Erro ao carregar animes:", error));
}

function ListItem(anime) {
    let item = document.createElement("li");
    item.innerText = anime;
    return item;
}

function adicionarNovoAnime() {
    let novoAnime = document.getElementById("novoAnime").value.trim();
    if (!novoAnime) return alert("Digite um nome de anime!");

    fetch("http://localhost:5000/animes/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ anime: novoAnime })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message || data.erro);
        carregarAnimes();
    })
    .catch(error => console.error("Erro ao adicionar anime:", error));
}

function procurarAnimePeloId() {
    let id = document.getElementById("idBuscado").value;
    fetch(`http://localhost:5000/animes/${id}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("AnimeBuscado").innerText = data.anime || data.erro;
        })
        .catch(error => console.error("Erro ao buscar anime:", error));
}

function atualizarAnimePeloId() {
    let id = document.getElementById("idAtualizar").value;
    let novoNome = document.getElementById("conteudoAtualizado").value.trim();
    if (!novoNome) return alert("Digite um novo nome!");

    fetch(`http://localhost:5000/animes/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ anime: novoNome })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("statusAtualizacao").innerText = data.message || data.erro;
        carregarAnimes();
    })
    .catch(error => console.error("Erro ao atualizar anime:", error));
}


function removerAnimePeloId() {
    let id = document.getElementById("idRemover").value;
    fetch(`http://localhost:5000/animes/delete/${id}`, { method: "DELETE" })
        .then(response => response.json())
        .then(data => {
            document.getElementById("statusRemocao").innerText = data.message || data.erro;
            carregarAnimes();
        })
        .catch(error => console.error("Erro ao remover anime:", error));
}

window.onload = function() {
    carregarAnimes();
    showSection('add'); 
};
