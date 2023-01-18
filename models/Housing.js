import {Schema, model, models} from 'mongoose'

const parkingSchema = new Schema({
	poiID: {
		type: String
	},
	nombre:{
		type:String,
		required: [true, 'Nombre is required'],
		trim: true
	},
	direccion: {
		type : String,
		required: [true, 'Direccion is required'],
	},
	latitud: {
		type: Number,
		required : [true, 'Latitud is required']
	},
	longitud: {
		type: Number,
		required : [true, 'Longitud is required']
	},
	capacidad: {
		type: Number,
		required : [true, 'Capacidad is required']
	},
	libres: {
		type: Number,
		required : [true, 'Libres is required']
	},
	correo: {
		type: Number,
		required : [true, 'Correo is required']
	}
}, {
	timestamps: false,
	versionKey: false
})

export default models.Housing || model('Housing',housingSchema)