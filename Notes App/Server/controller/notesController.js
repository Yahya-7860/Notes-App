const { noteModel } = require("../model");

const handleAddNote = async (req, res) => {
  const { title, content, userId } = req.body;
  if (!title) return res.status(400).json({ message: "title cannot be empty" });
  try {
    const note = await noteModel.create({
      title,
      content,
      userId,
    });
    res.status(200).json({ message: "Note added succesfully", note });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while fetching the notes", error });
  }
};

const handleGetNotes = async (req, res) => {
  try {
    const notes = await noteModel.find({ userId: req.userid });
    if (!notes.length) {
      return res.status(200).json({ Message: "No notes found" });
    }
    res.json(notes);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while fetching the notes", error });
  }
};

const handleDeleteNote = async (req, res) => {
  const { id } = req.query;
  if (id) {
    try {
      const deletedNote = await noteModel.findByIdAndDelete(id);
      if (!deletedNote) {
        return res
          .status(404)
          .json({ Message: "Note not found, unable to delete" });
      }
      res.status(200).json({ Message: "Note Deleted Successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "An error occurred while deleting the note", error });
    }
  } else {
    res.status(404).json({ Message: "Please provide id" });
  }
};

const handleUpdateNote = async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.query;

  try {
    const Note = await noteModel.findByIdAndUpdate(
      id,
      {
        title: title,
        content: content,
      },
      { new: true }
    );
    if (Note) {
      return res.status(200).json({ Message: "Updated", Note });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while updating the note", error });
  }
};

module.exports = {
  handleAddNote,
  handleGetNotes,
  handleDeleteNote,
  handleUpdateNote,
};
