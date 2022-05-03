import classes from "./WallpaperItem.module.css";

function WallpaperItem(props) {
  const click = () => {
    alert(props.description);
  };

  return (
    <div className="card" onClick={click}>
      <div className="cursor-pointer rounded-md">
        <img className={classes.image} src={props.image} alt={props.title} />
        <div className="desc">
          <h2>{props.description}</h2>
        </div>
      </div>
    </div>
  );
}

export default WallpaperItem;
