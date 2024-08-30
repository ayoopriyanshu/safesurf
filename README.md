# SafeSurf

SafeSurf is a Flask-based Chrome extension designed to detect vulnerabilities in URLs. The application uses a trained machine learning model to identify phishing sites and other anomalies in the URLs provided by users. It fetches the requests from the deployed flask app.

## Features

- **URL Vulnerability Detection**: Enter any URL to check for potential phishing or other vulnerabilities.
- **Machine Learning Model**: Trained on the [Phishing Site URLs Kaggle dataset](https://www.kaggle.com/datasets/taruntiwarihp/phishing-site-urls).
- **Chrome Extension**: A convenient browser extension to instantly check URLs from any webpage. The extension fetches data from the Flask app, which hosts the trained model.
- **Flask App Deployed on Render**: Access the live application [Flask App](https://safesurf-flask.onrender.com/).

## Screenshots

<img src="https://github.com/user-attachments/assets/d816bc58-19cd-40df-a7ec-98f95f05de8c" width=400 />
<img src="https://github.com/user-attachments/assets/b32f36d3-87aa-44c4-9f26-a0f706b0b591" width=200 />
<img src="https://github.com/user-attachments/assets/4043f0a5-d388-40fa-87c6-7442af9a070e" width=200 />

## Installation

### Add Extension

- Navigate to the extension folder in the project directory.

- Go to chrome://extensions/ in your Chrome browser.

- Enable "Developer mode" and click "Load unpacked".
   
- Select the extension folder to install the extension.

- Pin the Extension and Try it. (Be Paitent it takes a bit to Fetch the request)
    
### Flask App

- Clone the repository:
   ```bash
   git clone https://github.com/ayoopriyanshu/safesurf-flask.git
   cd safesurf

- Install Requirements:
   ```bash
   pip install -r requirements.txt

- Run App.py

### Model

- Open the Model_Training.ipynb file in Google Colab or Jupyter.

- Upload the phising_site_urls.csv file

- Run each Shell

## Technology Stack

- Machine Learning: Scikit-learn, Pandas, NumPy
- Backend: Flask, Python, Javascript
- Frontend: HTML, CSS
- Libraries: Requests, Flask, Sklearn, Sckit-learn, Flask-CORS, Pandas

## Contact

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ayoopriyanshu/)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:priyanshusharma3377@gmail.com)
