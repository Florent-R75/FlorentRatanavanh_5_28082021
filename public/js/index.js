// --------------------FETCH------------------------

// 1) Utiliser fetch pour récupérer les produits.
// 2 )Appeler la fonction showProduct pour l'affichage des elements
// 3)reporter des erreurs eventuelles dans la récupération fetch

fetch("http://localhost:3000/api/teddies")
  .then(function (response) {
    if (response.ok) {
      return response.json();
    }
  })

  .then(function (items) {
    for (let index = 0; index < items.length; index++) {
      showProduct(items[index]);
    }
  })

  .catch(function (err) {
    console.log("Fetch problem" + err.message);
  });

// ------------------FIN DU FETCH---------------------------

//--------CREATION DE LA FONCTION GLOBALE POUR AFFICHAGE------------ 

function showProduct(product) {

  // Initialisation de variables
  const col = document.createElement("div");
  const frame = document.createElement("div");
  const card = document.createElement("a");
  const image = document.createElement("img");
  const cardbody = document.createElement("div");
  const heading = document.createElement("h2");
  const para = document.createElement("p");
  const description = document.createElement("p");
  const stock = document.createElement("p");
  const colorsList = document.createElement("ul");
  const colors = document.createElement("li");

  // Attribution de contenus

  heading.textContent = product.name;
  para.textContent = "Prix: " + product.price / 100 + " €";
  description.textContent = product.description;
  stock.textContent = "En Stock";
  colors.textContent = "Couleurs disponibles: " + product.colors;

  // Attribution de classes

  image.setAttribute("src", product.imageUrl);
  image.setAttribute("alt", product.description);
  image.setAttribute("class", "card-img-top rounded img-index");
  card.setAttribute("class", "card text-black mt-3 mb-3");
  col.setAttribute("class", "col-12-xs col-xl-4 col-md-6");
  frame.setAttribute("class", "frame d-flex");
  card.setAttribute("href", "produit.html?id=" + product._id);
  cardbody.setAttribute("class", "card-body");
  heading.setAttribute("class", "card-title");
  para.setAttribute("class", "card-text fw-bold fs-4");
  stock.setAttribute("class", "btn btn-success");
  colorsList.setAttribute("class", "d-none");

  // Création du point d'injection du DOM

  let root = document.querySelector(".teddy");

  // Injection HTML dans le DOM
  root.appendChild(col);
  col.appendChild(card);
  card.appendChild(frame);
  frame.appendChild(image);
  card.appendChild(cardbody);
  cardbody.appendChild(heading);
  cardbody.appendChild(description);
  cardbody.appendChild(para);
  cardbody.appendChild(stock);
  cardbody.appendChild(colorsList);
  colorsList.appendChild(colors);

  // Style css

  card.style.textDecoration = "none";
  colorsList.style.listStyle = "none";
  
}
