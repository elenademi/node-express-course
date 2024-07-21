const express = require("express");
const { products, people } = require("./data");
const app = express();
const peopleRouter = require("./routes/people");
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};
app.use(express.static("./public"));
app.use(logger);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("/api/v1/test", (req, res) => {
  res.json({ message: "It worked!" });
});
app.get("/api/v1/products", (req, res) => {
  res.json({ products });
});
//app.get("/api/v1/people", (req, res) => {
  //console.log("People data:", people);
  //res.json({ people });
//});
app.get("/api/v1/products/:productID", (req, res) => {
  const idToFind = parseInt(req.params.productID, 10);
  const product = products.find((p) => p.id === idToFind);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: `Product not found` });
  }
});
app.get("/api/v1/query", (req, res) => {
  const { search, limit, maxPrice } = req.query;

  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (maxPrice) {
    sortedProducts = sortedProducts.filter(
      (product) => product.price <= Number(maxPrice)
    );
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProducts);
});
//app.post("/api/v1/people", (req, res) => {
 // const { name } = req.body;
 // if (!name) {
  //  res.status(400).json({ success: false, message: "Please provide a name" });
  //}
  //res.status(201).json({ success: true, person: name });
  //people.push({ id: people.length + 1, name: req.body.name });
  //res.status(201).json({ success: true, name: req.body.name });
//});
app.use("/api/v1/people", peopleRouter);
app.all("*", (req, res) => {
  res.status(404).send("<p>This page does not exist.<p>");
});
app.listen(3000, () => {
  console.log("server is listening on port 3000....");
});
