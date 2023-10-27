import query from '../database.js';

export default (req, res) => {
    const id = req.params.id;

    query('DELETE FROM users WHERE id = ?', [id], (deleteError, deleteResult) => {
        if (deleteError) {
            console.error(deleteError);
            res.status(500).send('Erreur lors de la requête DELETE');
            return;
        }

        if (deleteResult.affectedRows === 0) {
            res.status(404).send('Utilisateur non trouvé');
            return;
        }

        res.redirect('/');
    });
};

