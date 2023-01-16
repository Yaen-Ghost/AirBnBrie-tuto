// class Fromages{
//     constructor(image, nom, laitage, region, saison, description){
//         this.image = image;
//         this.nom = nom;
//         this.laitage = laitage;
//         this.region = region;
//         this.saison = saison;
//         this.description = description;
//     }
// }

// const listetouslesfromages = [camembert, coulommiers, maroilles];

// let camembert = new Fromages("Img/Tous les fromages/camembert.jpg", "Camembert", "Vache", "Ile-de-France", "Février", "Lorem");

// let coulommiers = new Fromages("Img/Tous les fromages/coulommiers.jpg", "Coulommiers", "Vache", "Ile-de-France", "Juin", "Lorem");

// let maroilles = new Fromages("Img/Tous les fromages/maroilles.jpg", "Coulommiers", "Brebis", "Hauts-de-France", "Juillet", "Lorem");


const cheeseContainer = document.getElementById("cheese-container");

cheeseContainer.addEventListener("click", function(e) {
  if (e.target.classList.contains("cheese")) {
    const cheeseName = e.target.getAttribute("data-cheese-name");
    const cheeseImage = e.target.getAttribute("data-cheese-image");

    // Create modal element
    const modal = document.createElement("div");
    modal.id = "modal";

    // Create modal header element
    const modalHeader = document.createElement("div");
    modalHeader.id = "modal-header";
    modalHeader.innerHTML = cheeseName;
    modal.appendChild(modalHeader);

    // Create modal image element
    const modalImage = document.createElement("img");
    modalImage.id = "modal-image";
    modalImage.src = cheeseImage;
    modal.appendChild(modalImage);

    // Add modal to the document
    document.body.appendChild(modal);

    // Add event listener to close modal when clicked
    modal.addEventListener("click", function(e) {
      if (e.target === modal) {
        modal.remove();
      }
    });
  }
});
