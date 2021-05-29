import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    name: String,
    lastname: String,
    email: String,
    admin: Boolean,    
    password: String
});

const User = mongoose.model('User',UserSchema);

export default User;