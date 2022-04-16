import WallpaperList from "../components/WallpaperList/WallpaperList";
import Navbar from "../components/Navbar/Navbar";
import SlideShow from "../components/HeroSection/SlideShow";

const DUMMY_WALLPAPERS = [
  {
    wallpaperId: "w1",
    title: "ocean",
    imageUrl:
      "https://www.teahub.io/photos/full/28-284870_wallpaper-railway-evening-horizon-4k-wallpapers-16-9.jpg",
    date: "date-here",
    size: "1MB",
    description: "A picture of the ocean",
  },
  {
    wallpaperId: "w2",
    title: "ocean",
    imageUrl:
      "https://i.pinimg.com/originals/65/53/38/655338c996b7fc0b1c0a7e8df5c29c7d.jpg",
    date: "date-here",
    size: "1MB",
    description: "A picture of the ocean",
  },
  {
    wallpaperId: "w3",
    title: "ocean",
    imageUrl: "https://wallpaperaccess.com/full/1406842.jpg",
    date: "date-here",
    size: "1MB",
    description: "A picture of the ocean",
  },
  {
    wallpaperId: "w4",
    title: "ocean",
    imageUrl: "https://wallpapercave.com/wp/wp3137933.jpg",
    date: "date-here",
    size: "1MB",
    description: "A picture of the ocean",
  },
  {
    wallpaperId: "w5",
    title: "ocean",
    imageUrl: "https://wallpaperaccess.com/full/3137469.png",
    date: "date-here",
    size: "1MB",
    description: "A picture of the ocean",
  },
  {
    wallpaperId: "w6",
    title: "ocean",
    imageUrl:
      "https://www.teahub.io/photos/full/179-1793801_2k-wallpapers-16-9.jpg",
    date: "date-here",
    size: "1MB",
    description: "A picture of the ocean",
  },
  {
    wallpaperId: "w7",
    title: "ocean",
    imageUrl:
      "https://wallpapersmug.com/download/3840x2160/11a3dc/firewatch-game-sunset-artwork.jpg",
    date: "date-here",
    size: "1MB",
    description: "A picture of the ocean",
  },
  {
    wallpaperId: "w8",
    title: "ocean",
    imageUrl:
      "https://3.bp.blogspot.com/-hNWh6ShDJGs/XFUltMH2fsI/AAAAAAAABz0/_UwOXZDl3ZEtejlpgFQoUBJ_rjt3O9ipgCKgBGAs/w2560-h1440-c/mountains-fog-landscape-scenery-16-4K.jpg",
    date: "date-here",
    size: "1MB",
    description: "A picture of the ocean",
  },
];

function HomePage() {
  return (
    <>
      <Navbar />
      <SlideShow wallpapers={DUMMY_WALLPAPERS} />
      <WallpaperList wallpapers={DUMMY_WALLPAPERS} />
    </>
  );
}

export default HomePage;
