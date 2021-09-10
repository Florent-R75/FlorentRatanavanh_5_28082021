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
  const stock = document.createElement("p");

  // Attribution de contenus

  heading.textContent = product.name;
  para.textContent = "Prix: " + product.price / 100 + " €";
  description.textContent = product.description;
  stock.textContent = "En Stock";
  colors.textContent = "Couleurs disponibles: " + product.colors;







  // Attribution de classes
;
  image.setAttribute("src", product.imageUrl);
  image.setAttribute("alt", product.description);
  image.setAttribute("class", "card-img-top");
  card.setAttribute("class", "col-12 col-sm-4 card text-white bg-primary");

  card.setAttribute("href", "produit.html?id=" + product._id);
  cardbody.setAttribute("class", "card-body");
  heading.setAttribute("class", "card-title");
  para.setAttribute("class", "card-text fw-bold fs-4");
  stock.setAttribute("class", "btn btn-success");

  // Attribution de noeuds NOEUD

  let root = document.querySelector(".teddy");

  root.appendChild(card);

  card.appendChild(image);
  card.appendChild(cardbody);
  cardbody.appendChild(heading);
  cardbody.appendChild(description);
  cardbody.appendChild(colorsList);
  colorsList.appendChild(colors);
  cardbody.appendChild(para);
  cardbody.appendChild(stock);


  // Style css

  // image.style.height = "300px";
  card.style.textDecoration = "none";
  colorsList.style.listStyle = "none";

}









