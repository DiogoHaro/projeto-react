const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const EstadoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required:true,
    },
    createAt:{
        type:Date,
        default:Date.now()
    },
});

EstadoSchema.plugin(mongoosePaginate);
mongoose.model('Estado', EstadoSchema);