function uploadImage() {
    let fileInput = document.getElementById("imageUpload");
    let file = fileInput.files[0];

    if (!file) {
        alert("Please select an image first.");
        return;
    }

    let formData = new FormData();
    formData.append("file", file);

    fetch("/predict", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            document.getElementById("result").innerHTML = `<p style="color: red;">${data.error}</p>`;
        } else {
            document.getElementById("result").innerHTML = `<h2>Prediction: ${data.class}</h2>
                <p>Confidence: ${(data.confidence * 100).toFixed(2)}%</p>`;
            document.getElementById("uploadedImage").src = data.image_url;
            document.getElementById("uploadedImage").style.display = "block";
        }
    })
    .catch(error => console.error("Error:", error));
}
