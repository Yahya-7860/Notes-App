const {
  handleAddNote,
  handleGetNotes,
  handleDeleteNote,
  handleUpdateNote,
} = require("./notesController");

const { handleUserDelete } = require("./userController");

module.exports = {
  handleAddNote,
  handleGetNotes,
  handleDeleteNote,
  handleUpdateNote,
  handleUserDelete,
};
