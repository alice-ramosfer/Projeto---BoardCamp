import { rentalsServices } from "../services/rentals.servicies.js";
import { formatDate } from "../utils/formatDate.js";
<<<<<<< HEAD
=======

>>>>>>> 63be9f1 (arrumando a função de deletar oa aluguel e procurar um cliente pelo id)

export async function getRentals(req,res) {
    const result = await rentalsServices.getRentals();
     const resultFormatted = result.map(rental => ({
        ...rental,
        rentDate: formatDate(rental.rentDate),
        returnDate: rental.returnDate ? formatDate(rental.returnDate) : null,
        customer: {        
            id: rental.customerId,
            name: rental.customer
        },
        game: {            
        customer: {        
            id: rental.customerId,
            name: rental.customer
        }
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