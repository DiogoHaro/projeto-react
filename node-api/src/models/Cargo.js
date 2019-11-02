const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const CargoSchema = new mongoose.Schema({
    nome:{
        type:String,
        require:true,
        unique:true
    },
    salario:{
        type: Number,
        require:true
    },
    createAt:{
        type:Date,
        default:Date.now()
    }
});

CargoSchema.plugin(mongoosePaginate);
mongoose.model('Cargo', CargoSchema);