import bcrypt from 'bcrypt';
import query from '../database.js';


export default async function login(req, res) {
    const { pseudo, password } = req.body;

        query('SELECT * FROM users WHERE login = ?', [pseudo], (error, result) => {
            if(error) {
                console.error(`Erreur lors de la requete`, error);
                res.status(500).send('Erreur serveur');
                return;
            }
            
            if (result.length === 0) {
                res.render('errorLogin', { message: 'Nom d\'utilisateur incorrect' });
                return;
            }
    
            const passwordMatch =  bcrypt.compare(password, result[0].password);
    
            if (!passwordMatch) {
                res.render('errorLogin', { message: 'Mot de passe incorrect' });
                return;
            }
    
            req.session.isLogged = true;
            res.redirect('/');
        });
}
