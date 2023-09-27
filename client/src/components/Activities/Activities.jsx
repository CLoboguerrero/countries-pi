import './Activities.modules.css';
import { useState } from 'react';

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
        name:'Name is required',
        difficulty:'Please, select a difficulty for the Activity',
        duration: 'Please set duration time',
        season: 'Please select a season of the year',
        country: 'Please select one o more countries for this activity'
    })


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
        return;
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
            {console.log(state)}
            <form className='activities-form'>
                <div className='activity-name'>
                    <label>Activity Name: </label>
                    <input onChange={handleChange} type="text" name='name' placeholder='i.e. Balloon Sightseeing' />
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

                <input onChange={handleChange} type="submit" />
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