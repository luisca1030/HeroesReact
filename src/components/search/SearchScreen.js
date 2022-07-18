import React, { useMemo } from 'react'
import querystring from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = () => {

    const location = useLocation();
    const navigate = useNavigate(); 

    const {q = "" } =  querystring.parse(location.search);

    const [formValues,handleInputChange] = useForm({
        searchText: q
     }); 

    const {searchText} = formValues;
  //const heroesFiltered = getHeroesByName(searchText);
    
   const heroesFiltered =  useMemo(() =>  getHeroesByName(q), [q])

    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate(`?q=${searchText}`);
       //history.push(`?q=${searchText}`);
    }

    // const handleInputSearch = (e) =>{
    //     console.log(e.target.value);
    // }

    return (
        <div>
            <h1> SearchScreen</h1>

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>

                    <form onSubmit= {handleSubmit}>
                        <input 
                               type="text" 
                                placeholder="Find yout hero"
                                className="form-control"
                                name="searchText"
                                value={searchText}
                                autoComplete="off"
                                onChange={handleInputChange}
                        />

                        <button
                            type="button"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>

                </div>
                <div className="col-7">
                    <h4> Results</h4>
                    <hr/>

                    {
                        (q ==='')
                            &&
                            <div className="alert alert-info">
                                Search a hero
                            </div>
                    }

                    
                    {
                        (q !=='' && heroesFiltered.length === 0)
                            &&
                            <div className="alert alert-danger">
                                there is no a hero with { q }
                            </div>
                    }


                    {
                           heroesFiltered.map(hero =>(
 
                                <HeroCard 
                                    key= {hero.id}
                                    {...hero}
                                />
                           )) 
                    }

                    
                </div>
            </div>

        </div>
    )
}
