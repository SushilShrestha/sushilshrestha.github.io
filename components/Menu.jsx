var React = require("react");
var Link = require('react-router').Link;

var menuStyle = {
    height: "50px",

    background: "rgba(255, 165, 0, 0.25)",
    borderRadius: "5px",

    position: "absolute",
    right: "0px",
    top: "10px",
}
var menuItemStyle = {
    padding: "10px",
    float: "left"
}
var Menu = React.createClass({
    render: function(){
        return <div style={menuStyle}>
                <div style={menuItemStyle}><Link to="/">Home</Link></div>
                <div style={menuItemStyle}><Link to="playground">PlayGround</Link></div>
                <div style={menuItemStyle}><Link to="blog">Blog</Link></div>
            </div>
    }
})

module.exports = Menu;