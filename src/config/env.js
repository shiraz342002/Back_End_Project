export const env = {
	port: process.env.PORT || 3000,
	nodeEnv: process.env.NODE_ENV || "development",
	mongodbUri: process.env.DB_URI || "mongodb://localhost:27017/IPTV",
	
	jwtSecret: process.env.JWT_SECRET || "my_temporary_secret",
};
