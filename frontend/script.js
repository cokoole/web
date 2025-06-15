document.getElementById("start-button").addEventListener("click", async () => {
    const response = await fetch("/api/hello");
    const text = await response.text();
    document.getElementById("message").textContent = text;
});