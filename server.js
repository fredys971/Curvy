import express from 'express';
import router from './router.js';
import session from 'express-session';

const PORT = 9001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(session({
	secret: 'b7bae1bb-c40d-427e-989f-b43aeec2cafa',
	resave: false,
	saveUninitialized: true,
	cookie: {maxAge: 3600000}
}));


app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
