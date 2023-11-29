const prodData = JSON.parse(localStorage.getItem("itemDetails"));
console.log(prodData);

const displayData = (data) => {
  const container = document.querySelector("#container");

  let prodImg = document.createElement("img");
  prodImg.src = data.thumbnail;

  let title = document.createElement("h1");
  title.innerText = data.title;

  let brand = document.createElement("h3");
  brand.innerText = data.brand;

  let priceDiv = document.createElement("div");
  priceDiv.setAttribute("id", "priceDiv");

  let price = document.createElement("p");
  price.innerText = "MRP Rs. " + data.price;

  let discDiv = document.createElement("div");
  discDiv.style.backgroundColor = "rgb(107,197,62)";
  discDiv.style.width = "55px";
  discDiv.style.padding = "0.2%";
  discDiv.style.borderRadius = "5px";
  discDiv.style.textAlign = "center";

  let discount = document.createElement("p");
  discount.innerText = data.discountPercentage + "%";
  discount.style.color = "white";
  discount.style.fontSize = "15px";
  discount.style.fontWeight = "bold";

  discDiv.append(discount);
  priceDiv.append(price, discDiv);

  let rating = document.createElement("div");
  rating.innerText = data.rating;
  rating.setAttribute("id", "ratingDiv");

  let heading = document.createElement("h2");
  heading.innerText = "Description";

  let line = document.createElement("hr");

  let des = document.createElement("h2");
  des.innerText = data.description;

  let category = document.createElement("h3");
  category.innerText = "Category: " + data.category;

  let stock = document.createElement("h4");
  stock.innerText = "Stock: " + data.stock;

  container.append(
    prodImg,
    title,
    brand,
    priceDiv,
    rating,
    line,
    heading,
    des,
    category,
    stock
  );
};

displayData(prodData);
