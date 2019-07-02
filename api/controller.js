const csv = require('csvtojson')

const getExpected = async (req, res, next) => {
    const csvFilePath = './files/expected_running_times.csv';
    try {
        const expectedData = await csv().fromFile(csvFilePath);
        res.status(200).send(expectedData);
    }
    catch(e) {
        next(new Error(e));
    }
}

const getActual = (req, res) => {
    const actualData = require('../files/drivers_data.json');
    res.status(200).send(actualData);
}

module.exports = {
    getExpected,
    getActual
}