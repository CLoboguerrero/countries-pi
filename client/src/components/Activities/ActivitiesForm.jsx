import './ActivitiesForm.modules.css'
import { useState } from 'react';
import { postActivity } from '../../redux/activitiesActions';
import { useDispatch } from  'react-redux';
import  CountriesList from './CountriesList'
import validate from './validations';

const ActivitiesForm = () => {

    const seasons = ['Spring', 'Summer', 'Fall', 'Winter', 'All Year'];

    const dispatch = useDispatch();

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

                <label htmlFor="difficulty">Difficulty: </label>
                <input
                    id='difficulty'
                    name='difficulty' 
                    type="text"
                    value={formData.difficulty}
                    onChange={handleChange} 
                />
                <br />

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
                <select name="season" onChange={handleChange}>
                    <option value="">Select Season:</option>
                    {
                        seasons.map(seasonOption => <option key={seasonOption} value={seasonOption}>{seasonOption}</option>)
                    }
                </select>
                <br />

                <label htmlFor="country">Country: </label>
                <CountriesList onChange={handleChange} />
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