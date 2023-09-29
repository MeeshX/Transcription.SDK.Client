Welcome to MeeshX! Choose your favorite provider and transcribe your audio content in less than 5 minutes.

# MeeshX SDK

MeeshX SDK is the gateway designed to simplify and streamline your audio transcription needs. With MeeshX SDK, you gain access to the transcription services of all the major cloud providers through a single service.

## Installation

Using npm

```bash
  $ npm install meeshx-sdk
```
    
## Constructor

```javascript  
const { Meeshx } = require("meeshx-sdk");
// - or -
// import { Meeshx } from "meeshx-sdk";

const meeshx = new Meeshx(MEESHX_API_KEY);

```

## Examples

In our app:

```javascript
import { Meeshx } from 'meeshx-sdk';

const apiKey = 'MEESHX_API_KEY';

const meeshx = new Meeshx(apiKey);


//Create object data
var data = {
  file: audiofile,
  languageCode: 'en-US',
  provider: 'aws'
}

//Call transcription service
var result = await meeshx.services.transcription(data);

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

For support, email us at helloworld@meeshx.dev


![Logo](https://www.meeshx.dev/wp-content/uploads/2023/09/Extended-Colour-positivenegative-use.svg)

