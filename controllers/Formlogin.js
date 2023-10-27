import query from '../database.js';
import bcrypt from 'bcrypt';
import xss from 'xss';

export function showFormlogin(req, res) {   
    res.render('Formlogin');
}

export async function login(req, res) {
    const { pseudo, password } = req.body;

    query('SELECT * FROM users WHERE pseudo = ?', [xss(pseudo)], (error, result) => {
        if (error) {
            console.error(`Erreur lors de la connexion : ${error}`);
            res.status(500).send('Erreur serveur');
            return;
        }
        
        if (result.length === 0) {
            res.render('errorLogin', { message: 'Nom d\'utilisateur incorrect' });
            return;
        }

        bcrypt.compare(password, result[0].password, (error,passwordMatch) => {
            if (error) {
                console.error(`Erreur lors de la vérification du mdp : ${error}`);
                res.status(500).send('Erreur serveur');
                return;
            }
        
            if (!passwordMatch) {
                res.render('errorLogin', { message: 'Mot de passe incorrect' });
                return;
            }
    
            req.session.isLogged = true;
            res.redirect('/');
        });
    });
}
