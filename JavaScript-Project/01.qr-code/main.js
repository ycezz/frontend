document.getElementById('generate-btn').addEventListener('click', function() {
    let url = document.getElementById('url-links').value;
    let qrCodeContainer = document.getElementById('qr-code');

    qrCodeContainer.innerHTML = '';

    if (url.trim() === '') {
        alert('Please enter a valid URL.');
        return;
    }

    new QRCode(qrCodeContainer, {
        text: url,
        width: 200,
        height: 200,
        colorDark: '#FFFFFF',
        colorLight: "rgba(0, 0, 0, 0)"
    });
});
