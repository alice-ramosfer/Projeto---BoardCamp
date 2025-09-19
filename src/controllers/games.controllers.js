import gamesServicies from "../services/games.servicies.js";

export async function getGames(req,res){
    const result = await gamesServicies.getGames();
    res.send(result);
}

export async function postGames(req,res) {
    await gamesServicies.postGames(req.body);
    res.sendSatatus(201);
}