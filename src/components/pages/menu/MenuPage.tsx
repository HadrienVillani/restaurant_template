import { dataRestaurant } from "@data/dataRestaurant";
import { Container } from "components/organisms/container/Container";
export const MenuPage = () => {
  const data = dataRestaurant.restaurant.menu;
  return (
    <>
      <Container>
        <h2 className="text-center">Menu</h2>
        <div className="grid grid-cols-2 mt-10 text-white">
          <div className="menu-categorie">
            <h3>Entrées</h3>
            {data.entrees.map((flat) => {
              return (
                <div className="m-5">
                  <h4>{flat.nom}</h4>
                  <p>{flat.description}</p>
                  <span>{flat.prix} €</span>
                </div>
              );
            })}
          </div>
          <div className="menu-categorie">
            <h3>Plats</h3>
            {data.plats_principaux.map((flat) => {
              return (
                <div className="m-5">
                  <h4>{flat.nom}</h4>
                  <p>{flat.description}</p>
                  <span>{flat.prix} €</span>
                </div>
              );
            })}
          </div>
          <div className="menu-categorie">
            <h3>Desserts</h3>
            {data.desserts.map((flat) => {
              return (
                <div className="m-5">
                  <h4>{flat.nom}</h4>
                  <p>{flat.description}</p>
                  <span>{flat.prix} €</span>
                </div>
              );
            })}
          </div>
          <div className="menu-categorie">
            <h3>Boissons</h3>
            {data.boissons.map((flat) => {
              return (
                <div className="m-5">
                  <h4>{flat.nom}</h4>
                  <p>{flat.description}</p>
                  <span>{flat.prix} €</span>
                </div>
              );
            })}
          </div>
          <div className="menu-categorie">
            <h3>Sushis/Sashimis</h3>
            {data.sushis_sashimis.map((flat) => {
              return (
                <div className="m-5">
                  <h4>{flat.nom}</h4>
                  <p>{flat.description}</p>
                  <span>{flat.prix} €</span>
                </div>
              );
            })}
          </div>
          <div className="menu-categorie">
            <h3>Accompagnements</h3>
            {data.accompagnements.map((flat) => {
              return (
                <div className="m-5">
                  <h4>{flat.nom}</h4>
                  <p>{flat.description}</p>
                  <span>{flat.prix} €</span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
};
