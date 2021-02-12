const fs = require('fs');
const express = require('express');
const app = express();

const index = fs.readFileSync(`${__dirname}/index.html`, 'utf-8');

app.use( (req, res) => {
    res.send(index);
});

app.listen(3000);






// const fs = require('fs');
// const express = require('express');

// const tempOverview = require(`${__dirname}/templates/overview.html`);

// const postRouter = require('./routes/postRoutes');   

// const app = express();

// app.use(express.json());

// app.use('/', (req, res) => {
//   res.sendFile(tempOverview);
// });

// app.use('/api', postRouter);

// module.exports = app;