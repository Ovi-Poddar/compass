const mongoose = require("mongoose");
const { Schema } = mongoose;

const businessSchema = new Schema({
    business_name: {
        type: String,
        required: true,
    }
    ,
    owner_id: {  // foreign key
        type : mongoose.Schema.Types.ObjectID,
        ref : 'User',
        required: true,
    },

    about: {
        type : String,
        default: ""
    },

    contact_no: {
        type: String,
    },

    address: {
        type : String,
        required: true,
    },

    area: {
        type: String,
        required: true,
    },

    city: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        required: true,
        deafult: ""
    },

    tags: {
        type: [String],
        required: true,
        default: ["business"],
    },
    
    is_open: {
        type: Boolean,
        required: true,
        default : false,
    },

    review_count: {
        type: Number,
        default: 0,
    },
    
    asked_query_count: {
        type: Number,
        default: 0,
    },

    answered_query_count: {
        type: Number,
        default: 0,
    },

    post_count: {
        type: Number,
        default: 0,
    },

    offer_count: {
        type: Number,
        default: 0,
    },

    average_star_count: {
        type : Number,
        //type: Decimal128,  //dont know if works found in stackoverflow
        default: 0,
    },

    opening_hours: {
        type: [String],
        deafault:[""],
    },
});

const Business = mongoose.model("Business", businessSchema);

module.exports = Business;