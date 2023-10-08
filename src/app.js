const express = require('express');
const routeLogin = require('./routers/loginRouter');
const routeUser = require('./routers/userRouter');
const routeCategories = require('./routers/categoriesRouter');
const routeBlogPost = require('./routers/postCategoryRouter');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use(routeLogin);
app.use(routeUser);
app.use(routeCategories);
app.use(routeBlogPost);
// ....

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
