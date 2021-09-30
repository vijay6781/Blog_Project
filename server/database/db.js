import mongoose from 'mongoose';



const Connection = async () => {
    const URL = `mongodb+srv://user:codeforproject@myblog.ov5uo.mongodb.net/MYBLOG?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;