require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

beforeAll(function(){
  mongoose.connect(
    process.env.MONGOOSE_PATH,
    { useNewUrlParser: true }
  );
});

beforeEach(function(done) {
  function clearDB() {
    for (var i in mongoose.connection.collections) {
      mongoose.connection.collections[i].deleteOne(function() {});
    }
  
    return done();
  }

  return clearDB(done);
});
  
afterEach(function(done) {
  return done();
});

afterAll(done => {
  mongoose.disconnect();
  return done();
});
