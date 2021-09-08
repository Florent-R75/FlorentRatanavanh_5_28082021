// utiliser fetch pour récupérer les produits.
// reporter des erreurs eventuelles dans la récupération fetch





fetch("http://localhost:3000/api/teddies")
  .then(function (response) {
    if (response.ok) {
      return response.json();
    }
  })
  .then(function (items) {
    for ( index = 0; index < items.length; index++) {
      showProduct(items[index]);
      console.table(items[index]);

    }
  })





  .catch(function (err) {
    console.log("Fetch problem" + err.message);
  })





// Affiche un produit a l'interieur du <root> element>

function showProduct(product) {
  
  // Initialisation de variables

  const card = document.createElement("a");
  const image = document.createElement("img");
  const cardbody = document.createElement("div");

  const heading = document.createElement("h2");
  const para = document.createElement("p");
  const description = document.createElement("p");
  const colorsList = document.createElement("ul");
  const colors = document.createElement("li");
  const button = document.createElement("button");

  // Attribution de contenus

  heading.textContent = "Nom : " + product.name;
  para.textContent = "Prix: " + product.price / 100 + " €";
  description.textContent = "Description: " + product.description;
  button.textContent = "Ajouter au Panier";
  colors.textContent = "Couleurs disponibles: " + product.colors;







  // Attribution de classes

  image.setAttribute("src", product.imageUrl);
  image.setAttribute("alt", product.description);
  card.setAttribute("class", "col-12 col-sm-4");

  card.setAttribute("href", "produit.html?id=" + product._id);


  // Attribution de noeuds NOEUD

  let root = document.querySelector(".teddy");

  root.appendChild(card);

  card.appendChild(image);
  card.appendChild(cardbody);
  cardbody.appendChild(heading);
  cardbody.appendChild(description);
  cardbody.appendChild(para);
  cardbody.appendChild(colorsList);
  colorsList.appendChild(colors);
  cardbody.appendChild(button);


  // Style css

  image.style.height = "300px";
  card.style.textDecoration = "none";
  colorsList.style.listStyle = "none";

}

// Attribution d'evenement


function addBasket() {
  let button = querySelector("button");
  let monStockage = localStorage;
  button.addEventListener(click, monStockage.setItem('id'))
  console.log("monStockage");

}







