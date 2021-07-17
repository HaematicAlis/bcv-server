import Vocab from '../models/vocab.js';

export const getVocab = async (req, res) => {
    const id = req.body.id;
    const page = req.body.page;

    try {
        var vocab = await Vocab.find({ comic: id, page: page });
        res.status(200).json(vocab);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const getAllVocab = async (req, res) => {
    const id = req.body.id;

    try {
        var vocab = await Vocab.find({ comic: id });
        res.status(200).json(vocab);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const addVocab = async (req, res) => {
    const vocabInfo = req.body;
    const newVocab = new Vocab({ comic: vocabInfo.comic, page: vocabInfo.page, term: vocabInfo.term, gloss: vocabInfo.gloss });

    try {
        await newVocab.save();
        res.status(201).json(newVocab);
    } catch (error) {
        res.status(409).json({ message: error });
    }
}

export const deleteVocab = async (req, res) => {
    const id = req.body.id;
    
    try {
        await Vocab.findByIdAndDelete(id);
        res.status(200).json({ message: 'success' });
    } catch (error) {
        res.status(404).json({ message: error });
    }
}