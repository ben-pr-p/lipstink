const SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1')
const fs = require('fs')
const words = require('cmu-pronouncing-dictionary')

/*
 * Charlie, run it with, node index.js filename.mp3
 */

const filename = process.argv[2]

// Charlie make an acount and put this here
const speech_to_text = new SpeechToTextV1({
  username: '<username>',
  password: '<password>'
})

const params = {
  // From file
  audio: fs.createReadStream(filename),
  content_type: 'audio/l16; rate=44100'
}

speech_to_text.recognize(params, (err, res) => {
  if (err) {
    console.log(err)
    process.exit()
  }

  // Charlie do stuff with
  console.log(JSON.stringify(res, null, 2))

  // use words required above ^^
  // documentation here: https://www.npmjs.com/package/cmu-pronouncing-dictionary
})
