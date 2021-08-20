// utiliser fetch pour récupérer les produits.
// reporter des erreurs eventuelles dans la récupération fetch

fetch("http://localhost:3000/api/teddies")
  .then(function (response) {
    if (response.ok) {
      return response.json();
    }
  })
  .then(function (products) {
    console.log(products);
    for (index = 0; index < products.length; index++) {
      showProduct(products[index]);
      console.log(products[index]);
    }
  })
  .catch(function (err) {
    console.log("Fetch problem" + err.message);
  });

//   creer un variable source noeud HTML

let root = document.querySelector("col-12 col-sm-4");

// Affiche un produit a l'interieur du <root> element>
function showProduct(product) {
  console.log(product.imageUrl);
  const section = document.createElement("section");
  const heading = document.createElement("h2");
  const para = document.createElement("p");
  const image = document.createElement("img");

  section.setAttribute("class", product.type);

  /* main.appenChild(section);
  section.appenChild(heading);
  section.appenChild(para);
  section.appenChild(image);*/
}
