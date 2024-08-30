from flask import Flask, request, jsonify, render_template
import pickle
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

script_dir = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(script_dir, 'model.pkl')
vectorizer_path = os.path.join(script_dir, 'vectorizer.pkl')

with open(model_path, 'rb') as f:
    pipeline = pickle.load(f)

with open(vectorizer_path, 'rb') as f:
    vectorizer = pickle.load(f)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    text = data.get('text')
    if text is not None:
        text_transformed = vectorizer.transform([text])

        prediction = pipeline.predict(text_transformed)[0]

        return jsonify({'prediction': int(prediction)})
    else:
        return jsonify({'error': 'Input text not provided.'})

if __name__ == '__main__':
    port = int(os.getenv('PORT', 10000))
    app.run(host='0.0.0.0', port=port, debug=True)
