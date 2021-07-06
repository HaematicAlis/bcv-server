import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const comicSchema = mongoose.Schema({
    name: {
        type: String,
    },
    owner: {
        type: Schema.Types.ObjectId,
    },
    images: {
        type: [{
            name: {
                type: String,
            },
            size: {
                type: String,
            },
            type: {
                type: String,
            },
            base64: {
                type: String,
            },
        }],
        default: [],
    },
});

const Comic = mongoose.model('Comic', comicSchema);

export default Comic;