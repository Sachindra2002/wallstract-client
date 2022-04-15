import WallpaperList from "../components/WallpaperList/WallpaperList";
import WallpaperCarousel from "../components/WallpaperCarousel/WallpaperCarousel";
import { SliderData } from "../components/WallpaperCarousel/SliderData";
import Navbar from "../components/Navigation/Navigation";

const DUMMY_WALLPAPERS = [
  {
    wallpaperId: "w1",
    title: "ocean",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1DAO3ioxCZQaDJFskSy3gOaYl3RPq1MpCHA&usqp=CAU",
    date: "date-here",
    size: "1MB",
    description: "A picture of the ocean",
  },
  {
    wallpaperId: "w2",
    title: "ocean",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1DAO3ioxCZQaDJFskSy3gOaYl3RPq1MpCHA&usqp=CAU",
    date: "date-here",
    size: "1MB",
    description: "A picture of the ocean",
  },
  {
    wallpaperId: "w3",
    title: "ocean",
    imageUrl:
      "https://images.unsplash.com/photo-1513553404607-988bf2703777?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    date: "date-here",
    size: "1MB",
    description: "A picture of the ocean",
  },
];

function HomePage() {
  return (
    <>
      <Navbar />
      <WallpaperCarousel slides={SliderData} />
      <WallpaperList wallpapers={DUMMY_WALLPAPERS} />
    </>
  );
}

export default HomePage;
