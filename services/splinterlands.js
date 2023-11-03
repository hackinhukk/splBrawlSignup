const {axiosInstance} = require("../util/requests/axiosGetInstance");
const logger = require("../util/pinologger");


const getBrawlId = async() => {
    try {
        logger.info('/services/getBrawlId start');

        const url = "https://api2.splinterlands.com/guilds/find?id=649a16fe3b817780c4763175545ab8717d942fcc";

        const res = await axiosInstance(url);
        logger.info(`the brawl data is: ${JSON.stringify(res.data)}`);
    } catch (err) {
        logger.error(`/services/getBrawlId error: ${err.message}`);
        throw err;
    }
}

module.exports = {
    getBrawlId
};