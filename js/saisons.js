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

new Fromages("Img/Tous les fromages/raclette.jpg", "Raclette", "Vache", "AuvergneRhoneAlpes", "Janvier", "Raclette du Jura, de Savoie, du Valais… La raclette se conjugue au pluriel. Le terme recouvre une offre très hétéroclite, allant d'authentiques fromages de montagne patiemment affinés à des produits très standards. Le plus souvent issue de lait de vache, la raclette est originellement une spécialité montagnarde, réalisée avec des fromages plus tendres que les gruyères. Elle a commencé à s'introduire en France dans les années 60 et a essaimé grâce à l'essor des sports d'hiver."),

new Fromages("Img/Tous les fromages/vacherin.jpg", "Vacherin", "Vache", "BourgogneFrancheComte", "Septembre à Mai", "Le fromage Mont d'Or AOP, dit aussi « vacherin du Haut-Doubs », est né lorsque la neige et le froid cloîtraient les paysans des hauts plateaux jurassiens à la ferme et les empêchaient d’apporter leur lait au village. Ils fabriquaient alors sur place un petit fromage à pâte molle. Ces laits de fin de lactation étant particulièrement gras, le fromage était très crémeux. Ils le cerclaient donc de sangles d’épicéa pour l’empêcher de s’épancher."),

new Fromages("Img/Tous les fromages/brie.jpg", "Brie", "Vache", "Ile-de-France", "Avril à Septembre", "L’histoire du Brie commence à la ferme, une fabrication avec des moules de taille correspondante à la quantité de lait de vache disponible de l’exploitation. Au cours du 19ème siècle, les fromagers livrent leurs produits laitier “frais de sel” non affinés dans la partie Est de l'Ile-de-France grâce à l’apparition du chemin de fer. Ainsi, ils les affinent dans l’Est et commencent à les vendre comme le fromage “Brie de Meaux”."),

new Fromages("Img/Tous les fromages/roquefort.jpg", "Roquefort", "Brebis", "Occitanie", "Octobre", "Le fromage superlatif : le plus gros, le plus vendu, l’un des plus traditionnels … Avec son cahier des charges particulièrement exigeant, le Comté AOP est la grande fierté des fromagers franc-comtois. Ce fromage à pâte pressée cuite est fabriqué dans plus de 150 fruitières, fidèle à l’esprit coopératif jurassien. Les fromageries appartiennent aux éleveurs qui y font transformer le lait de leur troupeau de vaches. Celui-ci ne peut être collecté que dans un rayon maximum de 25 km autour de la fromagerie."),

new Fromages("Img/Tous les fromages/cabecou.jpg", "Cabécou", "Chevre", "Occitanie", "Juin", "Leur format évolue généralement entre 5 et 6 cm de diamètre pour un poids n’excédant pas 40 grammes. Leur hauteur oscille entre 1 et 3 cm. La plupart ont tendance à devenir crémeux à mesure que leur affinage se prolonge, mais d’autres deviennent secs et durs comme de la pierre. Leur fabrication a des racines très anciennes, communes à toutes les zones sèches et arides du pourtour méditerranéen."),

new Fromages("Img/Tous les fromages/saintnectaire.jpg", "Saint-Nectaire", "Vache", "AuvergneRhoneAlpes", "Mai", "Première AOP fermière d’Europe (plus de 200 producteurs), le fromage Saint-Nectaire AOP se présente sous de multiples facettes.Tantôt, à la façon des fermiers de montagne, il est recouvert d’une épaisse croûte à dominante grise qui peut se pigmenter de fleurs jaunes ou rougeâtres. Tantôt, à la façon des laiteries des vallées et de plaines, sa croûte est plus fine, plus humide et davantage rose-orangé. Historiquement, c’est à même le sol, sur de la paille de seigle, qu’il était affiné. Il exprime toujours, au nez, des arômes de sous-bois et d’humus."),

new Fromages("Img/Tous les fromages/abondance.jpg", "Abondance", "Vache", "AuvergneRhoneAlpes", "Août", "Dans son berceau natal, l’Abondance AOP est la base de plusieurs plats qui tiennent chaud au corps l’hiver. Elle constitue la base du Berthoud, un plat très simple à exécuter : on passe le fromage au four, découpé en lamelles avec un peu d’ail et de Madère ou de blanc sec de Savoie. On le nappe ensuite sur du pain ou des pommes deterre. La filière a lancé récemment la commercialisation d’« assiettesà Berthoud », en porcelaine, très épaisses pour garder la chaleur."),

new Fromages("Img/Tous les fromages/comte.jpg", "Comté", "Vache", "BourgogneFrancheComte", "Décembre", "Fromage de table, le Comté se grignote à toute heure de la journée. Comme pour les grands vins, il faut savoir l’attendre. Si son affinage minimal est de 120 jours, il atteint toute sa plénitude au bout d’un an et demi. Lorsque les vaches sont en pâture et se nourrissent d’herbe fraîche. Les fromages présentent une pâte d’un jaune éclatant (en raison de la présence de carotène dans l’herbe). L’hiver, leur pâte est plus pâle, mais pas moins goûteuse. La filière se refuse à autoriser l’utilisation d’additifs ou de colorants."),

new Fromages("Img/Tous les fromages/pitchounet.jpg", "Pitchounet", "Brebis", "Occitanie", "Décembre", "Le Pitchounet pèse près de 400 g, son diamètre atteint une dizaine de centimètres et sa hauteur culmine à 6 cm. Il faut environ 2 litres de lait cru pour en fabriquer une pièce. En authentique produit fermier, sa physionomie peut changer selon la saison… et selon les autres fromages qu’il côtoie en cave d’affinage. Couvert d’une fine fleur blanche quand il est jeune, il peut se parer de tons grisés et bruns-rougeâtres au fil des semaines, cultivant volontiers un aspect rustique."),

new Fromages("Img/Tous les fromages/mothais.jpg", "Mothais-sur-feuille", "Chèvre", "NouvelleAquitaine", "Janvier", "Le mothais-sur-feuille, dont le format est proche de celui d'un camembert, s'apprécie fondant. Sa pâte est recouverte d'une croûte blanche à l'aspect tourmenté. Les spécialistes disent qu’elle « frise »ou qu'elle «  crapaute ». Il peut lui arriver de se couvrir d'une très légère fleur bleue, qui laisse présager un goût plus affirmé. Le fromage déploie toute sa saveur au bout de quelques semaines d’affinage. Il trouve sa meilleure expression sur le plateau de fromage de fin de repas ou, pour ceux qui apprécient le fromage dès le matin, sur la table du petit-déjeuner."),

new Fromages("Img/Tous les fromages/pelardon.jpg", "Pélardon", "Chèvre", "Occitanie", "Juillet", "Fromage du soleil, le Pélardon peut se déguster dans sa prime jeunesse, offrant alors toute sa fraîcheur acidulée et ses notes florales. Il a toute sa place dans une salade folle à base de mesclun, de fenouil et de quartiers d’oranges, ou plus simplement, badigeonné de miel de châtaignier. Plus affiné, ses arômes caprins se concentrent, son goût se corse et il s'invitera dans des plats chauds, comme un tian de légumes aux tomates, aubergines et herbes de Provence arrosé d’huile d’olive. Il apprécie la compagnie de châtaignes, autre emblème, comme lui, des Cévennes."),

new Fromages("Img/Tous les fromages/chabichou.jpg", "Chabichou", "Chèvre", "NouvelleAquitaine", "Juin", "L’alliance la plus populaire de la région, c'est un Chabichou du Poitou associé à  un Pineau des Charentes bien frais, à l'heure de l'apéritif.  Si votre fromage est tout juste affiné, associez-le à un pineau rosé. S’il est sec, avec un goût plus prononcé et que le bleu affleure à sa surface, offrez-vous un vieux ou très vieux pineau vieilli plusieurs années en fûts de chêne : l’alcool va attendrir la pâte et porter très haut les aromes du lait de chèvre."),

new Fromages("Img/Tous les fromages/cabrioulet.jpg", "Cabrioulet", "Chèvre", "Occitanie", "Décembre", "Fondant sans être crémeux, expressif sans être trop fort, le Cabrioulet se distingue par sa finesse de pâte et de goût, où prédominent des arômes évoquant la noisette. Sa durée de vie optimale est de trois à quatre mois, selon la composition du lait qui varie en fonction des saisons. Une bonne trentaine de litres de lait de chèvre sont nécessaires pour réaliser un fromage. Le Cabrioulet est surtout destiné au plateau, ses arômes résistant mal à un éventuel chauffage dans un plat cuisiné."),
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
