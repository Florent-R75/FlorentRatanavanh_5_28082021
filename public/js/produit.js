// Recuperation de l'id de la barre de navigation

let id = new URLSearchParams(window.location.search).get("id");
console.log(id);

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
        console.table(item);
        console.log("ok");

    })

    .catch(function (err) {
        console.log("Fetch problem" + err.message);
    });


    // Fonction de création des éléments HTML

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
    const optionQuantite = product.colors;
    let structureOptions = "";
    const command = document.createElement('button');
    const lien = document.createElement('a');




    // Creation d'une boucle pour creer les options du produit

    for (let i = 0; i < optionQuantite.length; i++) {
        structureOptions = structureOptions +
            `
        <option value="${i + 1}">${optionQuantite[i]}</option>
        `;

    }

    // Attribution de contenus

    heading.textContent = product.name;
    para.textContent = "Prix: "+product.price /100 + "€";
    description.textContent = product.description;
    command.textContent = "Passer la commande "
    button.textContent = "Ajouter au panier";
    colors.textContent = product.colors;
    label.textContent = "Choisissez une couleur:";

    // Evenements sur le bouton et ajout au LOCAL STORAGE

    button.addEventListener("click", (event)=> {
        event.preventDefault();
        let panier = JSON.parse(localStorage.getItem("panier")) || [];

        panier.push(product);
        localStorage.setItem("panier", JSON.stringify(panier));

    })



    // Attribution de classes

    heading.setAttribute("class", "fw-bolder")
    image.setAttribute("src", product.imageUrl);
    image.setAttribute("alt", product.description);
    image.setAttribute("class", "card-img-top");
    card.setAttribute("class", "col-12 col-sm-4");
    
    card.setAttribute("href", "produit.html?id=" + product._id);
    cardbody.setAttribute("class", "card-body");
    heading.setAttribute("class", "card-title");
    para.setAttribute("class", "card-text fw-bold fs-4");
    label.setAttribute("for", "color-select");
    
    colorsList.setAttribute("id", "color-select");
    lien.setAttribute("href", "panier.html");

    command.setAttribute("class", "btn btn-warning");
    button.setAttribute("class", "btn btn-success");

    // Attribution de noeuds

    let root = document.querySelector(".teddy");
    
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




    // Styles CSS


    // image.style.height = "500px";

}




