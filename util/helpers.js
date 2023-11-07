"use strict";

const { readFileSync, writeFile, writeFileSync } = require("fs");
const logger = require("./pinologger");

const readAccountsFromTxt = ({ filename }) => {
    try {
      logger.debug(`/util/helpers/readAccountsFromTxt`);
      const contents = readFileSync(filename, "utf-8");
  
      const arr = contents.split(/\r?\n/);
      return arr;
    } catch (err) {
      logger.error(`/util/helpers/readAccountsFromTxt error: ${err.message}`);
      throw err;
    }
  };

  const readAccount = ({ account }) => {
    try {
      logger.debug(`/util/helpers/readAccount`);
      const info = account.split(":");
      const username = info[0];
      const key = info[1];
      logger.debug(`/util/helpers/readAccount done`);
      return { username, key };
    } catch (err) {
      logger.error(`/util/helpers/readAccount error: ${err.message}`);
      throw err;
    }
  };


  const getPrivKey = () => {
    try {
        logger.info(`/util/helpers/getPrivKey start`);

        const accountArray = readAccountsFromTxt({
            filename: "accounts.txt"
        });
        let officerName;
        let officerKey;
        for (const account of accountArray) {
            const {username, key} = readAccount({account});
            officerName = username;
            officerKey = key;
        
        }
        logger.info(`/util/helpers/getPrivKey done`);
        return {officerName, officerKey};
    } catch (err) {
        logger.error(`/util/helpers/getPrivKey error: ${err.message}`);
        throw err;
    }
}

  module.exports = {
    readAccountsFromTxt,
    readAccount,
    getPrivKey
  }