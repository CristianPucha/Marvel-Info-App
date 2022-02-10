import './Spiderman.css'
import Spidermanhang from '../../Assets/spidermanmobile.png'
import { motion } from 'framer-motion';
import { useEffect , useState} from 'react'

const APIspiderMan = "https://gateway.marvel.com:443/v1/public/characters?id=1009610&ts=1&apikey=ee1f0ed925539c3a4d4ce7064b25523f&hash=8680bd6cec5e509e26c875432b373f0b"
const APIspiderComics = "https://gateway.marvel.com:443/v1/public/characters/1009610/comics?ts=1&apikey=ee1f0ed925539c3a4d4ce7064b25523f&hash=8680bd6cec5e509e26c875432b373f0b"

function Spiderman (){

    const [datos , setDatos] = useState ([]); 
    const [comics , setComics] = useState ([]); 

    useEffect(()=>{
        fetch(APIspiderMan)
        .then(response => response.json())
        .then(data =>{
            setDatos(data.data.results[0])
           
        });
    },[])

    useEffect(()=>{
        fetch(APIspiderComics)
        .then(response => response.json())
        .then(data =>{
            setComics(data.data.results)
           
        });
    },[])

        console.log(comics);

    
  

    return(
        <>
        <div className='spiderman-div'>
            <div className='spiderman-img-mobile'>
                <motion.h1 initial={{ y: -330 }}  animate={{ y: 0  }} transition={{ type: "spring", delay: 0.5 }}>{datos.name}</motion.h1>
                    <motion.img src={Spidermanhang} alt="Spider-Man" animate={{ y: 800 }} transition={{ type: "spring", stiffness: 100 }}  />
                <div className='spider-info-div'>
                        <motion.h2 initial={{ x: 1000 }}  animate={{ x: 0  }} transition={{ type: "spring", delay: 0.3 }}  >Story</motion.h2>
                            <motion.p initial={{ opacity: 0 }}  animate={{ opacity: 1  }} transition={{ type: "spring", duration:2 }}>{datos.description}</motion.p>
                </div>

            </div> 
        </div>
        <div className='spiderman-comics'>
            <h2 >Comics</h2>

            <div>
                
                <ul className='spider-comics-list'>
                
                    {
                    comics.map((comic , i)=>{
                        return(
                            
                    <li key={i} >
                        <a href={comic.urls[0].url} target= '_blank' >
                    <img src={comic.thumbnail.path + "/portrait_incredible" + "." + comic.thumbnail.extension} alt="" />
                    <p>{comic.title}</p>
                        </a>
                    </li>
                   
                        )})
                    }
                    
                </ul>
                    
                

                
                

            </div>
            
        </div>

        
        </>
    )
}

export default Spiderman