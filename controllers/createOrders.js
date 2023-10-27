import query from '../database.js';
import xss from 'xss';

export default function createOrder(req, res) {
    const {id_user,total_amount,status } = req.body;

    query('INSERT INTO orders (id_user, total_amount, status) VALUES (?, ?, ?)', [xss(id_user),xss(total_amount),xss(status)], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Erreur lors de l\'ajout de la commande');
            return;
        }

        res.redirect('/orders');
    });
}
