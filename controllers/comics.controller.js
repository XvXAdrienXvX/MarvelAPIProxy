const {
    GetAllComics
  } = require("../service/comics.service");

const GetAllComicBooks = async(req, res) => {
    const ComicsList = await GetAllComics();
  
    return res.json(ComicsList);
};

module.exports = {GetAllComicBooks}