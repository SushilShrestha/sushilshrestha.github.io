var React = require("react");

var Menu = require("./Menu.jsx")
var Docker = require("./Docker.jsx")
var ListProjects = require("./ListProjects.jsx")

var Experiments = React.createClass({
    render: function(){
        return <div>
            <ListProjects />
            {this.props.children}
        </div>
    }
});

module.exports = Experiments;