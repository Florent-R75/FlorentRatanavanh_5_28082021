// Récuperer le panier dans le local Storage

let panier = JSON.parse(localStorage.getItem("panier"));


// Assigner un index au panier

// let index = panier.length;
// const formulaire = document.querySelector(".prixTotal");

// Extraire les objets du panier

// -----------------------Affichage des produits du panier-------------------
// Selection de la classe ou je vais injecter le code HTML

const positionElement = document.querySelector("#container-produits-panier");

console.log(positionElement);

// Si le panier est vide, afficher le panier est vide

if (panier === null || panier == 0) {
    const panierVide = `
    <div class="container-panier-vide">
    <div> le panier est vide </div>
    </div>
    `;
    positionElement.innerHTML = panierVide;
} else {

    // Si le panier n'est pas vide, afficher les produits du local storage

    let structureProduitPanier = [];



    for (k = 0; k < panier.length; k++) {

        structureProduitPanier = structureProduitPanier + `
        
        <div class="container-recapitulatif card">
            <div class="card-title">Nom du Produit: ${panier[k].name}</div>
            <div class="card-text">${panier[k].price / 100} € - <div><button class ="btn-supprimer btn btn-warning"> Supprimer </button>
            </div></div>
            `;


    }

    if (k === panier.length) {
        positionElement.innerHTML = structureProduitPanier;
    }

}

// ---------------FIN DE L AFFICHAGE DES PRODUITS-----------------

// *************** Gestion du bouton supprimer l'article *********

// Selectionner de tous les boutons  

let btn_supprimer = document.querySelectorAll(".btn-supprimer");
console.log(btn_supprimer);

// seclection du bouton a supprimer

for (let l = 0; l < btn_supprimer.length; l++) {
    btn_supprimer[l].addEventListener("click", (event) => {
        event.preventDefault();


        let id_selectionner_suppression = panier[l]._id;
        console.log(id_selectionner_suppression);

        // avec la methode filter je selectionne les elements a garder et je supprime le btn suppr a cliquer

        panier = panier.filter(el => el._id !== id_selectionner_suppression);
        console.log(panier);

        // on envoie la variable dans le local storage

        localStorage.setItem("panier", JSON.stringify(panier));


        // alert que le produit a ete supprime

        alert("Vous êtes sur le point de supprimer ce produit du panier");
        window.location.href = "panier.html";

    });
}


//-------------------LE BTIN POUR SUPPRIMER TOUT LE PANIER  ----------------------
// le code HTML pour le bouton

const btn_tout_supprimer_panier_html = `
<button class="btn-tout-supprimer-panier-html btn btn-danger"> Vider le panier </button>
`;

// Insertion du bouton dans le DOM

positionElement.insertAdjacentHTML("beforeend", btn_tout_supprimer_panier_html)

// Selectionner le bouton pour le javascript

const btn_tout_supprimer_panier_java = document.querySelector(".btn-tout-supprimer-panier-html");

// suppression des produits au click

btn_tout_supprimer_panier_java.addEventListener("click", (event) => {
    event.preventDefault();
    localStorage.removeItem('panier');

    alert("Le panier a été vidé")
    window.location.href = "panier.html";

});

// --------FIN Le bouton pour vider le panier--------------------

// ---------Le montant total du panier--------------

// Declaration de la variable pour contenir les prix du panier

let prixTotalCalcul = [];

// Aller chercher les prix dans le panier



for (let m = 0; m < panier.length; m++) {

    let prixProduitDansLePanier = panier[m].price / 100;
    prixTotalCalcul.push(prixProduitDansLePanier);
    console.log(prixTotalCalcul)
}





// Additioner les prix du tableau avec la methode REDUCER et la mettre dans la variable "prixTotalAffiche"

const reducer = (previousValue, currentValue) => previousValue + currentValue;

let prixTotalAffiche = prixTotalCalcul.reduce(reducer, 0);

console.log(prixTotalAffiche);

// Le code HTML du code à afficher

const affichagePrixTotal = `
<div class="affichage-prix-html"> Le prix total est de ${prixTotalAffiche} €</div>
`;

// Injection du HTML du total panier apres le dernier élément

positionElement.insertAdjacentHTML('beforeend', affichagePrixTotal);


// -------------------Fin du panier de commande-----------------------



// --------------------CONSTRUIRE LE FORMULAIRE--------------------------


const afficherFormulaireHtml = () => {


    // Selectionner du DOM pour le position du formulaire

    const positionElement2 = document.querySelector("#container-produits-panier");

    const structureFormulaire = `
    <div class="container">
                  <legend>Veuillez remplir ce formulaire pour la commande</legend>
    
                  <div id="prixTotal" class="row">
                    <form method="POST" target="_blank" class="col">
                      <label for="nom" class="form-label">Nom:</label>
                      <input type="text" name="nom" id="nom" class="form-control" required>
                    
    
                    
                      <label for="prenom"class="form-label">Prenom:</label>
                      <input type="text" name="prenom" id="prenom" class="form-control" required>
                    
    
                    
                      <label for="adresse" class="form-label">Adresse de livraison</label>
                      <textarea type="text" name="Adresse de livraison" class="form-control" id="adresse" required></textarea>
                    
                      <label for="ville" class="form-label">Ville</label>
                      <input type="text" name="Ville" id="ville" class="form-control" required>
                    
                      <label for="codepostal" class="form-label">Code Postal</label>
                      <input type="text" name="Codepostal" id="codepostal" class="form-control" required>
    
                      <label for="email" class="form-label">Email</label>
                      <input type="text" name="Email" id="email" class="form-control" required> 
                    
                      
                    </form>
    
                    <button type="submit" class="btn btn-success" id="envoyerformulaire"  name="envoyer_le_formulaire">Passez la commande</button>
                  </div>
                
              </div>
    `;


    // Injection du code HTML

    positionElement2.insertAdjacentHTML("afterend", structureFormulaire);


};

// Affichage du Formulaire

afficherFormulaireHtml();

// Recuperation des donnees du formulaires

// Selection du btn pour envoyer le formulaire

const btnEnvoyerFormulaire = document.querySelector("#envoyerformulaire");


// ---------AddEventListener-----------

btnEnvoyerFormulaire.addEventListener('click', (e) => {
    e.preventDefault();





    // Recuperation des valeurs du formulaires

    const formulaireValues = {
        nom: document.querySelector("#nom").value,
        prenom: document.querySelector("#prenom").value,
        adresse: document.querySelector("#adresse").value,
        ville: document.querySelector("#ville").value,
        codepostal: document.querySelector("#codepostal").value,
        email: document.querySelector("#email").value,
    }


    //--------------- Gestion Validation du formulaire------------------


    // -------Factorisation de la condition dans une fonction

    const alertOrigine = (value) => {
        return `${value} :Chiffres et symboles ne sont pas autorisés.\nMinimum 3 caractères, maximum 20 caractères.`
    }

    const regExPrenomNomVille = (value) => {
        return /^[A-Za-z\s]{3,20}$/.test(value);
    }

    const regExCodePostal = (value) => {
        return /^[0-9]{5}$/.test(value);
    }

    const regExEmail = (value) => {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
    }

    const regExAdresse = (value) => {
        return /^[A-Za-z0-9\s]{5,50}$/.test(value);
    }

    //---------------------- Controle de la validite du nom, prenom et ville

    function nomControle() {


        const leNom = formulaireValues.nom;
        if (regExPrenomNomVille(leNom)) {
            return true;

        } else {
            alert(alertOrigine("NOM"));
            return false;
        }

    }
    // ---------prenom--------------


    function prenomControle() {


        const lePrenom = formulaireValues.prenom;
        if (regExPrenomNomVille(lePrenom)) {

            return true;

        } else {
            alert(alertOrigine("PRENOM"));
            return false;
        }

    }
    // ------------REGEX Adresse----------------

    function adresseControle() {


        const ladresse = formulaireValues.adresse;
        
        if (regExAdresse(ladresse)) {

            return true;

        } else {
            alert("L'adresse doit contenir au minimum 3 caractères et maximum 50 caractères.");
            return false;
        }

    }
    //-------------- Ville


    function villeControle() {


        const laVille = formulaireValues.ville;
        if (regExPrenomNomVille(laVille)) {

            return true;

        } else {


            alert(alertOrigine("VILLE"));
            return false;
        }

    }

    // --------REGEXP Code Postal---------


    function codePostalControle() {

        const leCodePostal = formulaireValues.codepostal;



        if (regExCodePostal(leCodePostal)) {
            return true;


        } else {

            alert("Le Code Postale doit être composé de 5 chiffres");
            return false;
        }
    }
    // -------REGEXP Email------------------------


    function emailControl() {


        const lemail = formulaireValues.email;

        if (regExEmail(lemail)) {

            return true;

        } else {


            alert("Veuillez entrer une adresse mail valide!");
            return false;
        }

    }





    // Controler la validité du formulaire avant l'envoi

    if (nomControle() && prenomControle() && villeControle() && codePostalControle() && emailControl() && adresseControle()) {

        localStorage.setItem("formulaireValues", JSON.stringify(formulaireValues));


    } else {
        alert("Veuillez bien remplir le formulaire");
    }



    // -------------FIN Gestion de validation du Formulaire---------


    // --------REGROUPER le panier et le formulaire avant l'envoi au serveur----------

    const aEnvoyer = {
        panier,
        formulaireValues
    }


});

// -----------------Mettre le contenu du local storage dans les champs du formulaires--------------

// Prendre la key du local Storage et la metrre dans une variable

const dataLocalStorage = localStorage.getItem("formulaireValues");

// convertir la chaine de caractere en objet Javascript

const dataLocalStorageObject = JSON.parse(dataLocalStorage);


// ----------------Fonction pour les maintenir les champs du Local Storage apres reactualisation--------


function remplirChampsInputDepuisLocalStorage(input) {
    document.querySelector(`#${input}`).value = dataLocalStorageObject[input];
}

remplirChampsInputDepuisLocalStorage("nom");
remplirChampsInputDepuisLocalStorage("prenom");
remplirChampsInputDepuisLocalStorage("adresse");
remplirChampsInputDepuisLocalStorage("ville");
remplirChampsInputDepuisLocalStorage("codepostal");
remplirChampsInputDepuisLocalStorage("email");










