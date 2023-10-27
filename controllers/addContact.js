import { v4 as uuidv4 } from 'uuid';
import query from '../database.js';
import xss from 'xss';

export function addContact(req, res) {
    res.render('formcontact', { title: 'Ajout d\'un contact', action: '/contact/add' });

}

export function addContactSubmit(req, res) {
    const { pseudo, email, message } = req.body;
    const newContact = {
        id: uuidv4(),
        pseudo: pseudo,
        email: email,
        message: message
    };
    
    
    console.log('Ajout contact :', newContact);

    query(
        'INSERT INTO contact (id, civilite, last_name, surname, phone, email) VALUES (?, ?, ?, ?, ?, ?)',
        [xss(newContact.id), xss(newContact.civilite), xss(newContact.last_name), xss(newContact.surname), xss(newContact.phone), xss(newContact.email)],
        (error, result) => {
            if (error) {
                console.error(error);
                res.status(500).send('Erreur lors de la requête');
                return;
            }
            
            console.log('Contact ajouté avec succès.');
            res.redirect('/');
        }
    );
}
