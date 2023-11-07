'use strict';
const { Client, PrivateKey } = require('@hiveio/dhive');
const logger = require("../util/pinologger");
const { getPrivKey } = require("../util/helpers");
const { _GUILD_ID } = require('../util/constants');

const client = new Client([
    "https://api.hive.blog",
    "https://api.hivekings.com",
    "https://anyx.io",
    "https://api.openhive.network",
  ]);


const fillBrawlSlot = async ({tournament_id, officerName, officerKey, player, index}) => {
    try {
       // const username = 'username';
        const privKey = PrivateKey.from(officerKey);
    
        const res = await client.broadcast.json (
            {
                required_posting_auths: [officerName], //whomever the officer assigning the frays is
                required_auths: [],
                id: "sm_assign_fray",
                json: JSON.stringify({
                    guild_id: _GUILD_ID,
                    tournament_id,
                    index,
                    player,
                }),
            },
            privKey
        );
    
        logger.info(`/services/hive/enterBrawl done for player: ${player}`);
        return res;
    } catch (err) {
        logger.error(`/services/hive/enterBrawl error: ${err.message}`);
        throw err;
    }
    
}

module.exports = {
    fillBrawlSlot
};