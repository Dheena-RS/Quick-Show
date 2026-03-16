import mongoose from "mongoose";
import 'dotenv/config';
let isConnected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', true);
    
    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, { family: 4 });
        isConnected = true;
        console.log('Database connected');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        throw new Error('Database connection failed'); // Crucial: Throw the error so the app/Inngest knows it failed
    }
}
export default connectDB;