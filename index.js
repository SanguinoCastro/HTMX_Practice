import express from 'express';
const app = express();

app.use(express.static('www'));

// urlencoded form data
app.use(express.urlencoded({ extended: false }));

// api rest
app.get('/api/hello', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/time', (req, res) => {
  res.send(new Date().toLocaleTimeString());
});

let likes = 0;

app.patch('/api/likes', (req, res) => {
  likes++;
  res.send(likes.toString());
});

const users = ['Alice', 'Bob', 'Carol'];

app.post('/api/search', (req, res) => {
  const { username } = req.body;
  const result = users.filter((user) =>
    user.toLowerCase().includes(username.toLowerCase())
  );
  const html = result.map((user) => `<li>${user}</li>`).join('');
  res.send(html);
});

app.delete('/api/contact/:id', (req, res) => {
  const { id } = req.params;
  console.log({ id });
  res.status(200).send();
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
