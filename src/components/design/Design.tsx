import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons';
import styles from './Design.module.css'

interface DesignProps{
    title: String,
    source: any,
    text: string,
    classname: string
  }

const Design: FC<DesignProps> = ({title, source, text, classname}) => {

  return (
    <section className={classname}>
    <div className={styles.DesignContainer}>
        <img src={source} alt="Site Image" className={styles.SiteImage}/>
        <h4  className={styles.Title}>{title} <sup><a href={text} ><FontAwesomeIcon icon={faLink} className={styles.FaLink} /></a></sup></h4>
    </div>
    </section>
  )
}

export default Design