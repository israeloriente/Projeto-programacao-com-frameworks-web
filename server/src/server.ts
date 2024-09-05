import app from "./main";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORTCONNECT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
