import {Router} from 'express';

const router = Router();

/**
 * Criando a rota da página inicial
 */
router.get('/', (req, res) => res.render('index'));

/**
 * Criando a rota da página de clientes
 */
router.get('/bio', (req, res) => res.render('bio'));

router.get('/home', (req,res) => res.render('home'));

router.get('/contato', (req, res) => res.render('contato'));

router.get('/portfolio', (req, res) => res.render('portfolio'));



export default router;