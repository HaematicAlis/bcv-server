import Comic from '../models/comic.js';

export const getComics = async (req, res) => {
    const id = req.body.id;
    const sort = req.body.sort;

    try {
        var comics = await Comic.find({ owner: id });
        switch (sort) {
            case 'alphabetical':
                comics.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'revAlphabetical':
                comics.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'date':
                comics.sort((a, b) => a.dateCreated.localeCompare(b.dateCreated));
                break;
            case 'revDate':
                comics.sort((a, b) => b.dateCreated.localeCompare(a.dateCreated));
                break;
            default:
                break;
        }
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
        const comic = await Comic.findByIdAndDelete(id);
        res.status(200).json({ message: 'success' });
    } catch (error) {
        res.status(404).json({ message: error });
    }
}