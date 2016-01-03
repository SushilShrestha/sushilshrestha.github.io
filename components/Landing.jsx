var React = require("react");

var Menu = require("./Menu.jsx")
var Docker = require("./Docker.jsx")

var Landing = React.createClass({
    render: function(){
        return <div>
            <Menu />
            <Docker />
            hello this is me wonder if after all this year you wanna talk to me
            {this.props.children}
        </div>
    }
});

module.exports = Landing;