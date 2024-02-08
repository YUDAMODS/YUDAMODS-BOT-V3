// gameUtils.js

const fs = require('fs');

exports.gameAdd = function(sender, _db){
    var found = false;
    _db.forEach((data, i) => {
        if(data.id == sender){
            found = i
        }
    })
    if (found !== false) {
        _db[found].glimit += 1;
        fs.writeFileSync('./lib/glimit.json', JSON.stringify(_db, null, 2));
    }
}
