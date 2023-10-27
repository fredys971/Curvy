import query from '../database.js';
import xss from 'xss';

export default function updateUser(req, res) {
    let id = req.params.id;

    query(`
        UPDATE users SET 
            last_name = ?,
            first_name = ?,
            email = ?,
            address = ?,
            password = ?
        WHERE id = ?`,
        [   
        xss(req.body.last_name,
            req.body.first_name,
            req.body.email,
            req.body.address,
            req.body.password,
            id)
        ],
        (error, result) => {
            if (error) {
                console.error(error);
                res.status(500).send('Erreur lors de la mise à jour des données de l\'utilisateur.');
                return;
            }
            res.redirect(`/users/${id}`); 
        }
    );
};
