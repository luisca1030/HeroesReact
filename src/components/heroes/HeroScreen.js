import React, { useMemo } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

    const navigate = useNavigate(); 

    const {heroId} = useParams();
   
    console.log(heroId);

//    const hero = getHeroById(heroId);
    const hero =  useMemo(() =>  getHeroById(heroId), [heroId]) ;

    if(!hero){
        navigate(-1);
    }

    const handleReturn = () =>{

        //  if(history.length <=2){
        //      history.push('/')
         //   navigate("/marvel")
        //  }

         navigate(-1);
    }

    const { 
        superhero, 
        publisher, 
        alter_ego,
        first_appearance,
        characters
    } = hero;

   //console.log(hero);

    return (
        <div className="row mt-5">
            <div className="col-4">
                    <img
                        src={`../assets/heroes/${ heroId }.jpg`}
                        alt={ superhero }
                        className="img-thumbnail animate__animated animate__fadeInLeft"
                    />
            </div>

            <div className="col-8 animate__animated animate__fadeIn" >
                 <h3> { superhero } </h3>
                 <br/>
                 <ul className="list-group list-group-flush">
                     <li className="list-group-item"><p><strong> Alter ego: { alter_ego }</strong></p></li>
                     <li className="list-group-item"><p><strong> Publisher: { publisher }</strong></p></li>
                     <li className="list-group-item"><p><strong> First appearance: { first_appearance }</strong></p></li>
                 </ul>
           
                <h5>characters </h5>
                <p>{characters}</p>

                <button 
                    className="btn btn-outline-info" 
                    onClick= { () => handleReturn()}                 
                    >
                    Return
                </button>
            </div>
           
        </div>
    )
}
