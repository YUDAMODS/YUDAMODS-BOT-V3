exports.limitAdd = function(sender, _db){
    let found = false
    _db.forEach((data, i) => {
        if (data.id === sender) {
            found = i
        }
    })
    if (found !== false) {
        _db[found].limit += 1
        fs.writeFileSync('./lib/limit.json', JSON.stringify(_db, null, 2))
    }
}
