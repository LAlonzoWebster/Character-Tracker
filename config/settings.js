const DBNAME = 'firstdb';
module.exports = {
    PORT: 3445,
    DBNAME,
    APPNAME: 'D&D Character Tracker',
    DBURI: `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@heliotraining-ltjxr.mongodb.net/${DBNAME}?retryWrites=true&w=majority`,
};