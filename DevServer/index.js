const express = require('express');
const cors = require('cors');
const DevServer = express();

DevServer.use(cors());
DevServer.use(express.static('./dist'));

DevServer.listen(1500);
