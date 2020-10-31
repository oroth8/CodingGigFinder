const express = require('express');
const router = express.Router();
const db = require('../config/connection');
const Gig = require('../modals/Gig');

// Get gig list
router.get('/', (req,res)=> 
Gig.findAll()
.then(gigs => {
    res.render('gigs', {
        gigs
    });
}).catch(err=>console.log(err)));

// Display add gig form
router.get('/add', (req,res)=> res.render('add'));
// add a gig
router.get('/add', (req,res) => {
    const data = {
        title: "Simply wordpress website",
        technologies: "Wordpress",
        budget: '$2000',
        description: "lasdjflaksjdf;lasdkjfla;sdkfjasdl;kfjasdlkfjsda;lfjas;ldfjasdlfkjasd;fljasdflkjasldfj",
        contact_email: 'user2 @gmail.com'
    }
    let {title, technologies, budget, description, contact_email} = data;
    // insert into table
    Gig.create({
        title,
        technologies,
        description,
        budget,
        contact_email
    }).then(gig => res.redirect('/gigs')).catch(err=>console.log(err));
})
module.exports = router;