import './BlackWidow.css'
import '../../generalCSS.css'
import widow from '../../Assets/black-widow.png'
import { motion } from 'framer-motion';
import { useEffect , useState} from 'react'


const HeroId = '1009189'
const APIdata = "https://gateway.marvel.com:443/v1/public/characters?id="+ HeroId +"&ts=1&apikey=ee1f0ed925539c3a4d4ce7064b25523f&hash=8680bd6cec5e509e26c875432b373f0b"
const APIcomics = "https://gateway.marvel.com:443/v1/public/characters/"+ HeroId +"/comics?ts=1&apikey=ee1f0ed925539c3a4d4ce7064b25523f&hash=8680bd6cec5e509e26c875432b373f0b"



function BlackWidow (){

    const [datos , setDatos] = useState ([]); 
    const [comics , setComics] = useState ([]); 

    useEffect(()=>{
        fetch(APIdata)
        .then(response => response.json())
        .then(data =>{
            setDatos(data.data.results[0])
           
        });
    },[])

    useEffect(()=>{
        fetch(APIcomics)
        .then(response => response.json())
        .then(data =>{
            setComics(data.data.results)
           
        });
    },[])

        console.log(comics);

    
  

    return(
        <>
        <div className='general-div'>
            <div className='spiderman-img-mobile hulk-img widow-background'>
                <motion.h1 
                initial={{ y: -330 }}  animate={{ y: 0  }} transition={{ type: "spring", delay: 0.5 }}> {datos.name} </motion.h1>
                
                
                    <motion.img src={widow} alt="Hulk"  animate={{ y: 800 }} transition={{ type: "spring", stiffness: 100 }}  />
                    
                <div className='general-info-div widow-info-div'>
                        <motion.h2 initial={{ x: 1000 }}  animate={{ x: 0  }} transition={{ type: "spring", delay: 0.3 }}  >Story</motion.h2>
                            <motion.p initial={{ opacity: 0 }}  animate={{ opacity: 1  }} transition={{ type: "spring", duration:2 }}>Natasha Romanoff was born in the Soviet Union as Natalia Alianovna Romanova. During World War II, Natasha was kidnapped by the Hand, who sought to make her a brainwashed master assassin</motion.p>
                </div>

            </div> 
        </div>
        <div className='general-comics widow-comics'>
            <h2 >Comics</h2>

            <div>
                
                <ul className='general-comics-list'>
                
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

export default BlackWidow