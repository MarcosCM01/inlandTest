const db = require("../config/db")
class queries{
    //GET
    async getPackages(){
        let result = await db.query("SELECT * FROM packages");
        return result.rows;
    }
    //POST - PENDIENTE
    async CreatePackage(pack){
        await db.query("INSERT INTO packages (addressStreet, addressPostalCode, clientName, weight, delivered) VALUES ($1, $2, $3, $4, $5)", [pack.addressStreetm, pack.addressPostalCode, pack.clientName, pack.weight, false]);
        return;
    }
    //UPDATE - PENDIENTE
    async UpdatePackage(packId){
        //get the previous record
        let previous = await db.query("SELECT * FROM packages WHERE ID = $1",[parseInt(packId)]);
        //PENDIENTE
        let checkedValue = !previous.rows[0].checked;

        await db.query("UPDATE packages SET checked = $1 WHERE id =$2",[checkedValue, parseInt(packId)]);
        return;
    }
    //DELETE - PENDIENTE
    async deletePackage(packId){
        await db.query("DELETE FROM packages WHERE ID=$1",[parseInt(packId)]);
        return;
    }
}
module.exports = queries;