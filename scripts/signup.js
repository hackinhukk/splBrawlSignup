"use strict";
const logger = require("../util/pinologger");
const { getBrawlId, getCurrentSignups } = require('../services/splinterlands');
const {currentSignups} = require("../services/fray");
const {getAccessToken, signUpAccounts} = require('../services/signup');

//getCurrentSignups('GUILD-BC185-BL56-BRAWL2');

const signUp = async() => {
    try {
        logger.info(`/scripts/signup start`);
        // we first need to get the id and status of tournament
        
        const {tournament_id, tournament_status} = await getBrawlId();
        logger.info(`typeof tournament_status: ${typeof tournament_status}, tournament_status: ${tournament_status}`);

        if (tournament_status === 0) {
            // this means we can sign up for tournament
            // we first need to check to see if we have a proper JWT token
            // but first lets login and just check this working
           const {access_token, officerName, officerKey} = await getAccessToken();

            const players = await getCurrentSignups({tournament_id, access_token, username: officerName});
            logger.info(`players: ${JSON.stringify(players)}`);
            if (players.length === 18) {
                logger.info(`all fray spots are full, no need to sign anyone up!`);
                return;
            }

            const { accountsMissingPeriod, accountsToRelist} = currentSignups(players);
            // TODO: add accounts here
         await signUpAccounts({tournament_id, officerKey, officerName});
         return;
            if (accountsCleared?.length === 15 && newBrawlers?.length === 0) {
                logger.info(`All frays are successfully assigned`);
                return;
            }
            
            // for newBrawlers, we need to kick them unless they're in an available fray already.
            // we kick ones in frays assigned, and then we can move them into available fray slots as we have room, rest are just kicked

            // for accountsCleared, we dont do anything
            // for accountsMissingPeriod, these are accounts that aren't signed up, but we need to check if they're on the signup list first b4 signing them up
            // for accountsToReassign, we need to drop them from the current frays, and then assign them to their correct frays





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