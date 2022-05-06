import Card from '../Card/Card';
import styles from './Hero.module.css';
import { httpLink } from '../links';
import { useEffect, useState } from 'react';

const Hero = () => { 
   const [arr, setArr] = useState([]);
   
   useEffect(() => {
      fetch(httpLink).then(data => data.json()).then(response => {
         setArr(response.data.results);
      });
   }, [])

   return (
      <div className={styles.wrapper}>
         {
            arr.map((comics, index) => <Card 
               key={index}
               id={comics.id}
               title={comics.title} 
               desc={comics.desc}
               path={comics.thumbnail.path}
               extension={comics.thumbnail.extension}
               price={comics.prices[0].price}
               creators={comics.creators.items}
            />)
         }
      </div>
   )
}

export default Hero;