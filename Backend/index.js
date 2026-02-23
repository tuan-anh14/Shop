import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan"; 
import dotenv from "dotenv";
import connectDB from "./config/DBconnect.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
connectDB();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());
// Configure CORS to accept a single origin or comma-separated origins via env
const rawOrigins = process.env.FRONTEND_URLS || process.env.CORS_ORIGIN || '';
const allowedOrigins = rawOrigins.split(',').map(s => s.trim()).filter(Boolean);

app.use(cors({
    origin: function(origin, callback) {
        // allow non-browser requests like curl or server-to-server
        if (!origin) return callback(null, true);
        if (allowedOrigins.length === 0) return callback(null, true);
        if (allowedOrigins.includes(origin)) return callback(null, true);
        return callback(new Error('Not allowed by CORS'));
    },
    credentials: true
}));
app.use(cookieParser());

// Routes
import authRoutes from './routes/auth.js';

app.use('/api/auth', authRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});