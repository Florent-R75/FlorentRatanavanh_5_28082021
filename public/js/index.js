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
    for (let product of items) {
      showProduct(product);
    }
  })

  .catch(function (err) {
    console.log("Fetch problem" + err.message);
    let sorry = `
    <div class="container main__bg d-flex flex-column d-lg-flex justify-content-center" style="min-height: 900px">
      <div class="row text-center" id="teddy">
        <h1>Notre site est en maintenance,<br>Désolé pour la gêne occasionnée !</h1>
      </div>
    </div>`;
    let maintenance = document.querySelector("#maintenance");
    maintenance.insertAdjacentHTML("afterend", sorry);
    console.log(sorry);


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
  const link = document.createElement("a");
  const stock = document.createElement("p");
  const colorsList = document.createElement("select");
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
  para.textContent = "Prix: " + product.price / 100 + " €";
  description.textContent = product.description;
  stock.textContent = "En Stock";

  // Attribution de classes

  image.setAttribute("src", product.imageUrl);
  image.setAttribute("alt", product.description);
  image.setAttribute("class", "card-img-top rounded img-index");
  card.setAttribute("class", "card text-black mt-3 mb-3");
  col.setAttribute("class", "col-12-xs col-xl-4 col-md-6");
  frame.setAttribute("class", "frame d-flex");
  card.setAttribute("href", "produit.html?id=" + product._id);
  link.setAttribute("href", "produit.html?id=" + product._id);
  cardbody.setAttribute("class", "card-body");
  heading.setAttribute("class", "card-title");
  para.setAttribute("class", "card-text fw-bold fs-4");
  stock.setAttribute("class", "btn btn-success mt-3");
  colorsList.setAttribute("id", "color-select");
  colorsList.setAttribute("class", "form-select w-50");

  // Création du point d'injection du DOM

  var root = document.querySelector(".teddy");

  // Injection HTML dans le DOM
  root.appendChild(col);
  col.appendChild(card);
  card.appendChild(frame);
  frame.appendChild(image);
  col.appendChild(cardbody);
  cardbody.appendChild(heading);
  cardbody.appendChild(description);
  cardbody.appendChild(para);
  colorsList.innerHTML = structureOptions;
  cardbody.appendChild(colorsList);
  cardbody.appendChild(link);
  link.appendChild(stock);
  

  
}
