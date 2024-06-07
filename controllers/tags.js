const { PrismaClient } = require('@prisma/client');
const errorHandlerFunction = require('../utils/errorHandlerFunction');
const RestError = require('../utils/restError.js');
const prisma = new PrismaClient();

// const store = async (req, res) => {};

const show = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const tag = await prisma.tag.findUnique({
      where: { id },
    });
    if (tag) {
      res.json(tag);
    } else {
      throw new RestError(`tag con id ${id} non trovato.`, 404);
    }
  } catch (err) {
    errorHandler(err, req, res);
  }
};

// const index = async (req, res) => {};

// const update = async (req, res) => {};

// const destroy = async (req, res) => {};

module.exports = {
  // store,
  show,
  // index,
  // update,
  // destroy,
};
