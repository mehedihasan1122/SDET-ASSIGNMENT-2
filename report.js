const newman = require('newman');
require('dotenv').config();

newman.run({
    collection: `https://api.postman.com/collections/37977263-c228aac0-b872-49fb-be22-0ef8b7b33d73?access_key=${process.env.secretKey}`,
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
