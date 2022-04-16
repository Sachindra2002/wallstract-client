import WallpaperItem from "../WallpaperItem/WallpaperItem";
import classes from "./WallpaperList.module.css";

function WallpaperList(props) {
  return (
    <div>
      <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-3 gap-10 m-10">
        {props.wallpapers.map((wallpaper) => (
          <WallpaperItem
            key={wallpaper.wallpaperId}
            id={wallpaper.wallpaperId}
            image={wallpaper.imageUrl}
            title={wallpaper.title}
          />
        ))}
      </div>
    </div>
  );
}

export default WallpaperList;
