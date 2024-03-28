const router = require("express").Router()

const CustomerAdmin = require("../controllers/customerAdminController")

router.get("/", CustomerAdmin.customerPage);
router.get("/create", CustomerAdmin.createCustomerPage);
router.post("/admin/create", CustomerAdmin.createCustomer);

router.get("/:id/update", CustomerAdmin.updateCustomerPage);
router.post("/:id/update", CustomerAdmin.updateCustomer);
router.post("/:id/delete", CustomerAdmin.deleteCustomer);


module.exports = router;
