'use strict';

const {axiosInstance} = require("../util/requests/axiosGetInstance");
const logger = require("../util/pinologger");
const ecc = require("eosjs-ecc");
const { _GUILD_ID } = require('../util/constants');

const getBrawlId = async() => {
    try {
        logger.info('/services/getBrawlId start');

        // const url = "https://api2.splinterlands.com/guilds/find?id=649a16fe3b817780c4763175545ab8717d942fcc";
        const url = `https://api2.splinterlands.com/guilds/find?id=${_GUILD_ID}`;
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

const getCurrentSignups = async ({tournament_id, access_token, username}) => {
    try {
        logger.info(`/services/getCurrentSignups start`);
// https://api.splinterlands.com/tournaments/find_brawl?id=GUILD-BC185-BL56-BRAWL2&guild_id=649a16fe3b817780c4763175545ab8717d942fcc
        // const url = `https://api.splinterlands.com/tournaments/find_brawl?id=${brawlId}&guild_id=649a16fe3b817780c4763175545ab8717d942fcc`;
        // https://api.splinterlands.com/tournaments/find_brawl?id=GUILD-BC186-BL56-BRAWL6&guild_id=649a16fe3b817780c4763175545ab8717d942fcc&token=QQH0NOS834&username=nickmercs
        const url = `https://api.splinterlands.com/tournaments/find_brawl?id=${tournament_id}&guild_id=${_GUILD_ID}&token=${access_token}&username=${username}`;
        const res = await axiosInstance(url);
;
        logger.info(`res.data: ${JSON.stringify(res.data)}`);
       // logger.info(`res.data.players.count: ${res.data?.players?.length}, url: ${url}`);
        // TODO: add in check to see max number of players in brawl
        const { players } = res.data;

        return players;
        exit();
    } catch (err) {
        logger.error(`/services/getCurrentSignups error: ${err.message}`);
        throw err;
    }
}

const userLogin = async ({username, key}) => {
    try {
        logger.info(`/services/splinterlands/userLogin start`);
        if (!ecc.isValidPrivate(key)) {
            throw new Error('key is not a private key');
        }
        const pub = ecc.privateToPublic(key, "STM");
        logger.info(`public key is: ${JSON.stringify(pub)}`);
        const url = `https://api2.splinterlands.com/players/login`;
        const ts = new Date().getTime();
        const sig = ecc.sign(`${username}${ts}`, key);
        const res = await axiosInstance.get(url, {
            params: {
                name: username,
                ts,
                sig
            },
        });
        
        logger.debug(`res.data: ${JSON.stringify(res.data)}`);
        logger.debug(`res.data.token: ${res.data.token}`);

        return res.data.token;
    } catch (err) {
        logger.error(`/services/splinterlands/userLogin error: ${err.message}`);
        throw err;
    }
}

module.exports = {
    getBrawlId,
    getCurrentSignups,
    userLogin
};