const mongoose = require('mongoose');
const Estado = mongoose.model('Estado');


module.exports  = {
  async index(req, res){
      const { page = 1 } = req.query;
      const estados = await Estado.paginate({},{ page, limit:5});

      return res.json(estados);
  },
  async store(req, res){
    const estado = await Estado.create(req.body);

    return  res.send('Registro Cadastrado com sucesso!');
  },
    async show(req,res){
      const estado = await Estado.findById(req.params.id);

      return res.json(estado);
    },
    async update(req,res){
      const estado = await Estado.findByIdAndUpdate(req.params.id, req.body, {new:true});

      return res.send('Registro Alterado com sucesso!');
    },
    async delete(req,res){
      const estado = await Estado.findByIdAndRemove(req.params.id);

      return res.send('Registro Excluído com sucesso!');
    }
};