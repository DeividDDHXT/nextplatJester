import styles from './Description.module.sass'
import Image from 'next/image'

export const Descripcion = () =>{


    return(

        <section className={styles.Description}>

        <Image 
        src="/images/description.jpg" 
        alt="product markerplace" 
        width={500} 
        height={300} 
       
        
        />

<div className={styles.Descripcion__text}>

<h2>Descriptions</h2>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, voluptates sapiente, doloribus minus impedit nihil dolore deserunt quam distinctio est consectetur sed vero temporibus exercitationem repellendus, ad animi! Natus, minus.</p>


</div>
    
        </section> 

    )
}




