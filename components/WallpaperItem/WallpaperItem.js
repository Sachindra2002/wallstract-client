import Card from "../WallpaperCard/WallpaperCard";
import classes from "./WallpaperItem.module.css";

function WallpaperItem(props) {
  return (
    <Card className="rounded-md">
      <div className="cursor-pointer rounded-md">
        <img className={classes.image} src={props.image} alt={props.title} />
      </div>
    </Card>
  );
}

export default WallpaperItem;
