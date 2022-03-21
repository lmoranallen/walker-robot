import express from 'express';
import path from 'path';


const app = express();
let __dirname = path.resolve();

//middleware
app.use('/assets', express.static('assets'));


//routing
app.get("/", function(req,res){
	res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
	console.log("Starting localhost on PORT 3000: ");
})