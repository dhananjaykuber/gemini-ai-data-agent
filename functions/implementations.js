const Student = require('../models/studentModel');

const mongoose = require('mongoose');

const implementations = {
  async listCollections() {
    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();

    return collections.map((collection) => collection.name);
  },

  async getCollectionInfo({ collectionName }) {
    const modelName =
      collectionName === 'students' ? 'Student' : collectionName;

    const collection = mongoose.model(modelName);

    const documentCount = await collection.countDocuments();
    const sampleDocument = await collection.findOne();

    return {
      documentCount,
      schema: Object.keys(sampleDocument?._doc || {}),
      example: sampleDocument,
    };
  },

  async queryStudents({ query, projection = {}, sort = {} }) {
    return await Student.find(query, projection).sort(sort);
  },
};

module.exports = { implementations };
