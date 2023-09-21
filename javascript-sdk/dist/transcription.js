import { Services } from './services';
import { validateUser } from "./helpers";

export class Transcription {
  constructor(apiKey) {
    this._apiKey = apiKey;
    
    validateUser(this._apiKey);

    this.services = new Services(this._apiKey);
  }
}



