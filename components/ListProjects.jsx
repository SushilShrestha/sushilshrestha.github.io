var React = require("react");
var $ = require("jquery");
const CSVParser = require("./CsvParser.jsx");

var styleListItem = {
    width: "150px",
    height: "150px",
    float: "left",
    padding: "20px",
    margin: "10px",
    overflow: "hidden"
};
var ListItem = React.createClass({
    render:function(){
        return <div style={styleListItem} >
                <img src={this.props.imgsrc} height="50px" width="50px" />
                <a href={this.props.ahref}><h2>{this.props.title}</h2></a>
                <div className="desc">{this.props.desc}</div>
            </div>
    }
});

var containerStyle = {
    maxWidth:"650px",
    minWidth:"225px",
    margin: "auto",
    marginTop: "100px"
}

var csvUrl = "http://cors.io/docs.google.com/spreadsheets/d/103E_Wm24mzOKDuEua6C5sjqzKXVriCojH-_7Cx1SabI/pub?output=csv"
var ListProjects = React.createClass({
    getInitialState: function(){
        return {data:[]}
    },
    componentWillMount: function(){
        $.ajax({
            url: csvUrl,
            success: function(data){
                var csvData = CSVParser.parse(data);
                var header = csvData[0];
                csvData.splice(0,1)

                var jsonData = csvData.map((x)=>{
                    let retObj = {}
                    for (let i=0; i<x.length; i++){
                        retObj[header[i]] = x[i]
                    }
                    return retObj;
                })

                this.setState({data:jsonData});
                console.log(this.state.data)
            }.bind(this),
            error: function(badthing){
                console.error(badthing)
                console.error("something went wrong")
            }
        })
    },
    render: function(){
        // ["imgsrc", "title", "desc", "ahref"]
        var items = [{ahref:"http://google.com", imgsrc:"http://hellohello.com", title:"hellohello hello", desc:"this is desc.this is descthis is descthis is descthis is descthis is descthis is desc"},
                    {ahref:"http://google.com", imgsrc:"http://hellohello.com", title:"hello", desc:"this is desc"},
                    {ahref:"http://google.com", imgsrc:"http://hellohello.com", title:"hello", desc:"this is desc"},
                    {ahref:"http://google.com", imgsrc:"http://hellohello.com", title:"hello", desc:"this is desc"},
                    {ahref:"http://google.com", imgsrc:"http://hellohello.com", title:"hello", desc:"this is desc"}]

        console.log(this.state.data)
        items = this.state.data;

        var listedItems = items.map(item=><ListItem {...item} />)
        return <div style={containerStyle} >
            {listedItems}
        </div>
    }
});

module.exports = ListProjects;