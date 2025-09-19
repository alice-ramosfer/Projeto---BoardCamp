import { rentalsServices } from "../services/rentals.servicies.js";

export function formatDate(date) {
  if (!date) return null; // caso seja null no banco
  const d = new Date(date);

  const ano = d.getFullYear();
  const mes = String(d.getMonth() + 1).padStart(2, "0"); // meses começam do 0
  const dia = String(d.getDate()).padStart(2, "0");

  return `${ano}-${mes}-${dia}`;
}

export async function getRentals(req,res) {
    const result = await rentalsServices.getRentals();
     const resultFormatted = result.map(rental => ({
        ...rental,
        rentDate: formatDate(rental.rentDate),
        returnDate: rental.returnDate ? formatDate(rental.returnDate) : null,
        customer: {        // sobrescreve ou cria o campo customer
            id: rental.customerId,
            name: rental.customer
        },
        game: {            // sobrescreve ou cria o campo game
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