const restify = require('restify');

const posts = require('./data/posts.json');
const comments = require('./data/comments.json');

const server = restify.createServer();
server.use(restify.queryParser({ mapParams: false }));
server.use(restify.CORS({
  origins: ['http://localhost:7770'],
  credentials: true,
  headers: ['Access-Control-Allow-Origin']
}));

// Mock API for posts
server.get('/posts', (req, res, next) => {
  console.log('Retrieving all Posts');
  res.send(posts);
  next();
});

// Mock API for comments
server.get('/comments', (req, res, next) => {
  console.log('Retrieving all Comments');
  res.send(comments);
  next();
});

// Mock API for comments
server.get('/comments/:postId', (req, res, next) => {
  const postId = req.query.postId;
  console.log(`Retrieving Comments for ${postId}`);
  res.send(comments[postId]);
  next();
});

server.listen(8080, () => {
  console.log(`${server.name} listening at ${server.url}`);
});
