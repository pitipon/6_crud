import Product from "../models/product";



// Create and Save a new product
export const create = (req, res) => {
  // Get Body from req
  const body_name = req.body.name
  const body_price = req.body.prices

  try {
    // create product
    const product = await new Product({
      name: body_name,
      price: body_price,
    }).save();

    res.json(product);
  } catch (err) {
    // error
    console.log(err);
    return res.status(400).send("Course create failed. Try again.");
  }
};



// Retrieve all products from the database.
export const findAll = (req, res) => {
  const all = await Product.find()
  res.json(all);
};



// Find a single product with an id
export const findOne = (req, res) => {

  // Find product by id
  const id = req.params.id

  try {
    // find product by id
    const product = await Product.findOne({ _id: id }).exec();
    res.json(product);
  } catch (err) {
    // error
    console.log(err);
    return res.status(400).send("Course create failed. Try again.");
  }
};



// Update a product by the id in the request
export const updateOne = (req, res) => {
  // Get id for update product
  const id = req.params.id

  try {
    const updated = await Product.findOneAndUpdate({ _id: id}, req.body, {
      new: true,
    }).exec();

    res.json(updated);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err.message);
  }
};




// Delete a product with the specified id in the request
export const deleteOne = (req, res) => {
  // Get id for delete
  const id = req.params.id

  try {

    const product = await Product.findByIdAndDelete(id);

    if (!product) response.status(404).send("No item found");
    response.status(200).send();
  } catch (err) {
    console.log(err);
    return res.status(400).send(err.message);
  }
};
