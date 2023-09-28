![Logo](https://www.meeshx.dev/wp-content/uploads/2023/09/Extended-Colour-positivenegative-use.svg)

# MeeshX

MeeshX Transcription is an easy and quick way to convert speech to text.
MeeshX gives you access to the most powerful Speech-to-text engine provided by Amazon, Deepgram, Google, and Azure with a single SDK and API call.
With MeeshX SDK, you can switch between any speech model provider without managing different SDKs, authentication, buckets, and billings.

We offer free 60 minutes of audio conversion to all our private beta users to be used across all cloud services. To join our beta, reach out to helloworld@meeshx.dev 

## Documentation
[See Documentation](https://documentation.meeshx.dev/)

## Why choose MeeshX?

- A single service that allows you to use the speech services of all cloud providers
- Always use the latest version of the providers' services
- Easy switch. Switch providers by changing a simple string without affecting your business logic
- Efficient audio handling: with a Voice Activity Detection (VAD) engine, all silence is removed making the transcription process faster and more cost-effective

# MeeshX Transcription SDK

MeeshX Transcription SDK is a collection of SDK that simplify the usage of MeeshX
Use our samples wav file to test our transcription services:
* [harvard.wav](https://github.com/MeeshX/Transcription.SDK.Client/tree/main/audio_samples/harvard.wav) 18 seconds speech audio good quality
* [jackhammer.wav](https://github.com/MeeshX/Transcription.SDK.Client/tree/main/audio_samples/jackhammer.wav) 3 seconds speech audio with high background noise
* [voip_call.wav](https://github.com/MeeshX/Transcription.SDK.Client/tree/main/audio_samples/voip_call.wav) 33 seconds voip call

## Javascript (Angular, Vue, React)
 - [Documentation](https://github.com/MeeshX/Transcription.SDK.Client/tree/main/javascript-sdk)
 - [Example](https://github.com/MeeshX/Transcription.SDK.Client/blob/main/examples/html/meeshx.html)


## NodeJS
Simply invoke our API with your preferred http library
```js
const axios = require('axios');
const FormData = require('form-data');
const fs = require("fs");

// The audio file to upload 
const audioStream = fs.createReadStream('../audio.wav')
const APIKEY = '<get in touch!>';
const formData = new FormData();

formData.append("file", audioStream);
formData.append('languageCode', "en-US");   // choose your language
formData.append('provider', 'azure');       // choose the backend transcription service to use

axios({
  url: 'https://dev-backbone.screevo.ai/api/upload/full/audio-file',
  method: 'post',
  headers: {
    ...formData.getHeaders({"auth-key": APIKEY}), // Add your MeeshX API Key
  },
  data: formData,
})
.then(response => {
	console.log('Success:', response.data);
})
.catch(error => {
	console.error('Error:', error);
});
```

## API / cURL
### Audio file to text
Extract text from an audio file.
Enpodint: `https://backbone.screevo.ai/api/upload/full/audio-file`
Method: `POST`

Request headers:

| Request Header | Description                                                                                      |
|----------------|--------------------------------------------------------------------------------------------------|
| Content-Type   | `rquired` `multipart/form-data`                                                                  | 
| access-key     | `required` Get in touch at [unicorn@meeshx.dev](mailto:unicorn@meeshx.dev) for a beta access-key | 

Request Body:

| Form Parameter | Description                                  | Required | Allowed values                                     |
|----------------|----------------------------------------------|----------|----------------------------------------------------|
| file           | The file audio to transcribe                 | X        | Only `wav` forma is supported                      |
| provider       | Which transcription service to use           | X        | `aws`<br/> `deepgram`<br/> `google` <br/>  `azure` |
| languageCode   | The language of the file audio to transcribe | X        | `en-US`<br/> `it-IT`<br/>                          |


Example: 
```shell
curl -v \
	-H "access-key: <get in touch! unicorn@meeshx.dev>" \
	-F file='@audio.wav' \  # The audio file you want to convert
	-F provider=aws \       # choose 
	-F languageCode=en-US \
	"https://backbone.screevo.ai/api/upload/full/audio-file"
```
