import { Schema, model } from "mongoose";

// Writing the schema
const schema = new Schema({
    title : {
        type: String,
        required: true,
        unique: true,
    },
    desc : {
        type: String,
        required: true,
    },
});

// Creating the model
const Movie = model('Movie', schema);

export default Movie;