const bodyParser = require('body-parser');
const express = require('express');
const path=require('path')
const rootDirectory=require('./utils/path')
const app = express();
const userRoutes=require('./routes/shop')
const main=require('./routes/admin')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'Public')))

app.use(userRoutes)

app.use(main)
app.use((req,res)=>{
    res.status(404).sendFile(path.join(rootDirectory,'views','ErrorPage.html'))
})
app.listen(3001, () => console.log('Server is running at 3001'));
