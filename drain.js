const fs = require("fs");
function writeOneMillionTimes(writer, data) {
    let i = 1000000;
    write();
    function write() {
        // ok表示数据是否挤压
        let ok = true;
        do {
            i--;
            if (i === 0) {
                writer.write(data);
            } else {
                ok = writer.write(data);
                // 如果ok为false，说明数据积压了
                if (ok === false) {
                    console.log("不能再写了");
                }
            }
        } while (i > 0 && ok);
        if (i > 0) {
            // 监听 drain 事件，数据通畅后才可继续写
            writer.once("drain", () => {
                console.log("干涸了");
                write();
            });
        }
    }
}

const writer = fs.createWriteStream("./big_file2.txt");
writeOneMillionTimes(writer, "hello world");
