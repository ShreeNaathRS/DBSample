const express = require('express');
const routes = require('./src/routes/index');

const app = express();

app.use(express.json());
app.use('/api/', routes);


app.listen(process.env.PORT || 3000, () => {
  console.log('Application Started');
});