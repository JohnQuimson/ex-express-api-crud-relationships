const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const bodyData = {
  title: {
    in: ['body'],
    notEmpty: {
      errorMessage: 'title è obbligatorio',
      bail: true,
    },
    isString: {
      errorMessage: 'Name deve essere una stringa.',
      bail: true,
    },
    isLength: {
      errorMessage: 'Name deve essere di almeno 3 caratteri',
      options: { min: 3 },
    },
  },

  content: {
    in: ['body'],
    notEmpty: {
      errorMessage: 'content è obbligatorio',
      bail: true,
    },
    isString: {
      errorMessage: 'content deve essere una stringa.',
      bail: true,
    },
    isLength: {
      errorMessage: 'content deve essere di almeno 5 caratteri',
      options: { min: 5 },
    },
  },

  published: {
    in: ['body'],
    isBoolean: {
      errorMessage: 'Available deve essere un booleano.',
    },
  },
};

module.exports = {
  bodyData,
};
