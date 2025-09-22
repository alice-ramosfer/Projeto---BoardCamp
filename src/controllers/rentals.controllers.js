import { rentalsServices } from "../services/rentals.servicies.js";
<<<<<<< HEAD
import { formatDate } from "../utils/fomateDate.js";
=======
import { formatDate } from "../utils/formatDate.js";

>>>>>>> 2a6b02f (arrumado a importacao da funcao formatDate do arquivo rental.controllers.js)


export async function getRentals(req,res) {
    const result = await rentalsServices.getRentals();
     const resultFormatted = result.map(rental => ({
        ...rental,
        rentDate: formatDate(rental.rentDate),
        returnDate: rental.returnDate ? formatDate(rental.returnDate) : null,
<<<<<<< HEAD
        customer: {        // sobrescreve ou cria o campo customer
            id: rental.customerId,
            name: rental.customer
        },
        game: {            // sobrescreve ou cria o campo game
=======
        customer: {        
            id: rental.customerId,
            name: rental.customer
        },
        game: {            
>>>>>>> 2a6b02f (arrumado a importacao da funcao formatDate do arquivo rental.controllers.js)
            id: rental.gameId,
            name: rental.game
        }
    }));
    return res.status(200).send(resultFormatted);
}

export async function postRental(req,res) {
    await rentalsServices.postRental(req.body);
    return res.sendStatus(201);
}

export async function finalizeRental(req,res) {
    await rentalsServices.finalizeRental(req.params);
    return res.sendStatus(200);
}

export async function deleteRental(req,res) {
    await rentalsServices.deleteRental(req.params);
    return res.sendStatus(200);
}