import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>WallStract</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Wallpapers</Link>
          </li>
          <li>
            <Link to="/new-meetup">Collections</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
