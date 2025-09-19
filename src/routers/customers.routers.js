import Router from "express";
import { getCustomers, getCustomersId, postCustomers } from "../controllers/customers.controllers.js";
import { customersSchema } from "../schemas/customers.schemas.js";
import { validateSchema } from "../middlewares/schemas.middlewares.js";


const customersRouter = Router();

customersRouter.get("/customers",getCustomers);
customersRouter.get("/customers/:id",getCustomersId);
customersRouter.post("/customers", validateSchema(customersSchema), postCustomers);

export default customersRouter;