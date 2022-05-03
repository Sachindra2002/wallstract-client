import WallpaperList from "../components/WallpaperList/WallpaperList";
import Navbar from "../components/Navbar/Navbar";
import SlideShow from "../components/HeroSection/SlideShow";
import Footer from "../components/Footer/Footer";

const DUMMY_WALLPAPERS = [
  {
    wallpaperId: "w1",
    title: "Railway",
    imageUrl:
      "https://www.teahub.io/photos/full/28-284870_wallpaper-railway-evening-horizon-4k-wallpapers-16-9.jpg",
    date: "date-here",
    size: "1MB",
    description: "Southern Railway",
  },
  {
    wallpaperId: "w2",
    title: "Twilight Saga",
    imageUrl:
      "https://i.pinimg.com/originals/65/53/38/655338c996b7fc0b1c0a7e8df5c29c7d.jpg",
    date: "date-here",
    size: "1MB",
    description: "Twilight Saga",
  },
  {
    wallpaperId: "w3",
    title: "Nightfall",
    imageUrl: "https://wallpaperaccess.com/full/1406842.jpg",
    date: "date-here",
    size: "1MB",
    description: "Nightfall",
  },
  {
    wallpaperId: "w4",
    title: "High Sierra",
    imageUrl: "https://wallpapercave.com/wp/wp3137933.jpg",
    date: "date-here",
    size: "1MB",
    description: "High Sierra",
  },
  {
    wallpaperId: "w5",
    title: "Retro Nightscape",
    imageUrl: "https://wallpaperaccess.com/full/3137469.png",
    date: "date-here",
    size: "1MB",
    description: "Retro Nightscape",
  },
  {
    wallpaperId: "w6",
    title: "Downtown Cityscape",
    imageUrl:
      "https://www.teahub.io/photos/full/179-1793801_2k-wallpapers-16-9.jpg",
    date: "date-here",
    size: "1MB",
    description: "Downtown Cityscape",
  },
  {
    wallpaperId: "w7",
    title: "Dawn",
    imageUrl:
      "https://wallpapersmug.com/download/3840x2160/11a3dc/firewatch-game-sunset-artwork.jpg",
    date: "date-here",
    size: "1MB",
    description: "Dawn",
  },
  {
    wallpaperId: "w8",
    title: "Clouds",
    imageUrl:
      "https://3.bp.blogspot.com/-hNWh6ShDJGs/XFUltMH2fsI/AAAAAAAABz0/_UwOXZDl3ZEtejlpgFQoUBJ_rjt3O9ipgCKgBGAs/w2560-h1440-c/mountains-fog-landscape-scenery-16-4K.jpg",
    date: "date-here",
    size: "1MB",
    description: "Above the Clouds",
  },
];

function HomePage() {
  return (
    <>
      <Navbar />
      <SlideShow wallpapers={DUMMY_WALLPAPERS} />
      <WallpaperList wallpapers={DUMMY_WALLPAPERS} />
      <Footer />
    </>
  );
}

export default HomePage;
