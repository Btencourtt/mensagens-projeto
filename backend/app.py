from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)

mensagens = []

@app.route('/mensagens', methods=['GET', 'POST'])
def mensagens_route():
    if request.method == 'GET':
        return jsonify(mensagens)
    elif request.method == 'POST':
        data = request.get_json()
        msg = data.get('texto')
        if not msg:
            return jsonify({"error": "Mensagem não enviada"}), 400
        mensagens.append(msg)
        return jsonify({"status": "Mensagem adicionada"}), 201

if __name__ == '__main__':
    app.run(port=5000)