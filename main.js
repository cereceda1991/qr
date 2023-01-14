
var qr = new QCodeDecoder();
var video = document.getElementById("qr-video");
var startScanningButton = document.getElementById("qr-start-scanning-button");
var stopScanningButton = document.getElementById("qr-stop-scanning-button");

function startScanning() {
    qr.decodeFromCamera(video, function (er, result) {
        var id = result;
        console.log("ID: " + id);
    });
    startScanningButton.style.display = "none";
    stopScanningButton.style.display = "block";
}

function stopScanning() {
    qr.stop();
    startScanningButton.style.display = "block";
    stopScanningButton.style.display = "none";
}
