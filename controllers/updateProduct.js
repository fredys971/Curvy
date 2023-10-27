import query from '../database.js';
import xss from 'xss';

export default function updateProduct(req, res) {
    const productId = req.params.id;
    const {produits,description, prix, taille, couleur, id_catégorie} = req.body;

    query('UPDATE products SET produits = ?, description = ?, prix = ?, taille = ?, couleur = ?, id_catégorie = ? WHERE id = ?', xss([produits, description, prix, taille, couleur, id_catégorie, productId]), (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Erreur lors de la requête');
            return;
        }

        res.redirect('/product');
    });
}


