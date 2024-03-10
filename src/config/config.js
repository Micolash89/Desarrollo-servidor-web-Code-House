import dotenv from 'dotenv';

dotenv.config();

export default {
    mongoURL: process.env.MONGO_URL,
    port: process.env.PORT || 8080,
    localHost: process.env.LOCAL_HOST,
}