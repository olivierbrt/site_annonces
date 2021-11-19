const query = require('../db/db-connection');
const { multipleColumnSet } = require('../utils/common.utils');

class SalesModel {
    tableName = 'sales';

    create = async ({id_user, id_ann, date_sale}) => {
        const sql = `INSERT INTO ${this.tableName}
        (id_user, id_ann, date_sale) VALUES (?,?,?)`;
        const result = await query(sql, [id_user, id_ann, date_sale]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    }
}

module.exports = new SalesModel;