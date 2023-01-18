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

const listetouslesfromages = [new Fromages("Img/Tous les fromages/camembert.jpg", "Camembert", "Vache", "Normandie", "Février", "Le camembert de Normandie AOP appartient à la famille des fromages à pâte molle à croûte fleurie. Il est produit à partir des vaches normandes restant au pâturage pendant 6 mois afin d’obtenir ce délicieux lait cru. La fabrication du camembert se fait dans des moules cylindriques. Le lait caillé est divisé en cinq couches puis égoutté afin d’obtenir cette pâte molle. La production du camembert, fromage de vache au lait cru normand, moulé à la louche, est un produit inimitable, avec son blanc crème."),

new Fromages("Img/Tous les fromages/coulommiers.jpg", "Coulommiers", "Vache", "Ile-de-France", "Mars à Novembre", "Le fromage Coulommiers porte le nom d’une petite ville de Seine-et-Marne, département qui constitue le berceau historique de la famille prolifiques des bries. Mais sa forme évoque davantage celle d’un gros camembert, dont il pèse le double du poids. Du camembert, il aime la générosité ; du brie, la finesse. Ce fromage français doit une grande partie de son essor historique à l’avantage que lui a donné, par rapport aux grandes roues de brie, son format compact le rendant plus apte à voyager."), 

new Fromages("Img/Tous les fromages/maroilles.jpg", "Maroilles", "Vache", "Hauts-de-France", "Avril et Septembre", "Comme beaucoup de représentants de cette famille, le fromage Maroilles perd une grande partie de sa vigueur lorsqu’il est chauffé. Il donne du caractère à des flamiches, quiches, soufflés et même à des gaufres. La tarte au Maroilles est très populaire dans le Nord. Incorporé à une sauce, il peut accompagner une truite ou de la volaille. On peut enfin l’utiliser en rôtie. Les mineurs le dégustaient en le trempant dans du café. La scène a été immortalisée dans le film «Bienvenue chez les Chti’s»."),

new Fromages("", "Raclette", "Vache", "AuvergneRhoneAlpes", "Janvier", "Raclette du Jura, de Savoie, du Valais… La raclette se conjugue au pluriel. Le terme recouvre une offre très hétéroclite, allant d'authentiques fromages de montagne patiemment affinés à des produits très standards. Le plus souvent issue de lait de vache, la raclette est originellement une spécialité montagnarde, réalisée avec des fromages plus tendres que les gruyères. Elle a commencé à s'introduire en France dans les années 60 et a essaimé grâce à l'essor des sports d'hiver. A l'origine les fromages étaient mis à fondre devant l'âtre puis raclés avec un couteau sur des pommes de terre. La consommation de la raclette est surtout hivernale. Par exemple, 70% de la raclette de Savoie est commercialisée entre novembre et mars."),

new Fromages("", "Vacherin", "Vache", "BourgogneFrancheComte", "Septembre à Mai", "Le fromage Mont d'Or AOP, dit aussi « vacherin du Haut-Doubs », est né lorsque la neige et le froid cloîtraient les paysans des hauts plateaux jurassiens à la ferme et les empêchaient d’apporter leur lait au village. Ils fabriquaient alors sur place un petit fromage à pâte molle. Ces laits de fin de lactation étant particulièrement gras, le fromage était très crémeux. Ils le cerclaient donc de sangles d’épicéa pour l’empêcher de s’épancher. Aujourd’hui encore, la saison du Mont d’Or AOP bat son plein en hiver. Le fromage doit être obligatoirement fabriqué et affiné au-dessus de 700 mètres d’altitude et ne peut être proposé aux consommateurs que du 10 septembre au 10 mai. Il est toujours fabriqué au lait cru et doit être affiné au minimum 21 jours."),

new Fromages("", "Brie", "Vache", "Ile-de-France", "Avril à Septembre", "L’histoire du Brie commence à la ferme, une fabrication avec des moules de taille correspondante à la quantité de lait de vache disponible de l’exploitation. Au cours du 19ème siècle, les fromagers livrent leurs produits laitier “frais de sel” non affinés dans la partie Est de l'Ile-de-France grâce à l’apparition du chemin de fer. Ainsi, ils les affinent dans l’Est et commencent à les vendre comme le fromage “Brie de Meaux”. C’est alors que la fabrication du Brie de Meaux se développa dans la région de Marne, Haute-Marne et la Meuse."),

new Fromages("", "Roquefort", "Brebis", "Occitanie", "Octobre", "Le fromage superlatif : le plus gros, le plus vendu, l’un des plus traditionnels … Avec son cahier des charges particulièrement exigeant, le Comté AOP est la grande fierté des fromagers franc-comtois. Ce fromage à pâte pressée cuite est fabriqué dans plus de 150 fruitières, fidèle à l’esprit coopératif jurassien. Les fromageries appartiennent aux éleveurs qui y font transformer le lait de leur troupeau de vaches. Celui-ci ne peut être collecté que dans un rayon maximum de 25 km autour de la fromagerie. Issu de la famille des gruyères, les fromages comtés sont obligatoirement fabriqués au lait cru, les animaux n’étant nourris qu’à l’herbe ou au foin."),

new Fromages("", "Cabécou", "Chevre", "Occitanie", "Juin", "Leur format évolue généralement entre 5 et 6 cm de diamètre pour un poids n’excédant pas 40 grammes. Leur hauteur oscille entre 1 et 3 cm. La plupart ont tendance à devenir crémeux à mesure que leur affinage se prolonge, mais d’autres deviennent secs et durs comme de la pierre. Leur fabrication a des racines très anciennes, communes à toutes les zones sèches et arides du pourtour méditerranéen."),
];

let cheeseContainer = document.getElementById("cheese-container");


for (let fromage of listetouslesfromages) {
  const newDiv = document.createElement("div");

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
                <img src="${fromage.image}">
                <span class="mx-2"><p>Laitage: ${fromage.laitage}</p>
                    <p>Région: ${fromage.region}</p>
                    
                    <p>Saison: ${fromage.saison}</p>
                </span>
            </div>  
                <div class="d-flex flex-row my-3">
                <p>${fromage.description}</p>
                </div>            
<!-- FIN CONTENU DE LA MODAL -->
        </div>
            <div class="modal-footer justify-content-between">
            <span>🤤 <a href="">Ajouter à la Cheeselist</a></span> <span>😍 <a href="">Ajouter aux favoris</a></span>
            </div>
    </div>
</div>`


cheeseContainer.appendChild(modalPop)
}
