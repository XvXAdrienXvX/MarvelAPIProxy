module.exports = class ComicsModel {
    constructor(id, title, description, cover, editor, writer, penciller){
        this.id = id;
        this.title = title;
        this.description = description;
        this.cover = cover;
        this.editor = editor;
        this.writer = writer;
        this.penciller = penciller;
    }
  
    getId() {
      return this.id;
    }
  
    setId(id) {
      this.id = id;
    }
  }