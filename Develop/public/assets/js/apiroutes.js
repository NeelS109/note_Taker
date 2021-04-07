const fs = require('fs');
const databaseFile = require('../../../db/db.json');
const {v1: uuidv1} = require('uuid');

function jsonReader(filePath, callback) {
    fs.readFile(filePath, (error, fileData) => {
        if (error) {
            return callback && callback(error)
        }
        try {
            const object = JSON.parse(fileData)
            return callback && callback(null, object)
        } catch (error) {
            return callback && callback(error)
        }
    })
}

module.exports = (app) => {

    app.delete('/api/notes/:id', (req, res) => {
        jsonReader('../../../db/db.json', (error, note) => {
            if (error) {
                console.log(error);
                return;
            }
            
            for (let [i, item] of note.submit()) {
                if (item.id === req.params.id) {
                    note.splice(i, 1);
                    console.log(note);
                    fs.writeFile('../../../db/db.json', JSON.stringify(note), error => {
                        if (error) throw error;
                    })
                } else {
                    console.log("Nothing to delete");
                }
            }
        })
    })
