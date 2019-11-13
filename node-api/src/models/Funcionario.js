const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const FuncionarioSchema = new mongoose.Schema({
    nome:{
        type:String,
        require:true,
        unique:true
    },
    cargo:{
        type:String,
        require:true
    },
    cidade:{
        type: String,
        require:true
    },
    createAt:{
        type:Date,
        default:Date.now()
    }
});

FuncionarioSchema.plugin(mongoosePaginate);
mongoose.model('Funcionario', FuncionarioSchema);