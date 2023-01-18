class Fromages{
    constructor(image, nom, laitage, region, saison, description){
        this.image = image;
        this.nom = nom;
        this.laitage = laitage;
        this.region = region;
        this.saison = saison;
        this.description = description;
    }
}

const listetouslesfromages = [new Fromages("Img/Tous les fromages/camembert.jpg", "Camembert", "Vache", "Ile-de-France", "Février", "Lorem"),
new Fromages("Img/Tous les fromages/coulommiers.jpg", "Coulommiers", "Vache", "Ile-de-France", "Juin", "Lorem"), 
new Fromages("Img/Tous les fromages/maroilles.jpg", "Maroilles", "Brebis", "Hauts-de-France", "Juillet", "Lorem")
];

let cheeseContainer = document.getElementById("cheese-container");


for (let fromage of listetouslesfromages) {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "mx-5px");
  newDiv.setAttribute("data-bs-toggle","modal");
  newDiv.setAttribute("data-bs-target",`#${fromage.nom}`);
  newDiv.innerHTML=`
  <div class="flex-col items-center cheese">
      <img src="${fromage.image}" class="imagefromage">

      <div class="bg">
          <div>${fromage.nom}</div>
      </div>
  </div>`

  const modalPop = document.createElement("div");
  modalPop.setAttribute("class","modal animate__animated animate__jackInTheBox");
  modalPop.setAttribute("id",`${fromage.nom}`);
  modalPop.setAttribute("tabindex",-1);
  modalPop.setAttribute("aria-labelledby",'exampleModalLabel');
  modalPop.setAttribute("aria-hidden","true");
modalPop.innerHTML = `
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5">${fromage.nom}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
        <div class="modal-body">
<!-- CONTENU DE LA MODAL -->
            <div class="d-flex flex-row">
                <img src="Img/Tous les fromages/camembert.jpg" id="fromage-image">
                <span class="mx-2"><p>Laitage: </p>
                    <p>Région: </p>
                    
                    <p>Saison: </p>
                </span>
            </div>  
                <div class="d-flex flex-row my-5">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, enim eaque itaque beatae accusamus maxime sapiente fugiat ratione tempora fugit eligendi esse corrupti eos! Error aliquam dolor recusandae ab debitis!</p>
                </div>            
<!-- FIN CONTENU DE LA MODAL -->
        </div>
            <div class="modal-footer justify-content-between">
            <span>🤤 <a href="">Ajouter à la Cheeselist</a></span> <span>😍 <a href="">Ajouter aux favoris</a></span>
            </div>
    </div>
</div>`


cheeseContainer.appendChild(modalPop)

cheeseContainer.appendChild(newDiv)
}
