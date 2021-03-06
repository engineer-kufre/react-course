import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  const context = useContext(FavoritesContext);

  const itemIsFavorite = context.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      context.removeFavorite(props.id)
    } else {
      context.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address
      })
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? 'Remove from favorites' : 'Add To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
