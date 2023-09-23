const { Router } = require('express');
//const {getAllCountries} = require('../handlers/getAllCountries');
const {displayAllCountries} = require('../handlers/displayAllCountries')
const {getCountryByName} = require('../handlers/getCountryByName');
const {getCountryById} = require('../handlers/getCountryById');
const {getContinentCountries} = require('../handlers/getContinentCountries')
const {postActivity} = require('../handlers/postActivity');
const {getActivity} = require('../handlers/getActivity');
const {updateActivity} = require('../handlers/updateActivity')
const {deleteActivity} = require('../handlers/deleteActivity');

const router = Router();

//router.get('/countries', getAllCountries)

router.get('/countries', displayAllCountries);

router.get('/countries/name', getCountryByName);

router.get('/countries/:id', getCountryById);

router.get('/countries/continent/:continent', getContinentCountries);

router.post('/activities', postActivity);

router.get('/activities', getActivity);

router.put('/activities/:id', updateActivity);

router.delete('/activities/:id', deleteActivity);

module.exports = router;
