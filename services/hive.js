'use strict';
const { Client, PrivateKey } = require('@hiveio/dhive');
const logger = require("../util/pinologger");

const client = new Client([
    "https://api.hive.blog",
    "https://api.hivekings.com",
    "https://anyx.io",
    "https://api.openhive.network",
  ]);


const fillBrawlSlots = async ({tournament_id}) => {
    try {
        const username = 'username';
        const privKey = PrivateKey.from(rawKey);
    
        const res = await client.broadcast.json (
            {
                required_posting_auths: ["nickmercs"], //whomever the officer assigning the frays is
                required_auths: [],
                id: "sm_assign_fray",
                json: JSON.stringify({
                    guild_id,
                    tournament_id,
                    index,
                    player,
                }),
            },
            privKey
        );
    
        logger.info(`/services/hive/enterBrawl done for username: ${username}`);
        return res;
    } catch (err) {
        logger.error(`/services/hive/enterBrawl error: ${err.message}`);
        throw err;
    }
    
}