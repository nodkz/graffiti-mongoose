
export class GraffitiWrapper {
  constructor(mongooseModel, opts = {}) {
    if (mongooseModel instanceof GraffitiWrapper) {
      this.mongooseModel = mongooseModel.getModel();
      this.prevWrapper = mongooseModel;
    } else {
      this.mongooseModel = mongooseModel;
    }

    this.opts = opts;
    this.extraFields = {};
  }

  run() {
    if (this.prevWrapper && !this.isExecuted) {
      this.isExecuted = true;
      this.prevWrapper.run();
      this.extraFields = Object.assign({}, this.prevWrapper.getExtraFields(), this.extraFields);
    }
  }

  getModel() {
    return this.mongooseModel;
  }

  getSchemaPaths() {
    return this.getModel().schema.paths;
  }

  getModelName() {
    return this.getModel().modelName;
  }

  getExtraFields() {
    return this.extraFields;
  }
}
