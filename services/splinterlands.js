const {axiosInstance} = require("../util/requests/axiosGetInstance");
const logger = require("../util/pinologger");


const getBrawlId = async() => {
    try {
        logger.info('/services/getBrawlId start');

        const url = "https://api2.splinterlands.com/guilds/find?id=649a16fe3b817780c4763175545ab8717d942fcc";

        const res = await axiosInstance(url);
        //logger.info(`the brawl data is: ${JSON.stringify(res.data.tournament_id)}`);
        const {tournament_id, tournament_start_date, tournament_status} = res.data;
        // arguably dont need the start_date, tournament_status is 0 before starting, 1 when in progress, 2 when over
        // so we just need the status to know whether we can sign up imo
       // logger.info(`tournament_id: ${tournament_id}, tournament_start_date: ${tournament_start_date}, tournament_status: ${tournament_status}`);
        return {tournament_id, tournament_status};
    } catch (err) {
        logger.error(`/services/getBrawlId error: ${err.message}`);
        throw err;
    }
}

const getCurrentSignups = async (brawlId) => {
    try {
        logger.info(`/services/getCurrentSignups start`);
// https://api.splinterlands.com/tournaments/find_brawl?id=GUILD-BC185-BL56-BRAWL2&guild_id=649a16fe3b817780c4763175545ab8717d942fcc
        const url = `https://api.splinterlands.com/tournaments/find_brawl?id=${brawlId}&guild_id=649a16fe3b817780c4763175545ab8717d942fcc`;
        const res = await axiosInstance(url);
;
        logger.info(`res.data.players.count: ${res.data.players.length}`);
        // TODO: add in check to see max number of players in brawl
        const { players } = res.data;

        return players;
        exit();
    } catch (err) {
        logger.error(`/services/getCurrentSignups error: ${err.message}`);
        throw err;
    }
}

module.exports = {
    getBrawlId,
    getCurrentSignups
};