import { v4 as uuidv4 } from 'uuid'; 
import query from '../database.js';
import xss from 'xss';

export function showRegistrationForm(req, res) {
    res.render('Forminscription', { title: 'Inscription' });
}


export function register(req, res) {
    
    const {pseudo,email,password } = req.body;
    const Id = uuidv4();
     console.log('Valeurs reçues du formulaire :', pseudo, email, password, Id);

      query(
     'INSERT INTO users (id, pseudo, email, password) VALUES (?, ?, ?, ?)',
    [xss(Id),xss(email), xss(pseudo), xss(password)],
    (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Erreur lors de l\'enregistrement de l\'utilisateur');
            return;
        }
           console.log('Valeurs reçues du formulaire :', pseudo, email, password, Id);
        res.redirect('/');
    }
);

}

