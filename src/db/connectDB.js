import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(String(process.env.MONGO_URI));
        console.log(connection.connection.host);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

export {
    connectDB
};