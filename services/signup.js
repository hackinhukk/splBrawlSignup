'use strict';

const helperService = require('../util/helpers');
const logger = require("../util/pinologger");
const { userLogin } = require('./splinterlands');
const { fillBrawlSlot } = require('./hive');
const { sleep } = require('../util/axios_retry/general');

const getAccessToken = async() => {
    try {
        logger.info(`/services/signup/getAccessToken start`);
        // we need to login, so need to call everything for that

        const {officerName, officerKey} = helperService.getPrivKey();
        const access_token = await userLogin({username: officerName, key: officerKey});

        logger.info(`access_token: ${access_token}`);
        logger.info(`/services/signup/getAccessToken done`);
        return {access_token, officerName, officerKey};
    } catch (err) {
        logger.error(`/services/signup/getAccessToken error: ${err.message}`);
        throw err;
    }
}


const signUpAccounts = async ({accounts, tournament_id, officerKey, officerName}) => {
    try {
        logger.info(`/services/signup/signupAccounts start`);
         for (const [username, index] of Object.entries(accounts)) {
            await fillBrawlSlot({tournament_id, officerName, officerKey, player: username, index});
            await sleep(5000);
         }
      
       // const fillBrawlSlot = async ({tournament_id, officerName, officerKey, player, index}) => {
       
        logger.info(`/services/signup/signupAccounts start done!`);
        return;
    } catch (err) {
        logger.error(`/services/signup/signupAccounts error: ${err.message}`);
        throw err;
    }
}

// this is for accountsToRelist, should run first but leaving blank for now

const dropFromFrays = async({accounts, tournament_id, officerKey, officerName}) => {
    try {
        logger.info(`/services/signup/dropFromFrays start`);

        
    } catch (err) {
        logger.error(`/services/signup/dropFromFrays error: ${err.message}`);
        throw err;
    }
}

module.exports = {
    getAccessToken,
    signUpAccounts
}