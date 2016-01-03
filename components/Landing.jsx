var React = require("react");

var Menu = require("./Menu.jsx")
var Docker = require("./Docker.jsx")

var Landing = React.createClass({
    render: function(){
        return <div>
            <Menu />
            <Docker />
            {this.props.children}
        </div>
    }
});

module.exports = Landing;