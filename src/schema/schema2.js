import { GraphQLSchema } from 'graphql';
import { getFields } from './schema';
import { getModel } from './../model/model';
import { getType, getExistedType, nodeInterface } from './../type/type';
import { getOneResolver } from './../query';

const allModels = {};
const rootModels = {};

function addMongooseModel(mongooseModel, isRootType = true) {
  const graffitiModel = getModel(mongooseModel);

  allModels[graffitiModel.name] = graffitiModel;

  if (isRootType) {
    rootModels[graffitiModel.name] = graffitiModel;
  }

  return graffitiModel;
}

function getGQType(mongooseModel) {
  const graffitiModel = allModels[mongooseModel.modelName];

  if (!graffitiModel) {
    throw new Error('Before getting GQType from mongoose model, you should add it '
                  + 'to graffiti via method `addMongooseModel()`');
  }

  return getType(allModels, graffitiModel);
}

function getGraffityModel(name) {
  return allModels[name];
}

/**
 * Returns a GraphQL schema including query and mutation fields
 * @param  {Object} options
 * @return {GraphQLSchema}
 */
function getSchema(options = {}) {
  const fields = getFields(rootModels, options);
  return new GraphQLSchema(fields);
}

export {
  getSchema,
  addMongooseModel,
  getGQType,
  getExistedType,
  nodeInterface,
  getGraffityModel,
  getOneResolver
};
