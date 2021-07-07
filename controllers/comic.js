import Comic from '../models/comic.js';

export const getComics = async (req, res) => {
    const id = req.body.id;

    try {
        const comics = await Comic.find({ owner: id });
        res.status(200).json(comics);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const addComic = async (req, res) => {
    const comicInfo = req.body;
    const newComic = new Comic({ name: comicInfo.name, owner: comicInfo.owner });

    try {
        await newComic.save();
        res.status(201).json(newComic);
    } catch (error) {
        res.status(409).json({ message: error });
    }
}

export const addImage = async (req, res) => {
    const id = req.body.id;
    const imageInfo = req.body.image;
    const newImage = { name: imageInfo.name, size: imageInfo.size, fileType: imageInfo.fileType, base64: imageInfo.base64 };
    
    try {
        var comic = await Comic.findById(id);
        comic.cover = newImage;
        await comic.save();
        res.status(201).json(comic);
    } catch (error) {
        res.status(409).json({ message: error });
    }
}