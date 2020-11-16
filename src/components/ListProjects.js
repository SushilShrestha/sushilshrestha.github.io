import React from 'react'
import CSVParser from './CsvParser'

var styleListItem = {
    width: "150px",
    height: "150px",
    float: "left",
    padding: "20px",
    margin: "10px",
    overflow: "hidden"
};

function ListItem(props){
    return <div style={styleListItem}>
            <img src={props.imgsrc} height="50px" width="50px" alt={"experiment"}/>
            <a href={props.ahref}><h2>{props.title}</h2></a>
            <div className="desc">{props.desc}</div>
        </div>
}

var containerStyle = {
    maxWidth:"650px",
    minWidth:"225px",
    maxHeight:"460px",
    overflow: "auto",
    margin: "auto",
    marginTop: "100px"
}

var csvUrl = "http://afahocci-experiments.appspot.com/cors?url=https://docs.google.com/spreadsheets/d/103E_Wm24mzOKDuEua6C5sjqzKXVriCojH-_7Cx1SabI/pub?output=csv"

export default class ListProjects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []}
    }

    componentWillMount(){
        fetch(csvUrl)
          .then((response) => {
              if (response.ok) {
                  return response.json()
              }
              return false
          })
          .then( (textResponse) => {
              if (!textResponse) {
                  return false
              }
              console.log("helo 2")
              var csvData = CSVParser.parse(textResponse.content);
              var header = csvData[0];
              csvData.splice(0,1)
              var jsonData = csvData.map((x)=>{
                  let retObj = {}
                  for (let i=0; i<x.length; i++){
                      retObj[header[i]] = x[i]
                  }
                  return retObj;
              })
              console.log(textResponse.content)
              this.setState({data:jsonData});
          })
          .catch((err => {
              console.error(err)
              console.error("something went wrong")
          }))
    }

    render() {
        // ["imgsrc", "title", "desc", "ahref"]
        //var items = [{ahref:"http://google.com", imgsrc:"http://hellohello.com", title:"hellohello hello", desc:"this is desc.this is descthis is descthis is descthis is descthis is descthis is desc"},
        //            {ahref:"http://google.com", imgsrc:"http://hellohello.com", title:"hello", desc:"this is desc"},
        //            {ahref:"http://google.com", imgsrc:"http://hellohello.com", title:"hello", desc:"this is desc"},
        //            {ahref:"http://google.com", imgsrc:"http://hellohello.com", title:"hello", desc:"this is desc"},
        //            {ahref:"http://google.com", imgsrc:"http://hellohello.com", title:"hello", desc:"this is desc"}]

        //console.log(this.state.data)
        var items = this.state.data;

        var listedItems = items.map(item=><ListItem {...item} key={item.title}/>)
        return <div style={containerStyle} >
            {listedItems}
        </div>
    }
}