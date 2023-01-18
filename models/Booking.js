import {Schema, model, models} from 'mongoose'

const bookingSchema = new Schema({
  	startDate: {
		type: Date,
		required: [true, 'Start date is required']
	},
	endDate: {
		type : Date,
		required: [true, 'End date is required']
	},
	user: {
		type: Schema.Types.ObjectId, ref: 'User',
		required : [true, 'User is required']
	},
	housing: {
		type: Schema.Types.ObjectId, ref: 'Housing',
		required : [true, 'Housing is required']
	},
	guests: {
		type: Number,
		required : [true, 'Guests is required']
	}
}, {
	timestamps: false,	
	versionKey: false
})

export default models.Booking || model('Booking', bookingSchema)