import axios from 'https://cdn.jsdelivr.net/npm/axios@1.4.0/+esm'
import { getConfig } from '../configuration';
import { validateFile } from "../helpers";

export class Services {

  constructor(apiKey) {
    this._apiKey = apiKey;
  }

  transcription = async function getAwsTranscription(dataobj) {
    validateFile(dataobj.file.files[0]);

    const configData = getConfig();

    var transcription;
    var formData = new FormData();
    formData.append("file", dataobj.file.files[0]);
    formData.append('languageCode', dataobj.languageCode);
    formData.append('provider', dataobj.provider);
    formData.append('apiKey', this._apiKey);
    
    var result = await axios.post(configData.baseUrl + '/api/upload/full/audio-file',
      formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    
    if(result.status == 200){
      transcription = result.data;
    }
    return transcription;
  } 

}


