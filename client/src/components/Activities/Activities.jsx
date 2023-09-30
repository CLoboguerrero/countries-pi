import './Activities.modules.css';
import { useState } from 'react';
import validate from './validations';

function Activities () {
    const seasons = ['Spring', 'Summer', 'Autum', 'Winter', 'All Year'];
    const difficulty = ['Very Easy', 'Easy', 'Medium', 'Hard', 'Very Hard'];
    
    
    const [selectedSeason, setSelectedSeason] = useState('');
    const [selectedDifficulty, setSelectedDifficulty] = useState('');

    const [state, setState] = useState ({
        name:'',
        difficulty:'',
        duration: 0,
        season: '',
        country: []
    })

    const [errors, setErrors] = useState ({
        ac_name:'Name is required',
        difficulty:'Please, select a difficulty for the Activity',
        duration: '',
        season: 'Please select a season of the year',
        country: 'Please select one o more countries for this activity'
    })

    const validate = (state, name) => {//state= estado del error. name = input que requiere validar
        if (name === 'name'){
            if(state.name === '') setErrors({...errors, name:"Activity name required!"});
            else if(state.name.length < 3 || state.name.length > 20) setErrors({...errors, name:"Must have between 3 and 20 characters"});
            else setErrors({...errors, name:''});
        }
        if (name === 'difficulty'){
            //if(state.difficulty !== 'easy'){}
        }
        if (name === 'duration') {
            if(isNaN(parseInt(state.duration))) setErrors({...errors, duration:"Please, insert a numeric value"});
            else setErrors({...errors, duration:''});
         }
        if (name === 'seaon') {
            //if(state.season !== 'Spring' || state.season !== 'Summer' || state.season !== 'Autum' || state.season !== 'Winter' || state.season !== 'All Year'){

            //}
        }
        if (name === 'country') {
            //if (name !== ''){

            //}
        }

    }

    // const handleDifficulty = (event) => {
    //     setSelectedDifficulty(event.target.value);
    // }

    // const handleSeason = (event) => {
    //     setSelectedSeason(event.target.value);
    // }

    const handleChange = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);

        if(event.target.name === 'country'){
            if(state.country.includes(event.target.value)) {
                return
            }else {
                let value = document.getElementById(event.target.name).value
                setState({
                    ...state,
                    [event.target.name]: [...state[event.target.name], value]
                });
                return;            
            }
        }

        
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
        
        //Re-renderizado!!!!! No se puede checar algo después de haber modificado une estado global o local
        //validate(state, event.target.name);// Para validar se pasa como estado exactamente lo mismo a la modificación del estado (useState anterior)
        validate({
            ...state,
            [event.target.name]: event.target.value
        }, event.target.name)
    }
    
    const disabledButton = () => {
        let aux = true;
        for(let error in errors){
            if(errors[error] === '') return true;
            // else{
            //     aux = true;
            //     break;
            // }
        }
        //return aux;
    }

    const isFormValid = () => {
        return !errors.name && !errors.difficulty && !errors.duration && !errors.season && !errors.country && state.name && state.difficulty && state.duration && state.season && state.country
    }

    const remove = (event) => {
        const { id, name} = event.target;
        setState((prevState) => ({
            ...prevState,
            [name]: prevState[name].filter((country) => country !== id),
        }));
    }


    return (
        <div>
            {/* {console.log(state)} */}
            {console.log(errors)}
            <form className='activities-form'>
                <div className='activity-name'>
                    <label>Activity Name: </label>
                    <input onChange={handleChange} type="text" name='name' placeholder='i.e. Balloon Sightseeing' />
                    {/* Mostar el error en el input */}
                    <br />
                    <span>{errors.name}</span>
                </div>
                 <br />
                
                <div className='activities-difficulty'>
                    <label>Difficulty: </label>
                    <select onChange={handleChange} name="difficulty" id="">
                        {
                            difficulty.map(difOptions => <option key={difOptions} value={difOptions}>{difOptions}</option>)
                        }
                    </select>
                    
                </div>
                <br />

                <div className='activities-duration'>
                    <label>Duration: </label>
                    <input onChange={handleChange} type="text" name='duration' placeholder='i.e. 120'/> Minutes
                    <br />
                    <span>{errors.duration}</span>
                </div>
                <br />

                <div className='activities-season'>
                    <label>Season: </label>
                    <select onChange={handleChange} name="season" id="">
                        {
                            seasons.map(seasonOption => <option key={seasonOption} value={seasonOption}>{seasonOption}</option>)
                        }
                    </select>
                </div>  
                <br />

                <div className='activities-country'>
                    <label>Country: </label>
                    <input type="text" name='country' placeholder='Country Code (i.e. MEX)' id='country' />
                    <button type='button' onClick={handleChange} name='country'>Add Country</button>
                    {
                        state.country.map(countryAdded => 
                        <div key={countryAdded}>
                            <span id={'country'}>{countryAdded}</span>
                            <button id={countryAdded} type='button' name='country' onClick={remove}>x</button>
                        </div>)
                    }
                </div>
                <br />
                    <button
                        className={isFormValid() ? 'enabled-button' : 'disabled-button'}
                        disabled={!isFormValid()}>Submit
                    </button>
            </form>
        </div>
    );
}

export default Activities;


{/* <div className='activities-difficulty'>
<label>Difficulty: </label>
<input type="text" name='difficulty' />
</div> */}

{/* <div className='activities-season'>
<label>Season of the Year: </label>
<select value={selectedSeason} onChange={handleSeason}>
    <option value="">Select a season</option>
    {seasons.map((season, index) => (
        <option key={index} value={season}>
            {season}
        </option>
    ))}
</select>
</div>   */}


//<label>Difficulty Level:</label>
                // <input
                //     type="radio"
                //     value="very-easy"
                //     checked={difficulty === 'very-easy'}
                //     onChange={handleDifficulty}
                // />
                // Very Easy
                // <input
                //     type="radio"
                //     value="easy"
                //     checked={difficulty === 'easy'}
                //     onChange={handleDifficulty}
                // />
                // Easy
                // <input
                //     type="radio"
                //     value="medium"
                //     checked={difficulty === 'medium'}
                //     onChange={handleDifficulty}
                // />
                // Medium
                // <input
                //     type="radio"
                //     value="hard"
                //     checked={difficulty === 'hard'}
                //     onChange={handleDifficulty}
                // />
                // Hard
                // <input
                //     type="radio"
                //     value="very-hard"
                //     checked={difficulty === 'very-hard'}
                //     onChange={handleDifficulty}
                // />
                // Very Hard