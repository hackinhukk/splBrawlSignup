'use strict';
const logger = require("../util/pinologger");
const {accountsEstablishedFrays, accountsToSignup} = require('../util/frayInfo');


const currentSignups = (players) => {
    try {
        logger.info(`/services/currentSignups start`);
        const playersAssigned = {};
        const fraysAssigned = {};
        for (const account of players) {
           // logger.info(`account: ${account}`);
            const {player, fray_index} = account;
            logger.info(`player: ${player}, fray_index: ${fray_index}`);
            playersAssigned[player] = fray_index;
            fraysAssigned[fray_index] = true;
        }
        logger.info(`fraysAssinged: ${JSON.stringify(fraysAssigned)}`);
        logger.info(`playersAssigned: ${JSON.stringify(playersAssigned)}`);

        accountsToReassign({playersAssigned, fraysAssigned});
        return;
    } catch (err) {
        logger.error(`/services/currentSignups error: ${err.message}`);
        throw err;
    }
}

const accountsToReassign = ({playersAssigned, fraysAssigned}) => {
    try {
        logger.info(`/services/accountsToReassign`);
        const accountsCleared = [];
        const accountsToReassign = {};
        const accountsToBoot = {};
        const accountsMissingPeriod = [];
     //   for (const player in playersAssigned) {
        for (const player in accountsEstablishedFrays) {
            logger.info(`player: ${player}, playersAssigned[player] : ${playersAssigned[player]}`);
            if (!playersAssigned[player] && playersAssigned[player] !== 0) {
                accountsMissingPeriod.push(player);
                continue;
            }
            // player hasn't been assigned
            if (playersAssigned[player] === accountsEstablishedFrays[player]) {
                // this account is already signed up correctly
                accountsCleared.push(player);
                continue;
            }
            // we could still have the player existing, but hasn't been assigned to correct fray
            if (playersAssigned[player] || playersAssigned[player] === 0) {
                accountsToReassign[player] = playersAssigned[player];
            } 
        }
        logger.info(`accountsCleared: ${JSON.stringify(accountsCleared)} accountsCleared.length: ${accountsCleared.length}`);
        logger.info(`accountsMissingPeriod :${JSON.stringify(accountsMissingPeriod)}, accountsMissingPeriod.length: ${accountsMissingPeriod.length}`)
        logger.info(`accountsToReassign: ${JSON.stringify(accountsToReassign)}`);
        logger.info(`/services/accountsToReassign done`);

        return;
    } catch (err) {
        logger.error(`/services/accountsToReassign error: ${err.message}`);
        throw err;
    }
}

// TNT NOTE: we also need to loop over the playersAssigned and check to see if they're even on the list, if they aren't they need to be moved imo
module.exports = {currentSignups};