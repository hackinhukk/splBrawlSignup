"use strict";
const logger = require("../util/pinologger");
const { getBrawlId, getCurrentSignups } = require('../services/splinterlands');
const {currentSignups} = require("../services/fray");

//getCurrentSignups('GUILD-BC185-BL56-BRAWL2');

const signUp = async() => {
    try {
        logger.info(`/scripts/signup start`);
        // we first need to get the id and status of tournament

        const {tournament_id, tournament_status} = await getBrawlId();
        logger.info(`typeof tournament_status: ${typeof tournament_status}`);
        if (tournament_status !== 0) {
            // this means we can sign up for tournament
            const players = await getCurrentSignups(tournament_id);
            if (players.length === 18) {
                logger.info(`all fray spots are full, no need to sign anyone up!`);
                return;
            }

            const res = currentSignups(players);
        } else if (tournament_status === 1) {
            logger.info('brawl is in progress, too late to sign up!');
            return;
        } else if (tournament_status === 2) {
            logger.info('brawl has concluded, you will be able to sign up soon!"');
            return;
        }else {
            // tournament is either in progress or has concluded
            logger.error("something weird is going on with brawl");
            throw new Error(`tournament_status: ${tournament_status}`)
        }


        return;
    } catch (err) {
        logger.error(`/scripts/signup error: ${err.message}`);
        throw err;
    }
}
signUp();