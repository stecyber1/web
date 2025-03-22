const modal = document.getElementById("modal");
const imageAgrandie = document.getElementById("imageAgrandie");
const fermer = document.getElementById("fermer");
const images = document.querySelectorAll(".galerie img");

images.forEach(image => {
    image.addEventListener("click", () => {
        modal.style.display = "flex";
        imageAgrandie.src = image.src;
        imageAgrandie.alt = image.alt;
    });
});

fermer.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
