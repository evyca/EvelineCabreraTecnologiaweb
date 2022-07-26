const mongoose = require('mongoose');

const ProgrammerSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  cargo: {
    type: String,
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
  },
});

module.exports = mongoose.model('Programmer', ProgrammerSchema);