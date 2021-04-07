const fs = require('fs');
const dbFile = require('../../../db/db.json');
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
    })}

    