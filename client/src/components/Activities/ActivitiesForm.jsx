import './ActivitiesForm.modules.css'
import { useState } from 'react';
import { postActivity } from '../../redux/activitiesActions';
import { useDispatch } from  'react-redux';
import validate from './validations';

const ActivitiesForm = () => {

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
        return !errors.activityName && !errors.difficulty && !errors.duration && !errors.season && !errors.country && formData.activityName && formData.difficulty && formData.duration && formData.season && formData.country
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postActivity(formData))
    }

    return (
        <div>
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
                <input
                    id='season'
                    name='season' 
                    type="text"
                    value={formData.season}
                    onChange={handleChange} 
                />
                <br />

                <label htmlFor="country">Country: </label>
                <input
                    id='country'
                    name='country' 
                    type="text"
                    value={formData.country}
                    onChange={handleChange} 
                />
                <br />                  

                <button
                    className={isFormValid() ? 'enabled-button' : 'disabled-button'}
                    disabled={!isFormValid()}>Submit
                </button>
            </form>
        </div>
    )
}

export default ActivitiesForm;