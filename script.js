const camera = document.getElementById('camera');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

let stream = null;

// Включить камеру
startBtn.addEventListener('click', async () => {
    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        camera.srcObject = stream;
        startBtn.disabled = true;
        stopBtn.disabled = false;
    } catch (error) {
        alert("Ошибка доступа к камере: " + error.message);
    }
});

// Выключить камеру
stopBtn.addEventListener('click', () => {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        camera.srcObject = null;
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
});
