import Comic from '../models/comic.js';

export const getComics = async (req, res) => {
    const id = req.body.id;
    const sort = req.body.sort;

    try {
        var comics = await Comic.find({ owner: id }).sort(sort);
        res.status(200).json(comics);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const addComic = async (req, res) => {
    const comicInfo = req.body;
    const newComic = new Comic({ name: comicInfo.name, owner: comicInfo.owner, album: comicInfo.album, images: comicInfo.images });

    try {
        await newComic.save();
        res.status(201).json(newComic);
    } catch (error) {
        res.status(409).json({ message: error });
    }
}

export const deleteComic = async (req, res) => {
    const id = req.body.id;
    
    try {
        await Comic.findByIdAndDelete(id);
        res.status(200).json({ message: 'success' });
    } catch (error) {
        res.status(404).json({ message: error });
    }
}