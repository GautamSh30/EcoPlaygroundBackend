import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// https://res.cloudinary.com/drifkuib7/video/upload/v1713603882/Eco-Friendly_Habits___What_Is_Sustainable_Living____The_Dr_Binocs_Show___Peekaboo_Kidz_du8nd1.mp4
