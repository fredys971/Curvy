import query from '../database.js';
import xss from 'xss';

export default function createProduct(req, res) {
    const {id, produits, description, prix, taille, couleur, id_catégorie } = req.body;
    
    query('INSERT INTO product (id, produits, description, prix, taille, couleur, id_catégorie ) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [xss(id),xss(produits),xss(description),xss (prix),xss(taille), xss(couleur), xss(id_catégorie)], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Erreur lors de la requête');
            return;
        }

        res.redirect('/products');
    });
}
