document.addEventListener('DOMContentLoaded', () => {
    const orderNumberElement = document.getElementById('orderNumber');
    const printButton = document.getElementById('printButton');

    // Sequential order number starting from 32100
    let orderNumber = localStorage.getItem('orderNumber') || 32100;
    orderNumberElement.textContent = orderNumber;

    // Increment order number and store it
    localStorage.setItem('orderNumber', ++orderNumber);

    // Auto-fill date and time
    const printInfoElement = document.getElementById('printInfo');
    const currentDate = new Date();
    printInfoElement.textContent = `IMPRESSO: dcsul.midia@dcsg10transportes.com.br ${currentDate.toLocaleString()}`;

    // Print functionality
    printButton.addEventListener('click', () => {
        window.print();
    });

    // Handle form submission
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(orderForm);
            for (const [key, value] of formData.entries()) {
                const element = document.getElementById(key);
                if (element) {
                    element.textContent = value;
                }
            }

            // Simulate navigation to the order page
            window.location.href = 'index.html';
        });
    }
});

function generateQRCode(data) {
    return `https://chart.googleapis.com/chart?cht=qr&chl=${encodeURIComponent(data)}&chs=100x100&chld=L|0`;
}

// Example usage:
const qrCodeImgElements = document.querySelectorAll('img[alt="QR Code"]');
qrCodeImgElements.forEach(img => {
    img.src = generateQRCode('Some data to encode in QR code');
});
