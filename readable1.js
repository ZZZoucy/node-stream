const { Readable } = require("stream");

const inStream = new Readable({
    read(size) {
        this.push(String.fromCharCode(this.currentCharCode++));
        if (this.currentCharCode > 90) {
            console.log(`推了${char}`);
            this.push(null);
        }
    },
});

inStream.currentCharCode = 65; // A
// stdout 会自动 read
inStream.pipe(process.stdout);
