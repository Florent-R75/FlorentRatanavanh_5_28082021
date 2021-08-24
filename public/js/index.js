// utiliser fetch pour récupérer les produits.
// reporter des erreurs eventuelles dans la récupération fetch

fetch("http://localhost:3000/api/teddies")
  .then(function (response) {
    if (response.ok) {
      return response.json();
    }
  })
  .then(function (products) {
    for (index = 0; index < products.length; index++) {
      showProduct(products[index]);
      console.log(products[index]);
    }
  })

  .catch(function (err) {
    console.log("Fetch problem" + err.message);
  });

//   creer un variable source noeud HTML

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

  // Attribution de contenus

  heading.textContent = product.name;
  para.textContent = product.price + "€";
  colors.textContent = product.colors;

  // Attribution de classes

  image.setAttribute("src", product.imageUrl);
  image.setAttribute("alt", product.description);
  card.setAttribute("class", "col-12 col-sm-4");

  // Attribution de noeuds NOD

  let root = document.querySelector(".teddy");
  // let colorsArray = [];
  root.appendChild(card);

  card.appendChild(image);
  card.appendChild(cardbody);
  cardbody.appendChild(heading);
  cardbody.appendChild(para);
  cardbody.appendChild(colorsList);
  colorsList.appendChild(colors);

  // Attribution Couleurs

  // for (index = 0; index < colorsArray.length; i++) {
  // colors = colorsArray[index];
  // }

  // style css

  image.style.height = "300px";
}
