import axios from 'https://cdn.jsdelivr.net/npm/axios@1.4.0/+esm'
import { getConfig } from '../configuration';
import { validateFile } from "../helpers";

export class Services {

  constructor(apiKey) {
    this._apiKey = apiKey;
  }

  transcription = async function getTranscription(dataobj) {
    validateFile(dataobj.file.files[0]);

    const configData = getConfig();

    var transcription;
    var formData = new FormData();
    formData.append("file", dataobj.file.files[0]);
    formData.append('languageCode', dataobj.languageCode);
    formData.append('provider', dataobj.provider);
    
    var result = await axios(
      {
        url: configData.baseUrl + '/api/upload/full/audio-file',
        method: 'post',
        headers: {
          'Content-Type': 'multipart/form-data',
          'access-key': this._apiKey
        },
        data: formData,
      }
    );
    
    if(result.status == 200){
      transcription = result.data;
    }
    return transcription;
  } 

}


