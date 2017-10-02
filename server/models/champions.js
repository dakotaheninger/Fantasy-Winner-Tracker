let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let championsSchema = new Schema({
    ownerName: {
        String,
        required: true
    },
    teamName: {
        String,
        required: true
    },
    year: {
        Number,
        required: true
    },
    favoriteTeam: {
        String,
        required: true
    }
});

module.exports = mongoose.model("champions", championsSchema);