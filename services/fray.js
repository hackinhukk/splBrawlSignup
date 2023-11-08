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
           // const {player, fray_index} = account;
          //  logger.info(`player: ${player}, fray_index: ${fray_index}`);
            const {player, index} = account;
            playersAssigned[player] = index;
            fraysAssigned[index] = true;
        }
        logger.info(`fraysAssinged: ${JSON.stringify(fraysAssigned)}`);
        logger.info(`playersAssigned: ${JSON.stringify(playersAssigned)}`);

        const {accountsCleared, accountsMissingPeriod, accountsToRelist} = accountsToReassign({playersAssigned, fraysAssigned});
        const newBrawlers = findNewBrawlers({playersAssigned});
        return {accountsCleared, accountsMissingPeriod, accountsToRelist, newBrawlers};
    } catch (err) {
        logger.error(`/services/currentSignups error: ${err.message}`);
        throw err;
    }
}

const accountsToReassign = ({playersAssigned, fraysAssigned}) => {
    try {
        logger.info(`/services/accountsToReassign`);
        const accountsCleared = [];
        const accountsToRelist = {};
        const accountsMissingPeriod = {};
        const catchAll = [];
        for (const player in accountsEstablishedFrays) {
            if (!playersAssigned[player] && playersAssigned[player] !== 0) {
                accountsMissingPeriod[player] = accountsEstablishedFrays[player];
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
                accountsToRelist[player] = playersAssigned[player];
                continue;
            } 
            catchAll.push({player, fray: accountsEstablishedFrays[player]});
        }
        logger.info(`accountsCleared: ${JSON.stringify(accountsCleared)} accountsCleared.length: ${accountsCleared.length}`);
        logger.info(`accountsMissingPeriod :${JSON.stringify(accountsMissingPeriod)}, accountsMissingPeriod.length: ${Object.keys(accountsMissingPeriod).length}`)
        logger.info(`accountsToRelist: ${JSON.stringify(accountsToRelist)}`);
        logger.info(`/services/accountsToReassign good: ${catchAll.length === 0}`);

        return { accountsMissingPeriod, accountsToRelist};
    } catch (err) {
        logger.error(`/services/accountsToReassign error: ${err.message}`);
        throw err;
    }
}

const findNewBrawlers = ({playersAssigned}) => {
    try {
        logger.info(`/services/findNewBrawlers start`);
        const newBrawlers = [];
        
        for (const player in playersAssigned) {
            if (!accountsEstablishedFrays[player] && accountsEstablishedFrays !== 0) {
                newBrawlers.push(player);
            }
        }

        logger.info(`/services/findNewBrawlers ${newBrawlers?.length} new brawlers`);
        return newBrawlers;
    } catch (err) {
        logger.error(`/services/findNewBrawlers erorr: ${err.message}`);
        throw err;
    }
}

module.exports = {currentSignups};