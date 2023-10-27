import query from '../database.js';
import xss from 'xss';

export default function updateOrder(req, res) {
    const orderId = req.params.id;
    const { id_user, total_amount, status } = req.body;

    query('UPDATE orders SET id_user = ?, total_amount = ?, status = ? WHERE id = ?', xss([id_user, total_amount, status, orderId]), (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Erreur lors de la mise à jour de la commande');
            return;
        }

        res.redirect('/orders');
    });
}
