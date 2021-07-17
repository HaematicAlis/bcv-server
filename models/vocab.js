import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const vocabSchema = mongoose.Schema({
    comic: {
        type: Schema.Types.ObjectId,
    },
    page: {
        type: Number,
    },
    term: {
        type: String,
    },
    gloss: {
        type: String,
    },
});

const Vocab = mongoose.model('Vocab', vocabSchema);

export default Vocab;