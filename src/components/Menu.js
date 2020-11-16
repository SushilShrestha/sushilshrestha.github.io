import {Link} from 'react-router-dom'

var menuStyle = {
    background: "#717171",
    borderRadius: "5px",
    position: "absolute",
    right: "10px",
    top: "10px",
}
var menuItemStyle = {
    padding: "10px",
    float: "left",
    color: "#f2f2f2"
}

export default function Menu(){
    return <div style={menuStyle}>
        <div style={menuItemStyle}><Link to="/">Home</Link></div>
        <div style={menuItemStyle}><Link to="experiments">Experiments</Link></div>
    </div>
}
