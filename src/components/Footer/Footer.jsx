import styles from './Footer.module.css';
const Footer = () => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.inner}>
            <div className={styles.contact}>
               <ul className={styles.linkContainer}>
                  <li className={styles.link}><svg viewBox="0 0 36 52" xmlns="http://www.w3.org/2000/svg"><rect fill="#EC1D24" width="100%" height="100%"></rect><path fill="#FEFEFE" d="M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z"></path></svg></li>
                  <li className={styles.link}>FOLLOW MARVEL</li>
               </ul>
            </div>
         </div>
      </div>
   );
}

export default Footer;