const Product = require("../models/Product");

const ProductController = {
  async create(req, res) {
    try {
      const product = await Product.create({ ...req.body });
      res.status(201).send(product);
    } catch (error) {
      console.log(error);
    }
  },
  async getAll(req, res) {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      console.log(error);
    }
  },
  async getByID(req, res) {
    try {
      const id = req.params._id;
      const product = await Product.findById(id);
      res.json(product);
    } catch (error) {
      console.log(error);
    }
  },

  async updateByName(req, res) {
    try {
      const id = req.params._id;
      const title = req.body.title;
      const updateTitleProduct = await Product.findByIdAndUpdate(
        id,
        {
          title,
        },
        { new: true }
      );
      res.json(updateTitleProduct);
    } catch (error) {
      console.log(error);
    }
  },
  async deleteProduct(req, res) {
    try {
      const id = req.params._id;
      const deletedProduct = await Product.findByIdAndDelete(id);
      if (!deletedProduct) {
        return res
          .status(404)
          .json({ message: "Product with that id not found" });
      }
      res.json({ message: "Product deleted successfully", deletedProduct });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = ProductController;
