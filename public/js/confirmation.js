// Recuperation de l'id de la commande

let commandeId = localStorage.getItem("responseId");

// Recuperation du prix total

let prixTotal = localStorage.getItem("PrixTotal");

// Selection du DOM pour le positionnement

const positionElement3 = document.querySelector("#positionElement3");

const structureConfirmationCommande = `
    <div class="p-4 w-50">
        <h1 class="confirmation-titre text-center mb-4 fw-bold">Récapitulatif</h1>
        
        <p class="text-center confirmation-texte">Votre numéro de commande<br> <span class="fw-bold" id="commandeIdHTML">${commandeId}</span><br> a bien été pris en compte.</p>
        <p class="text-center confirmation-texte">Le montant total s'élève à <span class="fw-bold" id="prixTotalHTML">${prixTotal}</span> €.</p>
        <p class="fw-bold text-center confirmation-texte1">Merci et au plaisir de vous revoir !</p>
    </div>
`;

// Injection du HTML

if (prixTotal ===null || commandeId ===null){
    console.log("bonjour")
}else{
    positionElement3.innerHTML= structureConfirmationCommande;

}

// Suppression des objets du Local Storage

localStorage.removeItem("panier");
localStorage.removeItem("PrixTotal");
localStorage.removeItem("responseId");
localStorage.removeItem("contact");









