import mysql from 'mysql';

const pool = mysql.createPool({
    host: 'db.3wa.io',
    user: 'frederiqueperroys',
    password: 'ac1283912a7281a5952733ea3a987daf',
    database: 'frederiqueperroys_curvy'
});

 
export default (queryString, params, callback) => {
    console.log(queryString, params, callback)
    pool.getConnection((error, connection) => {
        if (error) {
            console.error(`Erreur de connexion à la base de données`, error);
            callback(error);
            return;
        }
        console.log('Connection réussie à la base de données');

      
        connection.query(
            queryString,
            params,
            (error, result) => {
                console.log('Connection released');
                connection.release();
                callback(error, result);
            }
        );
    });
}
