import mongoose from 'mongoose';

const imageSchema = mongoose.Schema({
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
});

const Image = mongoose.model('Image', imageSchema);

export default Image;