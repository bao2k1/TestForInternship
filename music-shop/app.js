/*eslint-disable*/
const express = require('express');
const path = require('path');
const morgan = require('morgan');
//For test
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//end

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//fortest
app.use(bodyParser.urlencoded({ extended: true }));
const noty = async () => {
  try {
    console.log('wait a minute')
    await mongoose.connect(
      'mongodb+srv://quangbao0205:quangbao02052001@cluster0.bgma3.mongodb.net/music-shop'
    );
    console.log('DB connected successfully');
  } catch (error) {
    console.log(error);
  }
};
noty();

//data chema
const testSchema = {
  name: String,
  email: String,
  sdt: String,
  content: String
};
const Test = mongoose.model('Test', testSchema);

//end

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  // console.log('Hello from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
app.get('/', (req, res) => {
  res.status(200).render('test');
});
app.post('/', (req, res) => {
  const newTest = new Test({
    name: req.body.name,
    email: req.body.email,
    sdt: req.body.sdt,
    content: req.body.content
  });
  console.log(req.body.name);
  newTest.save();
  res.redirect('/');
});
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
