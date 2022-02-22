import './DoctorStrange.css'
import '../../generalCSS.css'
import strange from '../../Assets/strange-img.png'
import { motion } from 'framer-motion';
import { useEffect , useState} from 'react'


const HeroId = '1009282'
const APIdata = "https://gateway.marvel.com:443/v1/public/characters?id="+ HeroId +"&ts=1&apikey=ee1f0ed925539c3a4d4ce7064b25523f&hash=8680bd6cec5e509e26c875432b373f0b"
const APIcomics = "https://gateway.marvel.com:443/v1/public/characters/"+ HeroId +"/comics?ts=1&apikey=ee1f0ed925539c3a4d4ce7064b25523f&hash=8680bd6cec5e509e26c875432b373f0b"



function DoctorStrange (){

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
            <div className='spiderman-img-mobile hulk-img doctor-background'>
                <motion.h1 
                initial={{ y: -330 }}  animate={{ y: 0  }} transition={{ type: "spring", delay: 0.5 }}> {datos.name} </motion.h1>
                
                
                    <motion.img src={strange} alt="Hulk"  animate={{ y: 800 }} transition={{ type: "spring", stiffness: 100 }}  />
                    
                <div className='general-info-div doctor-info-div'>
                        <motion.h2 initial={{ x: 1000 }}  animate={{ x: 0  }} transition={{ type: "spring", delay: 0.3 }}  >Story</motion.h2>
                            <motion.p initial={{ opacity: 0 }}  animate={{ opacity: 1  }} transition={{ type: "spring", duration:2 }}>In his origin story, vain, egotistical neurosurgeon Stephen Strange injures his hands in a car crash. Attempts to heal his hands using science and medicine fail, and a desperate Strange travels to Tibet to find the fabled “Ancient One,” who he hopes will restore him to health</motion.p>
                </div>

            </div> 
        </div>
        <div className='general-comics doctor-comics'>
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

export default DoctorStrange