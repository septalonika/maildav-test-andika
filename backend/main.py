from flask import Flask, request, jsonify
import os
import random
from werkzeug.utils import secure_filename
from PIL import Image

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = './uploads'
app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg'}

@app.route('/')
def hello_world():
    return 'Hello, World!'
def main():
    print("Hello from backend!")

if __name__ == "__main__":
    main()  

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

@app.route('/analyze', methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400
    
    file = request.files['file']
    if file.filename == '' or not allowed_file(file.filename):
        return jsonify({'error': 'Invalid file'}), 400
    
    filename = secure_filename(file.filename)
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(filepath)
    
    result = analyze_image(filepath)
    

    if result == "Copyright Infringed":
        return jsonify({'message': result,'error': True, 'status': 400}, 400)
    return jsonify({'message': result, 'error': False, 'status': 200}, 200)


def analyze_image(image_path):
    return random.choice(["Copyright Infringed", "No Issue"])
