import Router from "express";
import { deleteRental, finalizeRental, getRentals, postRental } from "../controllers/rentals.controllers.js";
import { rentalsSchema } from "../schemas/rentals.schemas.js";
import { validateSchema } from "../middlewares/schemas.middlewares.js";




const rentalsRouter = Router();

rentalsRouter.get("/rentals", getRentals);
rentalsRouter.post("/rentals", validateSchema(rentalsSchema), postRental);
rentalsRouter.post("/rentals/:id/return", finalizeRental);
rentalsRouter.delete("/rentals/:id/", deleteRental);
export default rentalsRouter;