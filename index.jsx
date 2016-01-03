require("./html/index.html");
require("./css/style.css");
require("./css/dock.css");

var React = require("react");
var ReactDOM = require("react-dom");

var Router = require('react-router').Router;
var Route = require('react-router').Route;


var Landing = require("./components/Landing.jsx");
var Experiments = require("./components/Experiments.jsx");
//var Playground = require("./components/Playground.jsx");
//var Blog = require("./components/Blog.jsx");

ReactDOM.render(
    <Router>
        <Route path="/" component={Landing} >
            <Route path="playground" component={Experiments} />
            <Route path="blog" component={Landing} />
        </Route>
    </Router>,
    document.getElementById('woah')
);