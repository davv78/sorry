// Event listener untuk tombol "Maafin Aku"
document.getElementById("forgive-btn").addEventListener("click", function () {
    document.getElementById("angry-response").style.display = "none"; // Sembunyikan pesan marah
    alert("Yay! Makasih sayang 💖"); // Munculkan alert
    sendWhatsApp(); // Kirim pesan ke WA
});

// Event listener untuk tombol "Aku Masih Marah"
document.getElementById("angry-btn").addEventListener("click", function () {
    document.getElementById("angry-response").style.display = "block"; // Tampilkan pesan marah
});

// Fungsi untuk mengirim pesan ke WhatsApp kamu
function sendWhatsApp() {
    const messageText = "Sayang, aku maafin kamuu. aku harap kamu engga kayak gitu lagi yaah sayaang";
    const phoneNumber = "6285748437032"; // Ganti dengan nomor WA kamu
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
}
