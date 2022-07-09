import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";

function FavoritesPage() {
  const context = useContext(FavoritesContext);

  let content =
    context.totalFavorites === 0 ? (
      <p>You do not have any favorites</p>
    ) : (
      <MeetupList meetups={context.favorites} />
    );

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
