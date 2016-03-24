import { GraffitiWrapper } from './generic';

export default class ExtraFieldsWrapper extends GraffitiWrapper {
  run() {
    this.extraFields = { ...this.opts.extraFields };
    super.run();
  }
}
