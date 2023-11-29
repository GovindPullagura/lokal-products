const getData = async () => {
  let urlData = await fetch(`https://dummyjson.com/products`);

  let res = await urlData.json();
  let prodData = res.products;
  console.log(prodData);
  displayData(prodData);
};

getData();

const displayData = (data) => {
  let container = document.querySelector("#container");

  data.forEach((el) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.onclick = () => {
      localStorage.setItem("itemDetails", JSON.stringify(el));
      window.location.href = "../Pages/detailPage.html";
    };

    let imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "imgDiv");
    imgDiv.style.backgroundImage = `url(${el.thumbnail})`;
    imgDiv.style.backgroundRepeat = "no-repeat";
    imgDiv.style.backgroundSize = "100% 100%";

    let prodImg = document.createElement("img");
    prodImg.src = el.images[0];

    let discount = document.createElement("div");
    discount.innerText = el.discountPercentage + "%";
    discount.setAttribute("class", "discDiv");

    imgDiv.append(discount);

    let detailsDiv = document.createElement("div");
    detailsDiv.setAttribute("class", "detailsDiv");

    let title = document.createElement("p");
    title.innerText = el.title;

    let brand = document.createElement("p");
    brand.innerText = el.brand;

    let price = document.createElement("p");
    price.innerText = "MRP Rs. " + el.price;
    price.style.fontWeight = "bold";

    let rating = document.createElement("div");
    rating.innerText = el.rating;
    rating.style.backgroundColor = "rgb(96, 138, 236)";
    rating.style.width = "40px";
    rating.style.textAlign = "center";
    rating.style.color = "white";
    rating.style.fontWeight = "bold";
    rating.style.padding = "0.2%";
    rating.style.borderRadius = "10px";

    detailsDiv.append(title, brand, price, rating);

    card.append(imgDiv, detailsDiv);
    container.append(card);
  });
};
