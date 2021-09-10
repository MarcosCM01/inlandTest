const db = require("../config/db")
class controller{
    //GET
    async getPackages(){
        let result = await db.query("SELECT * FROM packages");
        return result.rows;
    }
    //POST - PENDIENTE
    async CreatePackage(pack, res){
        let query = `INSERT INTO packages ("addressPostalCode", "clientName", "weight", "delivered", "addressStreet") VALUES ( 
        '${pack.addressPostalCode}', '${pack.clientName}', ${pack.weight}, ${pack.delivered}, '${pack.addressStreet}')`;
        let x = await db.query(query);
        res.status(200).json({
            status: 200,
            message: "Inserción correcta"
        });;
        return;
    }
    //UPDATE - PENDIENTE
    async UpdatePackage(packId, res){
        //get the previous record
        let previous = await db.query(`SELECT * FROM packages WHERE ID = ${packId}`);
        //PENDIENTE
        let checkedValue = !previous.rows[0].checked;

        await db.query(`UPDATE packages SET checked = $1 WHERE id =${packId}`);
        res.status(200).json({
            status: 200,
            message: "Update correcta"
        });;
        return;
    }
    //DELETE - PENDIENTE
    async deletePackage(packId){
        await db.query( `DELETE FROM packages WHERE ID=${packId}`);
        res.status(200).json({
            status: 200,
            message: "Eliminacion correcta"
        });;
        return;
    }
}
module.exports = controller;