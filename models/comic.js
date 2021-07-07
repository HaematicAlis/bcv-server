import mongoose from 'mongoose';

import Image from './image.js';

const Schema = mongoose.Schema;

const comicSchema = mongoose.Schema({
    name: {
        type: String,
    },
    owner: {
        type: Schema.Types.ObjectId,
    },
    images: {
        type: [Image.Schema],
        default: [],
    },
});

const Comic = mongoose.model('Comic', comicSchema);

export default Comic;