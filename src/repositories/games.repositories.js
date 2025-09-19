import { getCustomersId } from "../controllers/customers.controllers.js";
import { db } from "../database/database.js";

async function getGames() {
    const result = await db.query(`SELECT * FROM games;`);
    return result.rows;
}

async function postGames({name,image,stockTotal,pricePerDay}) {
  
    const conflito = await db.query(`SELECT * FROM games WHERE games.name = $1`,[name]);
    if(conflito.rowCount !==0) throw {type: "conflict", message: "uma game com esse titulo ja existe"}
    await db.query(`INSERT INTO games (name,image,"stockTotal","pricePerDay") VALUES ($1,$2,$3,$4);`,[name,image,stockTotal,pricePerDay] )
}

async function getGameId(id) {
    const result = db.query(`SELECT * FROM games g WHERE g.id=$1`, [id]);
    return  result;
}
const gamesRepositories = {
    getGames,
    postGames,
    getGameId
}
export default gamesRepositories;