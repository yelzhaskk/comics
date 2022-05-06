import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { detailLink, pattern, characters } from '../links';
import './page.css';

const Comics = () => {
   const { id } = useParams();
   const [obj, setObj] = useState({});
   const [comments, setComments] = useState([]);
   const [yourComment, setYourComment] = useState('');
   const [like, setLike] = useState(0);
   const context = useRef();

   const generateStars = (max, min) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
   }

   useEffect(() => {
      if(!isNaN(parseFloat(id)) && isFinite(id)){
         fetch(detailLink + "/" + id + "?" + pattern).then(data => data.json()).then(response => setObj(response.data.results[0]));
      }else{
         fetch(characters + id + "&" + pattern).then(data => data.json()).then(response => setObj(response.data.results[0]));
      }
      fetch("https://dummyjson.com/comments").then(data => data.json()).then(response => setComments(response.comments))
      console.log(obj);
   }, [])


   const clickHandler = () => {
      context.current.focus();
      if(yourComment !== ""){
         setComments(prev => [...prev, {body : yourComment, user : {username : "anonymous"}}])
      } else {
         alert("Write Something!!!");
      }
      setYourComment("");
   }

   return (
      <>
         {
            obj ? (
               <>
                  <div className="section">
                     <img className="image" src={obj.thumbnail && obj.thumbnail.path + "." + obj.thumbnail.extension} alt="poster"/>
                     <div>
                        <h3>{obj.title ? obj.title : obj.name}</h3>
                        <p><span>Лайков:</span> {like} <span onClick={() => setLike(prev => prev + 1)}>&hearts;</span></p>
                        <p><span>Published:</span> {obj.dates ? obj.dates.filter(date => date.type === "onsaleDate").map(date => date.date.split('T')[0]) : "no date"}</p>
                        <div className='creators'>
                           {
                              obj.creators && obj.creators.items.map((creator, index) => <p key={index}>{creator.role}: {creator.name}</p>)
                           }
                        </div>
                        <p>{obj.description && (<span>Описание: {obj.description}</span>)}</p>
                     </div>
                  </div>
                  <div className='comments'>
                     <div className='comments'>
                        {
                           comments.map((comment, index) => (<div key={index} className='comment-inner'>
                              <p>{comment.user.username}: {comment.body}</p>
                           </div>))
                        }
                     </div>
                     <div className='comment-item'>
                        <textarea ref={context} value={yourComment} onChange={(e) => setYourComment(e.currentTarget.value)} className='textarea'></textarea>
                        <button onClick={clickHandler} className='btn'>Отправить</button>
                     </div>
                  </div>
               </>
            ) : "No results"
         }
      </>
   );
}

export default Comics;