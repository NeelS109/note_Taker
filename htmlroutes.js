const path = require('path');
const fs = require('fs');

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

    module.exports = (app) => {

        app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, './public/index.html'));
        });
    
        app.get('/notes', (req, res) => {
            res.sendFile(path.join(__dirname, './public/notes.html'));
        });
    
        app.get('/assets/css/styles.css', (req, res) => {
            res.sendFile(path.join(__dirname, './public/assets/css/styles.css'));
        });
    
        app.get('/assets/js/index.js', (req, res) => {
            res.sendFile(path.join(__dirname, './public/assets/js/index.js'));
        });
    
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, './public/index.html'));
        });
    };