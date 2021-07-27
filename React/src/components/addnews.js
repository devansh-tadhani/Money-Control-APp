import React, {useState} from "react";
import { getList } from "../services/list";

export default function AddNews(props){
    const [news,setNews] = useState({
        heading: '',
        para:'',
        imgUrl:'',
        li1:'',
        li2:'',
        li3:''
    });

    function changeHandler(e) {
        setNews({
            ...news,
            [e.target.name]:e.target.value
        })
    }
    
    function onCreateNews(){
        fetch('http://localhost:26303/api/News',{
        method: 'POST',
        headers:{'Content-type':'application/json'},
            body: JSON.stringify(news)
        }).then(r=>r.json()).then(res=>{
        if(res){
            getList()
        }
        });
    }
    return (
        <div id="id01" className="modal">
            <span className="close" onClick={props.handleClose} title="Close Modal">&times;</span>
            <form className="modal-content"onSubmit={onCreateNews}>
                <div className="newscontainer">
                    <h1>Add News</h1>
                    <hr/>
                    <label><b>Heading</b></label><br/>
                    <input type="text" placeholder="Enter Heading" 
                        name ='heading' onChange={changeHandler} value={news.heading}/>

                    <label><b>Image URL</b></label>
                    <input type="text" placeholder="Enter Url"
                        name ='imgUrl' onChange={changeHandler} value={news.imgUrl}/>

                    <label><b>News Paragraph</b></label>
                    <input type="text" placeholder="Enter News"
                        name ='para' onChange={changeHandler} value={news.para}/>
                            
                    <label><b>News Bulletin</b></label><br/>
                    <div>
                        <input type="text" placeholder="Enter Bulletin I"
                            name ='li1' onChange={changeHandler} value={news.li1}/>
                        <input type="text" placeholder="Enter Bulletin II"
                            name ='li2' onChange={changeHandler} value={news.li2}/>
                        <input type="text" placeholder="Enter Bulletin III"
                            name ='li3' onChange={changeHandler} value={news.li3}/>
                    </div>
                            
                    <div className="clearfix" >
                        <button type="button" onClick={props.handleClose} className="cancelbtn">Cancel</button>
                        <button type="submit" className="signupbtn">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}