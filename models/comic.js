import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const imageSchema = mongoose.Schema({
    name: {
        type: String,
    },
    size: {
        type: String,
    },
    fileType: {
        type: String,
    },
    src: {
        type: String,
    },
});

const comicSchema = mongoose.Schema({
    name: {
        type: String,
    },
    owner: {
        type: Schema.Types.ObjectId,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    album: {
        type: String,
    },
    images: {
        type: [imageSchema],
        default: [],
    },
});

const Comic = mongoose.model('Comic', comicSchema);

export default Comic;