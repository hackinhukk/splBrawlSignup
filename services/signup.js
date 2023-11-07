'use strict';

const helperService = require('../util/helpers');
const logger = require("../util/pinologger");
const { userLogin } = require('./splinterlands');

const getAccessToken = async() => {
    try {
        logger.info(`/services/signup/getAccessToken start`);
        // we need to login, so need to call everything for that

        const {officerName, officerKey} = helperService.getPrivKey();
        const access_token = await userLogin({username: officerName, key: officerKey});
        
        logger.info(`access_token: ${access_token}`);
        logger.info(`/services/signup/getAccessToken done`);
        return {access_token, username: officerName};
    } catch (err) {
        logger.error(`/services/signup/getAccessToken error: ${err.message}`);
        throw err;
    }
}

module.exports = {
    getAccessToken
}