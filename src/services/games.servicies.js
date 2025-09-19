import gamesRepositories from "../repositories/games.repositories.js";

async function getGames(){
    return await gamesRepositories.getGames();
}

async function postGames(games) {
    await gamesRepositories.postGames(games);
}

async function getGamesId(id) {
    const result = await gamesRepositories.getGameId(id);
    if (result.rowCount === 0) throw {type:"NotFound", message:"game com esse id não existe"};
    return result.rows;
}

const gamesServicies ={
    getGames, 
    postGames, 
    getGamesId
};

export default gamesServicies;