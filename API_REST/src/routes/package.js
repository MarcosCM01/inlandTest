const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");
//GET
router.get('/', async(req, res)=>{
    let listOfPackages = await new controller().getPackages();
});
//POST
router.post('/createPackage', async(req, res)=>{
    //se recibe el body de la peticion en formato JSON
    let newPack = req.body;
    await new controller().CreatePackage(newPack, res);
});
//PUT
router.put('/updatePackage/:packId', async(req, res)=>{
    let packId = req.params;
    //console.log(packId.packId);
    await new controller().UpdatePackage(packId, res);
});
//DELETE
router.delete('/deletePackage/:packId', async(req, res)=>{
    let packId = req.params;
    await new controller().deletePackage(packId, res);
});
//export class
module.exports = router;