import mongoose from 'mongoose';

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

const Schema = mongoose.Schema;

const comicSchema = mongoose.Schema({
    name: {
        type: String,
    },
    owner: {
        type: Schema.Types.ObjectId,
    },
    cover: {
        type: imageSchema,
        default: {},
    },
    album: {
        type: String,
    },
    images: {
        type: [String],
    },
});

const Comic = mongoose.model('Comic', comicSchema);

export default Comic;