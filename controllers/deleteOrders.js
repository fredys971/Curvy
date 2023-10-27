import query from '../database.js';

export default function deleteOrder(req, res) {
    const orderId = req.params.id;

    query('DELETE FROM orders WHERE id = ?', [orderId], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Erreur lors de la suppression de la commande');
            return;
        }

        res.redirect('/orders');
    });
}
