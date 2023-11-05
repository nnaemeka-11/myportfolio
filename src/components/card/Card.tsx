import { FC } from 'react'
import styles from "./Card.module.css";

interface CardProps{
  image: any,
  name: String,
  position: String,
  phone: String,
  email: String
}

const Card: FC<CardProps> = ({image, name, position, phone, email}) =>{
  return (
    <div className={styles.CardContainer}>
      <img src={image} alt="image" />
      <h3>{name}</h3>
      <h1>{position}</h1>
      <h4>{phone}</h4>
      <h4>{email}</h4>
    </div>
  )
}

export default Card