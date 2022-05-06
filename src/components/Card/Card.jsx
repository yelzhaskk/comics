import styles from './Card.module.css';
import { NavLink } from 'react-router-dom';

const Card = ( { id, title, desc, path, extension, price, creators } ) => {
   const generateStars = (max, min) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
   }

   const createArray = () => {
      let arr = [];
      for(let i = 0; i <= generateStars(0, 10); i++){
         arr.push(i);
      }
      return arr;
   }

   return (
      <div className={styles.wrapper}>
         <NavLink to={`/comics/${id}`}>
            <img className={styles.image} src={`${path}.${extension}`} alt="poster"/>
         </NavLink>
         <div className={styles.inner}>
            <h4 className={styles.title}>{title}</h4>
            <p>
               {
                  createArray().map(_ => (<span>&#11088;</span>))
               }
            </p>
            <p>Price : {price}$</p>
            <p>
               {
                  creators.map(creator => (<h4>{creator.role}: {creator.name}</h4>))
               }
            </p>
         </div>
      </div>
   );
}

export default Card;