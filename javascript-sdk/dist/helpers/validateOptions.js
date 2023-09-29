export function validateUser(apiKey) {
    if (!apiKey || apiKey.trim().length === 0) {
      throw new Error("MeeshX SDK: API key is required");
    }
}

export function validateFile(audioSource) {
  if (!audioSource) {
    throw new Error("MeeshX SDK: Audio File is required");
  }

  if (!validate_fileupload(audioSource.name)) {
    throw new Error("MeeshX SDK: Uploaded file is not audio");
  }
}

function validate_fileupload(fileName)
{
    var allowed_extensions = new Array("wav","mp3");
    var file_extension = fileName.split('.').pop().toLowerCase();

    for(var i = 0; i <= allowed_extensions.length; i++)
    {
        if(allowed_extensions[i]==file_extension)
        {
            return true; // valid file extension
        }
    }

    return false;
}
