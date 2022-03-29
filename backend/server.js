const express = require("express")
const path = require("path")
const app = express()

app.get("/",(request, response) => {
	response.sendFile( path.join(`${__dirname}/../frontend/index.html`))
})

app.use("/pub", express.static(`${__dirname}/../frontend/pub`))
app.listen(9000, () => {
	console.log("http://127.0.0.1:9000");
})

/* const http = require('http');
const fs = require('fs');
const path = require('path');

const serverFunction = (req, res) => {
}

const server = http.createServer(serverFunction) => {
	const errorHTML = "Ez az oldal nem létezik"
}
    
	//let filePath = path.resolve(__dirname + '/../frontend' + req.url);
	let filePath = path.resolve(`${__dirname} + '/../frontend${req.url}`);


    
	fs.access(filePath, fs.constants.R_OK, (err) => {
	if(err){
		res.statusCode = 404;
		res.end(errorHTML);
	}else{
		if(fs.statSync(filePath).isDirectory()) {
			filePath += '/index.html';
		}
		fs.readFile(filePath, (err, data) => {
			if(err) {
				res.statusCode = 500;
				res.end(errorHTML);
			} else {
				res.end(data);
			}
		});
	}
	});
//});

const port = 9000
const ip = "127.0.0.1"
const listenFun = () => {
	const addr = server.address();
		console.log(`http://${addr.address}:${addr.port}`);
		console.log(`Motivációs szöveg`);
}
//});

server.listen(port, ip, listenFun); */



/* const http = require('http');
const fs = require('fs');
const path = require('path');

const serverFunction = (req, res) => {

    const errorHTML = Minden oksa;

    let filePath = path.resolve(`${dirname}/../frontend${req.url});


    
    fs.access(filePath, fs.constants.R_OK, (err) => {
    if(err){
        res.statusCode = 404;
        res.end(errorHTML);
    }else{
        if(fs.statSync(filePath).isDirectory()) {
            filePath += '/index.html';
        }
        fs.readFile(filePath, (err, data) => {
            if(err) {
                res.statusCode = 500;
                res.end(errorHTML);
            } else {
                res.end(data);
            }
        });
    }
    });
}

const server = http.createServer(serverFunction);

const port = 9000
const ipAddress = "127.0.0.1"
const listenFunction = () => {
    const addr = server.address();
        console.log(http://${addr.address}:${addr.port}`);
        console.log("Ha azt csinálod amit más, olyan leszel, mint ők");
}

server.listen(port, ipAddress, listenFunction); */