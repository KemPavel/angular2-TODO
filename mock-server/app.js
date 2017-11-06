const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const url = require('url');

let user = {
  userName: null,
  password: null
};

let todos = [
  {
    id: 0,
    title: 'Todo_1',
    date: '2017-10-27',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, vitae id nam sit fuga magni. Deserunt sint aspernatur, adipisci totam in quisquam laborum accusantium assumenda repellendus optio! Qui, vitae, nostrum.',
    duration: 90,
    topRated: true
  },
  {
    id: 1,
    title: 'Todo_2',
    date: '2017-12-19',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, vitae id nam sit fuga magni. Deserunt sint aspernatur, adipisci totam in quisquam laborum accusantium assumenda repellendus optio! Qui, vitae, nostrum.',
    duration: 750
  },
  {
    id: 2,
    title: 'Todo_3',
    date: '2017-11-04',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, vitae id nam sit fuga magni. Deserunt sint aspernatur, adipisci totam in quisquam laborum accusantium assumenda repellendus optio! Qui, vitae, nostrum.',
    duration: 30
  },
  {
    id: 3,
    title: 'Todo_4',
    date: '2017-09-04',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, vitae id nam sit fuga magni. Deserunt sint aspernatur, adipisci totam in quisquam laborum accusantium assumenda repellendus optio! Qui, vitae, nostrum.',
    duration: 450
  },
  {
    id: 4,
    title: 'Todo_5',
    date: '2017-06-22',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, vitae id nam sit fuga magni. Deserunt sint aspernatur, adipisci totam in quisquam laborum accusantium assumenda repellendus optio! Qui, vitae, nostrum.',
    duration: 230
  },
  {
    id: 5,
    title: 'Todo_6',
    date: '2017-10-20',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, vitae id nam sit fuga magni. Deserunt sint aspernatur, adipisci totam in quisquam laborum accusantium assumenda repellendus optio! Qui, vitae, nostrum.',
    duration: 130
  }
];

app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept, authorization');
  next();
})

app.get('/todos', function(req, res) {
  let showAll = req.query.all;
  let searchString = req.query.search;
  console.log(showAll, 'showAll');
  if(searchString && searchString.replace(/ +(?= )/g,'').length > 0) {
    let filteredTodos = todos.filter(todo => {
      if(todo.title.toLowerCase().indexOf(searchString.toLowerCase()) > -1) {
        return todo;
      }
    });
    res.send(filteredTodos);
  } else if(showAll) {
    res.send(todos);
  } else {
    res.send(todos.slice(0, 3));
  }
});

app.delete('/todos/:id', function(req, res) {
  const id = req.params.id;
  const index = todos.findIndex(function(todo) {
    return todo.id == id;
  });
  if(index > -1) {
    todos.splice(index, 1);
  }
  res.status(204);
  res.send();
})

app.post('/login', function(req, res) {
  user.userName = req.body.userName;
  user.password = req.body.password;

  res.status(200);
  res.send({token: '1q2w3e4r5t6y7u8i9o0p'})
})

app.post('/logout', function(req, res) {
  user.userName = null;
  user.password = null;

  res.send({token: null});
})

app.get('/userinfo', function(req, res) {
  res.send(user);
})

app.listen(3004, function () {
  console.log('Example app listening on port 3004!');
});
