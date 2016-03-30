import { GraffitiWrapper } from './generic';

export default class ExtraInterfacesWrapper extends GraffitiWrapper {
  run() {
    const extraInterfaces = this.opts.extraInterfaces || [];

    this.extraInterfaces = Array.isArray(extraInterfaces)
      ? extraInterfaces
      : [extraInterfaces];
    super.run();
  }
}
