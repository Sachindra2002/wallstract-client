import WallpaperItem from "../WallpaperItem/WallpaperItem";
import classes from "./WallpaperList.module.css";

function WallpaperList(props) {
  return (
    <ul className={classes.list}>
      {props.wallpapers.map((wallpaper) => (
        <WallpaperItem
          key={wallpaper.wallpaperId}
          id={wallpaper.wallpaperId}
          image={wallpaper.imageUrl}
          title={wallpaper.title}
        />
      ))}
    </ul>
  );
}

export default WallpaperList;
