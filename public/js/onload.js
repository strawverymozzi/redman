let deferredPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
    document.getElementById("install-button").style.display = "block";
});

document.getElementById("install-button").addEventListener("click", () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
            console.log("User installed the app");
        } else {
            console.log("User dismissed the install prompt");
        }
        deferredPrompt = null;
    });
});