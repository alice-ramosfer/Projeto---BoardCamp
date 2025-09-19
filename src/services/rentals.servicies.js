import { rentalsRepositories } from "../repositories/rentals.repositories.js";
import customersServices from "./customers.services.js";
import gamesServicies from "./games.servicies.js";


async function getRentals() {
    const result = await rentalsRepositories.getRentals();
    return result;
}

async function postRental({customerId,gameId,daysRented}) {
    const game = await gamesServicies.getGamesId(gameId);
    await customersServices.getCustomersId(customerId );
    const resultRental = await rentalsRepositories.veficateStockGame(gameId);
    if (resultRental.rowCount >= game[0].stockTotal) throw {type:"Unprocessable_Entity", message:"jogo não diponivel em estoque"};
    
    const rental = {
        customerId,
        gameId,
        rentDate: new Date().toISOString().split("T")[0],
        daysRented,             
        returnDate: null,          
        originalPrice: game[0].pricePerDay * daysRented,       
        delayFee: null             
    }
    await rentalsRepositories.postRental(rental);
}

async function finalizeRental({id}) {
    const resultRental = await rentalsRepositories.getRentalId(id);
    if(resultRental.rowCount === 0) throw {type:"NotFound", message:"aluguel não encontrado"};
    if(resultRental.rows[0].returnDate !== null) throw {type:"Unprocessable_Entity",message:"aluguel ja finalizado"};

    const returnDate = new Date().toISOString().split("T")[0];
    const rentDate = new Date(resultRental.rows[0].rentDate);
    const daysRented = resultRental.rows[0].daysRented;
    const dueDate = new Date(rentDate);
    dueDate.setDate(dueDate.getDate() + daysRented);

    let delayFee = 0;
    if (returnDate > dueDate) {
        const atrasoDias = Math.floor((returnDate - dueDate) / (1000 * 60 * 60 * 24));
        delayFee = atrasoDias * (resultRental.rows[0].originalPrice / daysRented);
    }

    await rentalsRepositories.finalizeRental(returnDate,delayFee,id);
}

async function deleteRental({id}) {
    const resultRental = await rentalsRepositories.getRentalId(id)
    if(resultRental.rowCount === 0) throw {type:"NotFound", message:"aluguel não encontrado"};
    if(resultRental.rows[0].returnDate === null) throw {type:"Bad_Request", message:"aluguel não finalizado"}
}

export const rentalsServices = {
    getRentals,
    postRental,
    finalizeRental,
    deleteRental
}