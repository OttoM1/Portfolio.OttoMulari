document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const fadeInDuration = 800; // Duration for fade-in effect

    sections.forEach((section) => {
        section.classList.add('fade-in-up');
        setTimeout(() => {
            section.classList.add('visible');
        }, fadeInDuration);
    });

    // Binary Matrix Effect Canvas (modified to use 0's and 1's)
    const canvas = document.getElementById("matrixCanvas");
    const ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const columns = canvas.width / 20;
    const drops = Array.from({ length: columns }).map(() => 0);

    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#0F0";
        ctx.font = "20px monospace";

        drops.forEach((y, x) => {
            // Change the text to '0' or '1' randomly
            const text = Math.random() > 0.5 ? "1" : "0"; // Randomly choose between "1" and "0"
            ctx.fillText(text, x * 20, y * 20);
            if (y * 20 > canvas.height && Math.random() > 0.975) {
                drops[x] = 0;
            }
            drops[x]++;
        });
    }
    setInterval(draw, 50);
});
