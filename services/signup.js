'use strict';

const helperService = require('../util/helpers');
const logger = require("../util/pinologger");

const getPrivKey = () => {
    try {
        logger.info(`/services/signup/getPrivKey start`);

        const accountArray = helperService.readAccountsFromTxt({
            filename: "test.txt"
        });

        for (const account of accountArray) {
            const {username, key} = helperService.readAccount({account});
            logger.info(`username: ${username}, key: ${key}`);
        }
        return;
    } catch (err) {
        logger.error(`/services/signup/getPrivKey error: ${err.message}`);
        throw err;
    }
}

module.exports = {
    getPrivKey
}