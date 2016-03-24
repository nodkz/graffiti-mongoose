import { GraffitiWrapper } from './generic';
import { stringToGraphQLType } from '../type/type';

export default class VirtualFieldsWrapper extends GraffitiWrapper {
  run() {
    Object.keys(this.opts.virtualFields).forEach((fieldName) => {
      this.extraFields[fieldName] = {
        type: stringToGraphQLType(this.opts.virtualFields[fieldName]),
        resolve: (rootValue) => {
          return rootValue[fieldName];
        }
      };
    });

    super.run();
  }
}
