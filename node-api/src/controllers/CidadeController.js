const mongoose = require('mongoose');
const Cidade = mongoose.model('Cidade');


module.exports  = {
    async index(req, res){
        const { page = 1 } = req.query;
        const cidades = await Cidade.paginate({},{ page, limit:5});

        return res.json(cidades);
    },
    async store(req, res){
        const cidade = await Cidade.create(req.body);

        return  res.send('Registro Cadastrado com sucesso!');
    },
    async show(req,res){
        const cidade = await Cidade.findById(req.params.id);

        return res.json(cidade);
    },
    async update(req,res){
        const cidade = await Cidade.findByIdAndUpdate(req.params.id, req.body, {new:true});

        return res.send('Registro Alterado com sucesso!');
    },
    async delete(req,res){
        const cidade = await Cidade.findByIdAndRemove(req.params.id);

        return res.send('Registro Excluído com sucesso!');
    }
};