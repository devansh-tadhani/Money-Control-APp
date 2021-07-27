import React from "react";
import { getList } from "../services/list";

export default function DelNews(props){

     function onDeleteNews(id){
        fetch(`http://localhost:26303/api/News/${id}`,{
        method: 'DELETE',
        }).then(r=>r.json()).then(res=>{
        if(res){
            getList()
        }
        });
    }
    return (
        <div id="id01" className="modal">
            <span className="close" onClick={props.handleClose} title="Close Modal">&times;</span>
            <form className="modal-content">
                <div className="newscontainer">
                    <h1>Delete News</h1>
                    <hr/>
                    <label><b>Heading</b></label><br/>
                    <div className="delinput">
                    {props.list.map((news) => (
                        <button className="cancelbtn" key={news.id} onClick={()=>onDeleteNews(news.id)}>{news.heading}
                            <span className='trash'>
                                <i className="fa fa-trash" />
                            </span>
                        </button>
                    ))}
                    </div>
                   
                </div>
            </form>
        </div>
    );
}