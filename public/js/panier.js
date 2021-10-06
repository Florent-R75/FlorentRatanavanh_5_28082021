// Récuperer le panier dans le local Storage

let panier = JSON.parse(localStorage.getItem("panier"));

// -----------------------AFfICHAGE DU PANIER-------------------

// Selection de la classe ou je vais injecter le code HTML

const positionElement = document.querySelector("#container-produits-panier");
const positionElement2 = document.querySelector("#positionElement2");

// Si le panier est vide, afficher le panier est vide

if (panier === null || panier == 0) {
    const panierVide = `
    <div class="container-panier-vide text-center fw-bold">
    <div class="text-center"> Le panier est vide </div>
    </div>
    `;
    positionElement.innerHTML = panierVide;

} else {
    const structureTableau =`
    <legend class="mt-4 text-center fw-bold">Votre panier</legend>
    <table class="table" id="tableRoot">
        <thead>
            <tr>
                <th scope="col">Article</th>
                <th scope="col" class="text-center">Prix</th>
            </tr>
        </thead>
    </table>
    `;

    positionElement2.innerHTML= structureTableau;

    const positionElement3 = document.querySelector("#tableRoot");
    
    
    
    // Si le panier n'est pas vide, afficher les produits du local storage
    let structureProduitPanier = "";
    
    for (let item of panier) {
        structureProduitPanier = structureProduitPanier + `
         <tbody>
                <tr>
                    <td class="fw-normal">`+item.name+`</td>
                    <td class="text-center fw-normal">`+item.price / 100+` €</td>
                </tr>
        </tbody>
        `;
    }
    
    positionElement3.insertAdjacentHTML("beforeend",structureProduitPanier);

}
// ---------------FIN DE L AFFICHAGE DU PANIER-----------------

// ---------CREATION DE LA FONCTION POUR LE CALCUL DU PRIX TOTAL--------------

// Extraction du point noeud HTML-----------

const positionElement3 = document.querySelector("#tableRoot");

// Declaration de la variable pour contenir les prix du panier

let prixTotalCalcul = [];

// Aller chercher les prix dans le panier

for (let item of panier) {
    
    let prixProduitDansLePanier =item.price / 100;
    prixTotalCalcul.push(prixProduitDansLePanier);
    
}

    // Additioner les prix du tableau avec la methode REDUCER et la mettre dans la variable "prixTotalAffiche"

const reducer = (previousValue, currentValue) => previousValue + currentValue;

let prixTotalAffiche = prixTotalCalcul.reduce(reducer, 0);

    // Envoi du prix total dans le local storage

localStorage.setItem("PrixTotal", JSON.stringify(prixTotalAffiche));

    // Le code HTML du code à afficher

const affichagePrixTotal = `
    <tbody class="table-bordered">
        <tr>
            <td class="fw-bold text-black rounded">Prix Total</td>
            <td class="text-center fw-bold  text-black">${prixTotalAffiche} €</td>
        </tr>
    </tbody>
`;

    // Injection du HTML du total panier apres le dernier élément

positionElement3.insertAdjacentHTML('beforeend', affichagePrixTotal);

// ---------FIN DE LA FONCTION POUR LE CALCUL DU PRIX TOTAL--------------

// ---------CREATION DU BOUTON "TOUT SUPPRIMER"

// le code HTML pour le bouton

const btn_tout_supprimer_panier_html = `
    <div class="text-center mb-4 "><button class="btn-tout-supprimer-panier-html btn btn-warning mb-5 text-center"> Vider le panier </button></div>
`;

// Insertion du bouton dans le DOM

positionElement2.insertAdjacentHTML("beforeend", btn_tout_supprimer_panier_html);

// Selectionner le bouton pour le javascript

const btn_tout_supprimer_panier_java = document.querySelector(".btn-tout-supprimer-panier-html");

// suppression des produits au click

btn_tout_supprimer_panier_java.addEventListener("click", (event) => {
    event.preventDefault();
    localStorage.removeItem('panier');
    localStorage.removeItem('PrixTotal');

    alert("Le panier a été vidé")
    window.location.href = "panier.html";

});
    // --------FIN Le bouton pour vider le panier--------------------

    // -------------------FIN DU PANIER -----------------------

    // --------------------CONSTRUIRE LE FORMULAIRE--------------------------

const afficherFormulaireHtml = () => {

    // Selectionner du DOM pour le position du formulaire



// Initialisation de la constante contenant le HTML------------
const structureFormulaire = `
    <div class="mb-5 col-md-6 col-sm-12 order-1">
        <legend class="text-center fw-bold mt-4">Veuillez remplir ce formulaire pour la commande</legend>
    
        <div id="prixTotal" class="row">
            <form method="POST" target="_blank" class="col">
                <label for="nom" class="form-label">Nom</label>
                <input type="text" name="nom" id="nom" class="form-control" required>

                <label for="prenom"class="form-label mt-2">Prenom</label>
                <input type="text" name="prenom" id="prenom" class="form-control" required>
            
                <label for="adresse" class="form-label mt-2">Adresse de livraison</label>
                <textarea type="text" name="Adresse de livraison" class="form-control" id="adresse" required></textarea>
            
                <label for="ville" class="form-label mt-2">Ville</label>
                <input type="text" name="Ville" id="ville" class="form-control" required>
            
                <label for="email" class="form-label mt-2">Email</label>
                <input type="text" name="Email" id="email" class="form-control" required> 
            </form>
        </div>
        <div class="text-center">
            <button type="submit" class="btn btn-success mt-4 mb-4 text-center" id="envoyerformulaire"  name="envoyer_le_formulaire">Passer la commande</button>
        </div>
    </div>
    `;
    // Injection du code HTML

    positionElement2.insertAdjacentHTML("afterend", structureFormulaire);
};

// -------------FIN D INITIALISATION DE LA CONSTANTE--------------

// Appel de la fonction ffichage du Formulaire

afficherFormulaireHtml();

// Selection du noeud HTML pour envoyer le formulaire

const btnEnvoyerFormulaire = document.querySelector("#envoyerformulaire");

// ---------FIN DE LA CREATION DU FORMULAIRE----------------------

// ---------CREATION DU BOUTON AddEventListener ET VALIDATION DES CHAMPS---------------------------------------

btnEnvoyerFormulaire.addEventListener('click', (e) => { e.preventDefault();


    // Recuperation des valeurs du formulaires

    const contact = {
        firstName: document.querySelector("#nom").value,
        lastName: document.querySelector("#prenom").value,
        address: document.querySelector("#adresse").value,
        city: document.querySelector("#ville").value,
        email: document.querySelector("#email").value,
    }
    //--------------- Gestion Validation du formulaire------------------

    // -------Assignation de variables

    const alertOrigine = (value) => {
        return `${value} :Chiffres et symboles ne sont pas autorisés.\nMinimum 3 caractères, maximum 20 caractères.`;
    };

    const regExPrenomNomVille = (value) => {
        return /^([A-Za-z\s]{3,20})?([-]{0,1})?(([A-Za-z\s]{3,20}))$/.test(value);
    };
    
    const regExEmail = (value) => {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,5}$/.test(value);
    };

    const regExAdresse = (value) => {
        return /^[A-Za-z0-9\s]{5,50}$/.test(value);
    };

    //---------------------- Controle de la validite du nom, prenom et ville
    
    // --------nom-------------
    
    function nomControle() {

        const leNom = contact.firstName;
        if (regExPrenomNomVille(leNom)) {
            return true;

        } else {
            alert(alertOrigine("NOM"));
            return false;
        }

    }
    // ---------prenom--------------


    function prenomControle() {


        const lePrenom = contact.lastName;
        if (regExPrenomNomVille(lePrenom)) {
            return true;

        } else {
            alert(alertOrigine("PRENOM"));
            return false;
        }

    }
    // ------------ Adresse----------------

    function adresseControle() {

        const ladresse = contact.address;
        
        if (regExAdresse(ladresse)) {
            return true;

        } else {
            alert("L'adresse doit contenir au minimum 3 caractères et maximum 50 caractères.");
            return false;
        }
    }
    //-------------- Ville-----------


    function villeControle() {

        const laVille = contact.city;
        if (regExPrenomNomVille(laVille)) {
            return true;

        } else {
            alert(alertOrigine("VILLE"));
            return false;
        }
    }

    function emailControl() {
        
        const lemail = contact.email;
        
        if (regExEmail(lemail)) {
            return true;
        } else {
            alert("Veuillez entrer une adresse mail valide!");
            return false;
        }
    }
    //------------------FIN DU CONTROLE INDIVIDUEL DES CHAMPS-----------------
    
    // ----------------CONTROLE GENERALE DU FORMULAIRE AVANT ENVOI-------------
    
    let products = panier.map(function(product){
        return product._id
    });

    // Controler la validité du formulaire avant l'envoi

    if (nomControle() && prenomControle() && villeControle() && emailControl() && adresseControle()) {

        localStorage.setItem("contact", JSON.stringify(contact));

        // -------------------
        const promise01 = fetch("http://localhost:3000/api/teddies/order", {
            method : "POST",
            body: JSON.stringify({products, contact}),
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json",
            },
        });
            
            //------------------------- Envoyer le formulaire et le produit sur le serveur.
            
            promise01.then(async(response)=>{
                
            // pour voir le resultat du serveur dans la console
            try{
                const contenu = await response.json();
                
                //    Si la promesse n'est pas résolu , il faut gérer l'erreur.
                if(response.ok){
                    console.log(`Resultat de response.ok: ${response.ok}`);
                        
                    // Recuperation de l'id de la response et envoi au Local Storage-------------
                    localStorage.setItem("responseId",contenu.orderId);

                    // Aller sur la page de confirmation-commande
                    window.location = "confirmation.html";

                }else {
                    console.log(`reponse du serveur : ${response.status}`);
                    alert(`Problème avec le serveur : erreur ${response.status}`);
                }
            }    
            catch(event){
                console.log("Erreur qui vient du catch()");
                console.log(event);
                alert(`ERREUR qui vient du ${event}`);
            }
        })
    } else {
        alert("Veuillez bien remplir le formulaire");
    }
});
    





   

    





























