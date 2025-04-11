const express = require('express')
const router = express.Router()
const {todo} = require('../models')

router.get('/', async (req, res) => {
    const allData = await todo.findAll();
    res.json(allData);
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const Data = await todo.findOne({where: {id : id}});
    res.json(Data);
});

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const {activity} = req.body;
    const Data = await todo.update({activity}, {where: {id : id}, });
    res.json('todo updated');
});
router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    const data = await todo.destroy({where: {id: id}});
    res.json('todo deleted')
})
router.post('/', async (req,res)=>{
    const activity = req.body
 await todo.create(activity)
 res.json(activity)
})
module.exports = router