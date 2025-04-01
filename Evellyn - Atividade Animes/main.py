from flask import Flask, jsonify, request
from flask_cors import CORS
from random import choice

app = Flask(__name__)
CORS(app)  


animes = ["Naruto", "Pokemon", "One Piece", "Solo Leveling", "Sakura Card Captors", "Dragon Ball", "Spy x Family"]

@app.route('/animes', methods=['GET'])
def get_animes():
    return jsonify({"contagem": len(animes), "animes": animes}), 200 if animes else (jsonify({"erro": "Nenhum anime encontrado"}), 404)

@app.route('/animes/random', methods=['GET'])
def get_random_anime():
    return jsonify({"anime": choice(animes)}), 200 if animes else (jsonify({"erro": "Nenhum anime encontrado"}), 404)

@app.route('/animes/<int:id>', methods=['GET'])
def get_anime_by_id(id):
    if 0 <= id < len(animes):
        return jsonify({"anime": animes[id]}), 200
    return jsonify({"erro": "ID inválido"}), 404

@app.route('/animes/create', methods=['POST'])
def add_anime():
    data = request.get_json()
    if not data or "anime" not in data or not data["anime"].strip():
        return jsonify({"erro": "Nome do anime inválido"}), 400
    anime = data["anime"].strip()
    if anime in animes:
        return jsonify({"erro": "Esse anime já existe"}), 400
    animes.append(anime)
    return jsonify({"status": "success", "message": f"O anime {anime} foi adicionado!"}), 201

@app.route('/animes/update/<int:id>', methods=['PUT'])
def update_anime(id):
    data = request.get_json()
    if not (0 <= id < len(animes)) or "anime" not in data or not data["anime"].strip():
        return jsonify({"erro": "Dados inválidos"}), 400
    antigo_nome = animes[id]
    animes[id] = data["anime"].strip()
    return jsonify({"status": "success", "message": f"Anime {antigo_nome} atualizado para {animes[id]}"}), 200

@app.route('/animes/delete/<int:id>', methods=['DELETE'])
def delete_anime(id):
    if 0 <= id < len(animes):
        anime = animes.pop(id)
        return jsonify({"status": "success", "message": f"Anime {anime} removido!"}), 200
    return jsonify({"erro": "ID inválido"}), 404

@app.route('/', methods=['GET'])
def home():
    return jsonify({"message": "API de Animes está rodando!"}), 200

if __name__ == "__main__":
    app.run(debug=True)
