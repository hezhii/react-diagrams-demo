import {AbstractPortFactory} from 'storm-react-diagrams';

export default class DiamondPortFactory extends AbstractPortFactory {
  constructor(type, cb) {
    super(type);
    this.cb = cb;
  }

  getNewInstance(initialConfig) {
    return this.cb(initialConfig);
  }
}
