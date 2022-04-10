import WallpaperItem from "../WallpaperItem/WallpaperItem";
import classes from "./MeetupList.module.css";

function WallpaperList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((wallpaper) => (
        <WallpaperItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
