

// Create and Save a new product
export const create = (req, res) => {
  // Get Body from req
  const body_name = req.body.name
  const body_price = req.body.prices

  res.json({
    name: body_name,
    price: body_price,
    _id: '3434234233434'
  });
};

// Retrieve all products from the database.
export const findAll = (req, res) => {
  res.json([{
    name: 'milk',
    price: 20,
    _id: '3434234233434'
  },{
    name: 'coke',
    price: 25,
    _id: '7746462232232'
  }]);
};

// Find a single product with an id
export const findOne = (req, res) => {

  // Find product by id
  const id = req.params.id

  res.json({
    name: 'milk',
    price: 20,
    _id: id
  });
};

// Update a product by the id in the request
export const updateOne = (req, res) => {
  // Get id for update product
  const id = req.params.id

  // Get body
  const body_name = req.params.name
  const body_price = req.params.price

  res.json({
    name: body_name,
    price: body_price,
    _id: id
  });
};

// Delete a product with the specified id in the request
export const deleteOne = (req, res) => {
  // Get id for delete
  const id = req.params.id

  res.json({
    status: 'deleted',
    _id: id
  });
};
