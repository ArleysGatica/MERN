import config from 'config';
import mongoose from 'mongoose';

const dbConfig = config.get('MERN.dbConfig.dbName');

//Conexion a la base de datos
mongoose.connect(dbConfig, {
    useNewUrlParser: true,  
    useUnifiedTopology: true,   
    useFindAndModify: false
}).then(() => {
    console.log('Conexion a la base de datos establecida');
}).catch(err => {
    console.log('Error al conectar a la base de datos', err);
});



