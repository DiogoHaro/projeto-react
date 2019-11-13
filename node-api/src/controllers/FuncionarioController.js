const mongoose = require('mongoose');
const Funcionario = mongoose.model('Funcionario');


module.exports  = {
    async index(req, res){
        const { page = 1 } = req.query;
        const Funcionarios = await Funcionario.paginate({},{ page, limit:5});

        return res.json(Funcionarios);
    },
    async store(req, res){
        const funcionario = await Funcionario.create(req.body);

        return  res.send('Registro Cadastrado com sucesso!');
    },
    async show(req,res){
        const funcionario = await Funcionario.findById(req.params.id);

        return res.json(funcionario);
    },
    async update(req,res){
        const funcionario = await Funcionario.findByIdAndUpdate(req.params.id, req.body, {new:true});

        return res.send('Registro Alterado com sucesso!');
    },
    async delete(req,res){
        const funcionario = await Funcionario.findByIdAndRemove(req.params.id);

        return res.send('Registro Excluído com sucesso!');
    }
};