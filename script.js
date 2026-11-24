
// =====================================
// MUKESHVERSE - WELCOME PAGE
// =====================================

// CREATE ANIMATED STARS

const starsContainer = document.getElementById("stars");

for (let i = 0; i < 150; i++) {

    const star = document.createElement("span");

    star.classList.add("star");

    const size = Math.random() * 3 + 1;

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;

    star.style.animationDelay = `${Math.random() * 4}s`;
    star.style.animationDuration = `${2 + Math.random() * 4}s`;

    starsContainer.appendChild(star);
}


// =====================================
// EXPLORE BUTTON
// =====================================

const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", () => {

    exploreBtn.disabled = true;

    exploreBtn.innerHTML = "ENTERING YOUR UNIVERSE ✨";

    document.querySelector(".welcome-content").classList.add("exit-animation");

    document.querySelector(".background-overlay").classList.add("fade-out");

    setTimeout(() => {

        // Next page will be connected here.
        window.location.href = "page2.html";

    }, 1200);

});
