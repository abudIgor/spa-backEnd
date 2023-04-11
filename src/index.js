const app = require("./app");
const db =  require("./mongoosedb");

const cors = require('cors');

app.use(cors());


db.init();

const port = process.env.PORT || 3005;

app.listen(port, function () {
    console.log(`app listening on port ${port}`);
})