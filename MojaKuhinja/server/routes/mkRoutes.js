const express = require('express')
const router = express.Router()
const mkController = require('../controllers/mkController')
// 

router.get('/', mkController.pocetna)
router.get('/meni/:id', mkController.meniKategorija)
router.get('/meni/:id/:id', mkController.jelo)
router.post('/meni/:id/:id/dodaj', mkController.dodajKorpa )
router.get('/istaknuto', mkController.istaknuto)
router.get('/korpa', mkController.korpa)
// 
router.get('/tajniKljuc', mkController.pocetnaAdmin)
router.get('/dodaj-jelo', mkController.dodajJelo)
router.post('/dodaj-jelo', mkController.dodajJeloSubmit)
// router.get('/meni/:id/name' , mkController.meniKategorijaSortName)

module.exports = router