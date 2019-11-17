const mongoose = require('mongoose');
const Cargo = mongoose.model('Cargo');


module.exports  = {
    async index(req, res){
        const { page = 1 } = req.query;
        const cargos = await Cargo.paginate({},{ page, limit:5});

        return res.json(cargos);
    },
    async todosRegistros(req, res){
        const cargos = await Cargo.find();

        return res.json(cargos);
    },
    async store(req, res){
        const cargo = await Cargo.create(req.body);

        return  res.send('Registro Cadastrado com sucesso!');
    },
    async show(req,res){
        const cargo = await Cargo.findById(req.params.id);

        return res.json(cargo);
    },
    async update(req,res){
        const cargo = await Cargo.findByIdAndUpdate(req.params.id, req.body, {new:true});

        return res.send('Registro Alterado com sucesso!');
    },
    async delete(req,res){
        const cargo = await Cargo.findByIdAndRemove(req.params.id);

        return res.send('Registro Excluído com sucesso!');
    }
};