
# MeeshX Transcription SDK

MeeshX is a multicloud product that allows you to use the transcription services of all the main providers with a single service


## Speech Transcription

Speech Transcription is a service for getting text from an audio file


## Installation

Using npm

```bash
  $ npm install transcription-sdk
```
    
## Constructor

```javascript  
const { Transcription } = require("transcription-sdk");
// - or -
// import { Transcription } from "transcription-sdk";

const transcription = new Transcription(TRANSCRPTION_API_KEY);

```


## Examples

In our app:

```javascript
import { Transcription } from 'transcription-sdk';

const apiKey = 'TRANSCRIPTION_API_KEY';

const transcription = new Transcription(apiKey);


//Create object data
var data = {
  file: audiofile,
  languageCode: 'en-US',
  provider: 'aws'
}

//Call transcription service
var result = await transcription.services.transcription(data);

```

Output:

```json
{
  "transcription":"And so my fellow American ask not what your country can do for you, ask what you can do for your country."
}

```

## Documentation

[See Documentation](https://documentation.meeshx.dev/)

## Support

For support, email info@meeshx.dev


![Logo](https://www.meeshx.dev/wp-content/uploads/2023/09/Extended-Colour-positivenegative-use.svg)

