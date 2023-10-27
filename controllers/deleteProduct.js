import query from '../database.js';

export default function deleteProduct(req, res) {
    const productId = req.params.id;

    
    query('SELECT * FROM product WHERE id = ?', [productId], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Erreur lors de la suppression du produit');
            return;
        }

       
        if (result.length === 0) {
            res.status(404).send('Produit non trouvé');
            return;
        }

       
        query('DELETE FROM product WHERE id = ?', [productId], (error, result) => {
            if (error) {
                console.error(error);
                res.status(500).send('Erreur lors de la suppression du produit');
                return;
            }

            res.redirect('/products');
        });
    });
}
