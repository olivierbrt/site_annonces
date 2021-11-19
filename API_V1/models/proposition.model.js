const query = require('../db/db-connection');
const { multipleColumnSet } = require('../utils/common.utils');

class PropositionModel {
    tableName = 'propositions';

    find = async (params = {}) => {
        let sql = `SELECT * FROM ${this.tableName}`;

        if (!Object.keys(params).length) {
            return await query(sql);
        }

        const { columnSet, values } = multipleColumnSet(params)
        sql += ` WHERE ${columnSet}`;

        return await query(sql, [...values]);
    }

    findOne = async (params) => {
        const { columnSet, values } = multipleColumnSet(params)

        const sql = `SELECT * FROM ${this.tableName}
        WHERE ${columnSet}`;

        const result = await query(sql, [...values]);

        // return back the first row (user)
        return result[0];
    }

    create = async ({id_user, id_ann, date_prop, message = null, proposition}) => {
        const sql = `INSERT INTO ${this.tableName}
        (id_user, id_ann, date_prop, message, proposition) VALUES (?,?,?,?,?)`;
        const result = await query(sql, [id_user, id_ann, date_prop, message, proposition]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    }

    delete = async (id_prop) => {
        const sql = `DELETE FROM ${this.tableName}
        WHERE id_prop = ?`;
        const result = await query(sql, [id_prop]);

        return result;
    }
}

module.exports = new PropositionModel;