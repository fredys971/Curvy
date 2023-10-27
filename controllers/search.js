
import { v4 as uuidv4 } from 'uuid';
import query from '../database.js';


export function searchFunction(req, res) {
    
    const { description } = req.query;

  
    query('SELECT * FROM product WHERE description = ?', [description], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send('Erreur serveur');
            return;
        }

        
        res.render('search', { results });
    });
}
