const config = require('./config');
const bodyParser = require('body-parser');
const app = require('express')();
const {
  ActionsController,
  ApplicationController
} = require('./app/controllers');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/v1/webhook', ActionsController.webhook);
app.get('/api/v1/engage', ApplicationController.engage);
app.get('/api/v1/bills', ApplicationController.bills);
app.get('/api/v1/bye', ApplicationController.bye);
app.get('/health', ApplicationController.health);

app.listen(config.PORT);
