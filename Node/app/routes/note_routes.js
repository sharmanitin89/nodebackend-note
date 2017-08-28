// Info: In Express, routes are wrapped in a function,
// which takes the Express instance and a database as arguments.

// routes/note_routes.js
module.exports = function(app, db) {
    app.post('/notes', (req, res) => {
      const note = { text: req.body.body, title: req.body.title };
      db.collection('notes').insert(note, (err, result) => {
        if (err) { 
          res.send({ 'error': 'An error has occurred' }); 
        } else {
          res.send(result.ops[0]);
        }
      });
    });
  };