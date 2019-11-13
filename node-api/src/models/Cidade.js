const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const CidadeSchema = new mongoose.Schema({
    nome:{
        type:String,
        require:true,
        unique:true
    },
    estado:{
        type: String,
        require:true
    },
    createAt:{
        type:Date,
        default:Date.now()
    }
});

CidadeSchema.plugin(mongoosePaginate);
mongoose.model('Cidade', CidadeSchema);