import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { Menu } from '../components/Basics/Menu';
import * as path from 'path';
import * as fs from 'fs';

const app = express();
app.use(express.static('./build'));

const PORT = process.env.PORT || 4000;

app.get('/*', (req, res) => {
  const app = ReactDOMServer.renderToString(<Menu />);
  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    return res.send(
      data.replace('<div id="root"></div>', `<div id='root'>${app}</div>`),
    );
  });
});
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
