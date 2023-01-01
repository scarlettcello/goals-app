import { connect } from 'mongoose';

const connectDB = async () => {
  try {
    const conn = connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

export default connectDB;