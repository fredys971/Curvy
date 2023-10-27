import express from "express";


const router = express.Router();



import  AccueilController  from './controllers/Accueil.js';

import  ContactController  from "./controllers/contact.js";

import  MoncompteController from "./controllers/moncompte.js";

import  PanierController  from "./controllers/panier.js";

import  ProduitsController from "./controllers/produits.js";

import  aproposController  from "./controllers/apropos.js";

import  updateUser  from "./controllers/update.js";

import  { addContact,addContactSubmit}from "./controllers/addContact.js";

import  DeleteController  from "./controllers/deleteContact.js";

import { showFormlogin, login } from './controllers/Formlogin.js';


import  { showRegistrationForm, register }  from './controllers/inscription.js';

import  addUser  from './controllers/addUser.js';

import  createProduct from './controllers/createProduct.js';

import  readProduct from './controllers/readProduct.js';

import  updateProduct from './controllers/updateProduct.js';

import  deleteProduct  from './controllers/deleteProduct.js';

import  createOrder  from './controllers/createOrders.js';

import  readOrder  from './controllers/readOrders.js';

import  updateOrder  from './controllers/updateOrders.js';

import  deleteOrder  from './controllers/deleteOrders.js';

import termsController from './controllers/terms.js';

import { searchFunction } from './controllers/search.js';



const checkAuthentication = (req, res, next) => {
    if(!req.session.isLogged) {
        res.redirect('/Connexion');
        return;
    }
    next();
}




router.get('/', AccueilController);

router.get('/contact', ContactController);

router.get('/terms', termsController);

router.get('/moncompte', MoncompteController);

router.get('/panier', PanierController);

router.get('/produits', ProduitsController);

router.get('/apropos', aproposController);

router.get('/contact', addContact);

router.post('/contact/add', addContactSubmit);

router.post('/contact/delete', DeleteController);

router.get('/Connexion',showFormlogin);

router.post ('/login',login);

router.get('/Inscription', showRegistrationForm);

router.post('/Inscription',register);

router.post('/users/add', addUser);

router.post('/updateUser', updateUser);

router.post('/products', createProduct); 

router.get('/products', readProduct); 

router.put('/products/:id', updateProduct); 

router.delete('/products/:id', deleteProduct); 

router.post('/orders', createOrder);

router.get('/orders/:id', readOrder);

router.put('/orders/:id', updateOrder);

router.delete('/orders/:id', deleteOrder);

router.get('/recherche', searchFunction);







export default router;
