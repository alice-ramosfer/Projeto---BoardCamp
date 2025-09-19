import { db } from "../database/database.js";

async function getRentals() {
    const result = await db.query(`SELECT r.*, c.name AS customer, g.name AS game 
        FROM rentals r
	    JOIN customers c ON r."customerId" = c.id
	    JOIN games g ON r."gameId" = g.id
        ORDER BY r.id;
    `);
     return result.rows;
}

async function  veficateStockGame(id) {
    const result = await db.query(`SELECT * FROM rentals r WHERE r."gameId"=$1 AND r."returnDate"  IS NULL` ,[id]);
     return result;
}

async function postRental({customerId,gameId,rentDate,daysRented,returnDate,originalPrice,delayFee}) {
    // console.log(customerId,gameId,rentDate,daysRented,returnDate,originalPrice,delayFee)
    await db.query(`INSERT INTO rentals ("customerId","gameId","rentDate","daysRented","returnDate","originalPrice","delayFee") 
	VALUES ($1,$2,$3,$4,$5,$6,$7)`,[customerId,gameId,rentDate,daysRented,returnDate,originalPrice,delayFee])
}

async function getRentalId(id){
    const result = await db.query(`SELECT * FROM rentals r WHERE r.id=$1`,[id])
    return result;
    
}

async function finalizeRental(returnDate,delayFee,id){
    await db.query(`UPDATE rentals r SET "returnDate"=$1, "delayFee"=$2 WHERE r.id =$3`,[returnDate,delayFee,id] )
}
async function deleteRental(id) {
    await db.query(`DELETE FROM rentals r WHERE r.id=$1`,[id])
}

export  const rentalsRepositories = {
    getRentals,
    getRentalId,
    veficateStockGame,
    postRental,
    finalizeRental,
    deleteRental

}