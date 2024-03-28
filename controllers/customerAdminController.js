const { Customer } = require("../models");

const customerPage = async (req, res) => {
  try {
    const customers = await Customer.findAll();

    res.render("customers/index.ejs", {
      customers,
    });
  } catch (err) {
    res.render("error.ejs", {
      message: err.message,
    });
  }
};

const createCustomerPage = async (req, res) => {
  try {
    res.render("customers/create.ejs"); // Memperbaiki halaman yang dirender
  } catch (err) {
    res.render("error.ejs", {
      message: err.message,
    });
  }
};


const createCustomer = async (req, res) => {
    try {
        await Customer.create(req.body)
        res.redirect('/customers');
    } catch (err) {
        console.log(err.message);
    }
}

const updateCustomerPage = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);

    res.render("customers/update.ejs", {
      customer,
    });
  } catch (err) {
    res.render("error.ejs", {
      message: err.message,
    });
  }
};

const updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    await Customer.update(req.body, {
      where: { id },
    });
    res.redirect('/customers');
  } catch (err) {
    console.log(err.message);
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    await Customer.destroy({
      where: { id },
    });
    res.redirect('/customers');
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  customerPage,
  createCustomerPage,
  createCustomer,
  updateCustomerPage,
  updateCustomer,
  deleteCustomer,
};