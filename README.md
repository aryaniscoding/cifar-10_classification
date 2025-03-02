# CIFAR-10 Image Classifier Web App
A web-based application that classifies images into 10 categories (airplane, automobile, bird, cat, deer, dog, frog, horse, ship, truck) using a CNN model trained on the CIFAR-10 dataset.

Project Structure
csharp
Copy
Edit
cifar10-web-classifier/
│── static/
│   ├── styles.css        # CSS for styling
│   ├── script.js         # JavaScript for frontend interactions
│   ├── uploads/          # Stores uploaded images
│── templates/
│   ├── index.html        # Frontend UI
│── model/
│   ├── cnn_model.h5      # Trained CNN model
│── app.py                # Flask backend
│── requirements.txt      # Dependencies
│── README.md             # Documentation
Features
Upload an image and classify it into one of 10 categories
Uses a trained CNN model for accurate classification
Simple Flask backend for API requests
Responsive HTML/CSS/JavaScript frontend
Displays prediction confidence
Installation & Setup
Clone the Repository

bash
Copy
Edit
git clone https://github.com/yourusername/cifar10-web-classifier.git
cd cifar10-web-classifier
Install Dependencies

nginx
Copy
Edit
pip install -r requirements.txt
Run the Flask App

nginx
Copy
Edit
python app.py
Open in Browser

cpp
Copy
Edit
http://127.0.0.1:5000/
