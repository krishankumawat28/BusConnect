import mongoose from 'mongoose'

const BusSchema = new mongoose.Schema({
    Ownername: {
        type: String,
        required: [true, "provide name"]
    },
    numbers: {
        type: String,
        required: [true, "provide numbers"],
        unique: true 
    },
    mobile: {
        type: Number,
        required: [true, "provide mobile no"]
    },

    startPoint: {
        type: String,
        default: ""
    },
    startLat: {
        type: Number,
        default: null
    },
    startLng: {
        type: Number,
        default: null
    },

    departurePoint: {
        type: String,
        default: ""
    },
    departureLat: {
        type: Number,
        default: null
    },
    departureLng: {
        type: Number,
        default: null
    },

    startingTime: {
        type: String ,
        default: null
    },
    departureTime: {
        type: String ,
        default: null
    },
     stops: {
        type: String,
        default : ""
    },

    status: {
        type: String,
        enum: ["Active", "Inactive", "Suspended"],
        default: "Active"
    }

}, {
    timestamps: true
})

const BusModel = mongoose.model("Bus", BusSchema);

export default BusModel;
