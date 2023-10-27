import { v4 as uuidv4 } from 'uuid'; 
import query from '../database.js';
import xss from 'xss';

export default function (req, res) {
    
    const { pseudo, email, password } = req.body;

    
    const userId = uuidv4();

    
    query(
        'INSERT INTO users (id, pseudo, email, password) VALUES (?, ?, ?,)',
     xss([pseudo,email, password]),
        (error, result) => {
            if (error) {
                console.error(error);
                res.status(500).send('Erreur lors de l\'enregistrement de l\'utilisateur');
                return;
            }

            
            res.redirect('/confirmation');
        }
    );
}
