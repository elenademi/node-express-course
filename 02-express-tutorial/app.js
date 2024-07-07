
const express = require('express')
const { products } = require("./data");
const app = express()
app.use(express.static('./public'))
app.get('/api/v1/test', (req, res) => {
    res.json({ message: "It worked!" });
  });
app.get('/api/v1/products', (req, res)=>{
    res.json({ products });
})
app.get('/api/v1/products/:productID', (req, res) => {
    const idToFind = parseInt(req.params.productID, 10);
    const product = products.find((p) => p.id === idToFind)
    if (product) {
        res.json(product);
      } else {
        res.status(404).json({ message: `Product not found` });
      }
    });
    app.get('/api/v1/query', (req, res)=>{
const{search, limit, maxPrice}=req.query

let sortedProducts = [...products]
if(search){
    sortedProducts=sortedProducts.filter((product)=>{
        return product.name.startsWith(search)
    })

    }
    if (maxPrice) {
        sortedProducts = sortedProducts.filter((product) =>
          product.price <= Number(maxPrice)
        );
      }
    if (limit){
        sortedProducts=sortedProducts.slice(0, Number(limit))
    }
    if(sortedProducts.length<1){
        return res.status(200).json({success: true, data: []})
    }
    res.status(200).json(sortedProducts)
    }
    )
app.all('*', (req, res) => {
    res.status(404).send('<p>This page does not exist.<p>')
  })
  app.listen(3000, () => {
    console.log('server is listening on port 3000....')})