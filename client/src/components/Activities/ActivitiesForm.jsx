import './ActivitiesForm.modules.css'
import { useState } from 'react';
import { postActivity } from '../../redux/activitiesActions';
import { useDispatch } from  'react-redux';
import  CountriesList from './CountriesList'
import validate from './validations';

const ActivitiesForm = () => {
    
    const dispatch = useDispatch();
    
    const seasons = ['Spring', 'Summer', 'Fall', 'Winter', 'All Year'];
    const difficulties = ['Very Easy', 'Easy', 'Medium', 'Hard', 'Very Hard']
    
    const [formKey, setFormKey] = useState(0); 

    const [formData, setFormData] = useState({
        activityName: '',
        difficulty: '',
        duration: '',
        season: '',
        country: [],
    });

    const [errors, setErrors] = useState({
        activityName: '',
        difficulty: '',
        duration: '',
        season: '',
        country: [],
    })

    const [submitted, setSubmitted] = useState(false);
    const [confirmationMessage, setConfirmationMessage] = useState('');

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })

        setErrors(validate ({
            ...formData,
            [event.target.name]: event.target.value
        }))
    }

    const isFormValid = () => {
        return !errors.activityName && !errors.difficulty && !errors.duration && !errors.season && !errors.country && formData.activityName && formData.difficulty && formData.duration && formData.season && formData.country.length > 0
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isFormValid()){
            dispatch(postActivity(formData))
            setConfirmationMessage(
                `Form submitted successfully! 
                Activity: ${formData.activityName}, 
                Difficulty: ${formData.difficulty}, 
                Duration: ${formData.duration}, 
                Season: ${formData.season}, 
                Countries: ${formData.country.join(', ')}`
            );

            setFormData({
                activityName: '',
                difficulty: '',
                duration: '',
                season: '',
                country: [],
            });

            setFormKey((prevKey) => prevKey + 1)<

            setErrors({
                activityName: '',
                difficulty: '',
                duration: '',
                season: '',
                country: [],
            });

            setSubmitted(true);
        }
    };

    return (
        <div>
            {console.log(formData)}
            <form onSubmit={handleSubmit} className='activities-form'>
                <div>
                    <label htmlFor="activityName">Activity: </label>
                    <input
                        id='activityName'
                        name='activityName' 
                        type="text"
                        value={formData.activityName}
                        onChange={handleChange}
                    />
                    {errors.activityName && <span>{errors.activityName}</span>}
                </div>
                <br />

                <div>
                    <label htmlFor="difficulty">Difficulty: </label>
                    {difficulties.map((difLevel) => (
                        <div key={difLevel}>
                            <input 
                                type='radio'
                                id={difLevel}
                                name='difficulty'
                                value={difLevel}
                                checked={formData.difficulty === difLevel}
                                onChange={handleChange}
                            />
                            <label htmlFor={difLevel}>{difLevel}</label>
                        </div>
                    ))}
                    <br />
                </div>

                <div>
                    <label htmlFor="duration">Duration </label>
                    <input
                        id='duration'
                        name='duration' 
                        type="text"
                        value={formData.duration}
                        onChange={handleChange} 
                    />
                    {errors.duration && <p>{errors.duration}</p>}
                </div>
                <br />

                <label htmlFor="season">Season: </label>
                <select name="season" value={formData.season} onChange={handleChange}>
                    <option value="">Select Season:</option>
                    {seasons.map(seasonOption => 
                    <option key={seasonOption} value={seasonOption}>
                        {seasonOption}
                    </option>)
                    }
                </select>
                <br />

                <label htmlFor="country">Country: </label>
                <CountriesList key={formKey} onChange={handleChange} />
                <br />                  

                <button
                    className={isFormValid() ? 'enabled-button' : 'disabled-button'}
                    disabled={!isFormValid()}>Submit
                </button>
            </form>
            {submitted && <div className='confirmation-message'>{confirmationMessage}</div>}
        </div>
    )
}

export default ActivitiesForm;