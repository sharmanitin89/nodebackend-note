// Info: In Express, routes are wrapped in a function,
// which takes the Express instance and a database as arguments.

// routes/note_routes.js
module.exports = function(app, db) {
    app.post('/notes', (req, res) => {
        // Create note
        res.send('Hello, its create operation')
    });
};