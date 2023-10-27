import query from '../database.js';

export default function readOrder(req, res) {
    const orderId = req.params.id;

    query('SELECT * FROM orders WHERE id = ?', [orderId], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Erreur lors de la récupération de la commande');
            return;
        }

       
        res.json(result);
    });
}


