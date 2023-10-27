import bcrypt from 'bcrypt';

bcrypt.hash('toto', 10, (error, hash) => {
    console.log(hash);
});
