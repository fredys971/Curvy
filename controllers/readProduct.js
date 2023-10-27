import query from '../database.js';

export default function readProduct(req, res) {
    query('SELECT * FROM products', (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send('Erreur lors de la requête');
            return;
        }

        res.render('products', { products: results });
    });
}
