const query = require('../db/db-connection');
const { multipleColumnSet, multipleColumnSetFind } = require('../utils/common.utils');

class AnnonceModel {
    tableName = 'annonces';

    find = async (params = {}) => {
        let sql = `SELECT * FROM ${this.tableName}`;

        if (!Object.keys(params).length) {
            return await query(sql);
        }

        const { columnSet, values } = multipleColumnSetFind(params)
        sql += ` WHERE ${columnSet}`;

        return await query(sql, [...values]);
    }

    findOne = async (params) => {
        const { columnSet, values } = multipleColumnSetFind(params)

        const sql = `SELECT * FROM ${this.tableName}
        WHERE ${columnSet}`;

        const result = await query(sql, [...values]);

        // return back the first row (user)
        return result[0];
    }

    findByUserName = async (username) => {
        let sql = `SELECT annonces.* FROM ${this.tableName} 
        INNER JOIN users ON annonces.id_user=users.id_user 
        WHERE users.username='${username}' AND annonces.state='1'`;

        return await query(sql, [username]);
    }

    create = async ({ date_pub, titre, description, prix, photo = null, id_user }) => {
        let affectedRows;
        if (photo != null) {
            const sql = `INSERT INTO ${this.tableName}
        (id_user, date_pub, titre, description, prix, photo) VALUES (?,?,?,?,?,?)`;
            const result = await query(sql, [id_user, date_pub, titre, description, prix, photo]);
            affectedRows = result ? result.affectedRows : 0;
        }
        else{
            const sql = `INSERT INTO ${this.tableName}
        (id_user, date_pub, titre, description, prix) VALUES (?,?,?,?,?)`;
            const result = await query(sql, [id_user, date_pub, titre, description, prix]);
            affectedRows = result ? result.affectedRows : 0;
        }

        return affectedRows;
    }

    update = async (params, id_ann) => {
        const { columnSet, values } = multipleColumnSet(params)

        const sql = `UPDATE ${this.tableName} SET ${columnSet} WHERE id_ann=?`;

        const result = await query(sql, [...values, id_ann]);

        return result;
    }

    delete = async (id_ann) => {
        const sql = `UPDATE ${this.tableName} SET state='0' WHERE id_ann = ?`;
        const result = await query(sql, [id_ann]);
        return result;
    }
}

module.exports = new AnnonceModel;