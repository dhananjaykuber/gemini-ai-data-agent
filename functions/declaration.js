const declarations = {
  listCollections: {
    name: 'listCollections',
    description: 'Get a list of collectiosn in the database',
    parameters: {
      type: 'object',
      properties: {},
    },
  },

  getCollectionInfo: {
    name: 'getCollectionInfo',
    description:
      'Get information about a collection, including its schema and document count',
    parameters: {
      type: 'object',
      properties: {
        collectionName: {
          type: 'string',
          description: 'Name of the collection to get information about',
        },
      },
      required: ['collectionName'],
    },
  },

  queryStudents: {
    name: 'queryStudents',
    description: 'Query students based on various criteria',
    parameters: {
      type: 'object',
      properties: {
        query: {
          type: 'object',
          description: 'Mongodb query object to filter students',
        },
        projection: {
          type: 'object',
          description: 'Fields to include in the result',
        },
        sort: {
          type: 'object',
          description: 'Sorting criteria',
        },
      },
      required: ['query'],
    },
  },
};

module.exports = { declarations };
