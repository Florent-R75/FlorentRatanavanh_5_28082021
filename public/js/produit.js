// Recuperation de l'id de la barre de navigation

let id = new URLSearchParams(window.location.search).get("id");


// Appel serveur et récupération de l'id du produit


fetch("http://localhost:3000/api/teddies/" + id)
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }

    })

    // Appel de la fonction création HTML

    .then(function (item) {
        showProduct(item);


    })

    .catch(function (err) {
        console.log("Fetch problem" + err.message);
    });


// -----------FIN DE FETCH et Appel de fonction---------------


// CREATION DE LA FONCTION showProduct POUR L'AFFICHAGE-------------


function showProduct(product) {

    // Initialisation de variables

    const card = document.createElement("div");
    const image = document.createElement("img");
    const cardbody = document.createElement("div");

    const heading = document.createElement("h2");
    const para = document.createElement("p");
    const description = document.createElement("p");
    const label = document.createElement('label');
    const colorsList = document.createElement("select");
    const colors = document.createElement("option");
    const button = document.createElement("button");
    const command = document.createElement('button');
    const lien = document.createElement('a');
    const optionQuantite = product.colors;
    let structureOptions = "";




    // Creation d'une boucle pour creer les options du produit

    for (let i = 0; i < optionQuantite.length; i++) {
        structureOptions = structureOptions +
            `
        <option value="${i + 1}">${optionQuantite[i]}</option>
        `;

    }

    // Attribution de contenus

    heading.textContent = product.name;
    para.textContent = "Prix: " + product.price / 100 + "€";
    description.textContent = product.description;
    command.textContent = "Passer la commande "
    button.textContent = "Ajouter au panier";
    colors.textContent = product.colors;
    label.textContent = "Choisissez une couleur:";

    // Evenements sur le bouton et ajout au LOCAL STORAGE

    button.addEventListener("click", (event) => {
        event.preventDefault();
        let panier = JSON.parse(localStorage.getItem("panier")) || [];

        panier.push(product);
        localStorage.setItem("panier", JSON.stringify(panier));

    })



    // Attribution de classes

    heading.setAttribute("class", "fw-bolder")
    image.setAttribute("src", product.imageUrl);
    image.setAttribute("alt", product.description);
    image.setAttribute("class", "img-thumbnail rounded mx-auto");
    card.setAttribute("class", "col");

    card.setAttribute("href", "produit.html?id=" + product._id);
    cardbody.setAttribute("class", "card-body");
    heading.setAttribute("class", "card-title");
    para.setAttribute("class", "card-text fw-bold fs-4 mt-3");
    label.setAttribute("for", "color-select");

    label.setAttribute("class", "mb-2 fw-bold");
    colorsList.setAttribute("id", "color-select");
    colorsList.setAttribute("class", "form-select w-25");
    lien.setAttribute("href", "panier.html");
    lien.setAttribute("class", "text-decoration-none")

    command.setAttribute("class", "btn btn-warning d-block mb-2 w-25");
    button.setAttribute("class", "btn btn-success mb-3 w-25");

    // Ciblage du noeud HTML

    let root = document.querySelector(".teddy");

    // Injection des elements HTML dans le DOM

    root.appendChild(card);

    card.appendChild(image);
    card.appendChild(cardbody);
    cardbody.appendChild(heading);
    cardbody.appendChild(description);
    cardbody.appendChild(label);
    cardbody.appendChild(colorsList);
    cardbody.appendChild(para);

    colorsList.innerHTML = structureOptions;
    cardbody.appendChild(button);
    cardbody.appendChild(lien);
    lien.appendChild(command);

}

// ---------------FIN DE LA FONCTION GLOBAL showProduct-------------







