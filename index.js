const fs = require('fs');
const webp = require('webp-converter');
const importPath = "./assets/import/";
const exportPath = "./assets/export/";
const types = ["jpeg", "jpg", "gif", "png"];

fs.readdir(importPath, (err, files) => {
    files.forEach(function (item) {
        var type = item.split('.').pop();
        var name = item.replace(`.${type}`, "");
        var correctType = types.includes(type);

        if (correctType) {
            const importImage = `${importPath}${item}`;
            const exportImage = `${exportPath}${name}.webp`;
            const result = webp.cwebp(importImage, exportImage, "-q 80", logging = "-v");

            result.then((response) => {
                console.log(response);
            });
        }
    });
});