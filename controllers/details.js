import query from '../database.js';


export default (req, res) => {
    
    let id = req.params.id;

    query(
        'SELECT * FROM users WHERE id = ?', 
        [id],
        (error, results) => {
            if(error) {
                console.error(error);
                res.status(500).send('Erreur lors de la requete');
                return;
            }
            
            const users = results[0];
            
            if (!users) {
                return res.status(404).send(`Contact with id ${id} not found`);
            }
            
            res.render('details', {users});
        }
    );
};
