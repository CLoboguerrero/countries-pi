const validate = (formData) => {//state= estado del error. name = input que requiere validar
    const errors = {};


    
    
    if (formData.activityName.length < 3 || formData.activityName.length > 20){
        errors.activityName = 'Must have between 3 and 20 characters';
    }
    
    if (!formData.activityName){
        errors.activityName = 'Complete this field'
    }

    if (isNaN(parseInt(formData.duration))){
        errors.duration = 'Please insert a numeric value';
    }
    
    if (!formData.duration){
        errors.duration = 'Complete this field';
    }

    if (!formData.country){
        errors.country = 'Please select at least one Country';
    }
    // if (name === 'name'){
    //     if(state.name === '') setErrors({...errors, name:"Activity name required!"});
    //     else if(state.name.length < 3 || state.name.length > 20) setErrors({...errors, name:"Must have between 3 and 20 characters"});
    //     else setErrors({...errors, name:''});
    // }
    // if (name === 'difficulty'){
    //     if(state.difficulty !== 'easy'){}
    // }
    // if (name === 'duration') {
    //     if(isNaN(parseInt(state.duration))) setErrors({...errors, duration:"Please, insert a numeric value"});
    //     else setErrors({...errors, duration:''});
    // }
    // if (name === 'seaon') {
    //     if(state.season !== 'Spring' || state.season !== 'Summer' || state.season !== 'Autum' || state.season !== 'Winter' || state.season !== 'All Year'){

    //     }
    // }
    // if (name === 'country') {
    //     if (name !== ''){

    //     }
    // }
    return errors
}

export default validate;