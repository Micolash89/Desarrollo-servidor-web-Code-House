import mongoose from 'mongoose';

const collection = 'Users';
const schema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    role: String,
    orders: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Orders',
            default: []
        }
    ]
})
const usersModel = mongoose.model(collection, schema);
export default usersModel;