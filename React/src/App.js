import React,{useEffect, useState} from 'react';
import './css/AddForm.css';
import NEWS from './components/news';
import { getList } from './services/list';
import AddNews from './components/addnews';
import DelNews from './components/deletenews';
import EditNews from './components/editnews';

function App() {

  const [list, setList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isDelOpen, setIsDelOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const toggleEditPopup = () => {
    setIsEditOpen(!isEditOpen);
  }
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const toggleDelPopup = () => {
    setIsDelOpen(!isDelOpen);
  }

  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if(mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  }, [])


  const newsList = list.map(news => (
    <NEWS 
      id = {news.id} 
      heading = {news.heading} 
      para = {news.para}
      imgUrl = {news.imgUrl}
      li1 = {news.li1}
      li2 = {news.li2}
      li3 = {news.li3}
      />
  ));

  return (
    <>
     <div className="buttondiv">
        <button onClick={togglePopup} class="button button4">Add News</button>
        {isOpen && <AddNews handleClose={togglePopup}/>}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={toggleEditPopup} class="button button4">Edit News</button>
        {isEditOpen && <EditNews list={list} handleClose={toggleEditPopup}/>}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="button button4" onClick={toggleDelPopup}>Delete</button>
        {isDelOpen && <DelNews list={list} handleClose={toggleDelPopup}/>}
      </div>
    <div className = 'main_header'>
                <span>CORONA UPDATES  </span><i className="arrow right"></i>
                <span>MARKETS  </span><i className="arrow right"></i>
                <span>BUSINESS  </span><i className="arrow right"></i>
                <span>ECONOMY</span>
            </div>
    <div className="container">{newsList} </div>
    </>
  );
}

export default App;
