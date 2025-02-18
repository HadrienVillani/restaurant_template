import { Image } from "@atoms/image/Image";
import { Aside } from "@molecules/nav/aside/Aside";
import { Contact } from "components/organisms/contact/Contact";
import { Container } from "components/organisms/container/Container";
import { ReserveCont } from "components/organisms/reservCont";
import cooker from "@images/cooker.avif";
function Home() {
  return (
    <>
      <section className="w-full h-[95vh] flex items-center justify-center">
        <div className="bg-stone-950 opacity-60 w-full h-[95vh] absolute z-2"></div>
        <Image
          name={"background.jpg"}
          style={"w-full h-[95vh] object-cover absolute z-1"}
          alt={"plusieurs plats"}
        />
        <div className="absolute z-3 flex w-3/5 flex-col text-center">
          <h2>Bienvenue sur le site de notre restaurant</h2>
          <p className="text-[var(--white-color)]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vero,
            culpa fuga dignissimos eius ipsum doloremque accusantium delectus
            aperiam sapiente perspiciatis praesentium, qui exercitationem porro
            labore fugiat cum asperiores recusandae.
          </p>
        </div>
      </section>
      <Container style="bg-[var(--main-color)]" contTextStyle="flex">
        <Image name="restaurant.avif" style="w-5/6" alt="restaurant" />
        <Aside
          title="Tantô restaurant"
          titleStyle="text-[var(--white-color)]"
          textStyle="text-[var(--white-color)]"
          containerStyle="ml-10 flex flex-col justify-center w-4/5"
        >
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
              officiis consequuntur voluptatum nulla nisi cupiditate sapiente
              repellat beatae, magnam molestiae hic officia praesentium ab
              necessitatibus quod ad, nesciunt vel doloribus?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              totam quis sunt, maxime culpa inventore vitae animi possimus
              molestias fuga ipsum aliquam accusamus qui temporibus, harum
              quidem, dicta ea dolorum.
            </p>
          </div>
        </Aside>
      </Container>
      <Container img={cooker} contTextStyle="w-3/5!">
        <h2 className="text-center text-[var(--main-color)]!">Nos formules</h2>
        <div className="flex mt-10]">
          <div className="bg-[var(--main-color)] text-[var(--white-color)]! p-10 w-2/4 flex justify-between flex-col">
            <div>
              <h3 className="">Formule du midi</h3>
              <h4>Entrée au choix :</h4>
              <ul>
                <li>Nems au poulet ou aux légumes</li>
                <li>Salade thaï au bœuf mariné</li>
                <li>Soupe miso traditionnelle</li>
              </ul>
              <h4>Plat au choix :</h4>
              <ul>
                <li>Poulet sauce aigre-douce & riz parfumé</li>
                <li>Pad thaï aux crevettes</li>
                <li>Bo bun bœuf ou végétarien</li>
              </ul>
              <h4>Dessert au choix :</h4>
              <ul>
                <li>Perles de coco</li>
                <li>Mochis glacés</li>
                <li>Salade de fruits exotiques</li>
              </ul>
              <h4>Boisson incluse :</h4>
              <ul>
                <li>Thé vert</li>
                <li>café</li>
                <li>soft</li>
              </ul>
            </div>
            <div className="w-full flex items-center justify-center bg-white p-5 mt-10 text-[var(--main-color)]">
              <h4>Prix : 14,90€</h4>
            </div>
          </div>
          <div className="border-[var(--main-color)] border-4 border-t-4 text-[var(--main-color)] p-10 w-2/4">
            <div className="flex flex-col justify-between">
              <h3 className="text-[var(--main-color)]!">Formule du soir</h3>
              <h4>Entrée au choix :</h4>
              <ul>
                <li>Nems végétariens ou au porc</li>
                <li>Soupe miso</li>
                <li>Salade de papaye verte avec sauce nuoc-mâm</li>
                <li>Raviolis vapeur (au poulet ou à la crevette)</li>
              </ul>
              <h4>Plat au choix :</h4>
              <ul>
                <li>Poulet teriyaki avec riz sauté</li>
                <li>
                  Boeuf sauté aux légumes croquants, sauce soja et gingembre
                </li>
                <li>Pho vietnamien avec boeuf ou poulet</li>
                <li>Curry thaïlandais au lait de coco, légumes et tofu</li>
              </ul>
              <h4>Accompagnement au choix :</h4>
              <ul>
                <li>Riz jasmin vapeur</li>
                <li>Nouilles sautées au wok</li>
                <li>Légumes sautés à l'ail et au sésame</li>
              </ul>
              <h4>Dessert au choix :</h4>
              <ul>
                <li>Perles de tapioca au lait de coco et mangue</li>
                <li>Mochis glacés (thé matcha ou sésame noir)</li>
                <li>Flan au lait de coco</li>
                <li>Sorbet maison à la lime ou au litchi</li>
              </ul>
              <h4>Boisson incluse :</h4>
              <ul>
                <li>Thé vert glacé maison</li>
                <li>Jus de fruit frais (lychee, mangue, grenade)</li>
                <li>Bière asiatique (Singha, Asahi) ou vin (au choix)</li>
              </ul>
            </div>
            <div className="w-full flex items-center justify-center bg-[var(--main-color)] p-5 mt-10 text-white">
              <h4>Prix : 25€</h4>
            </div>
          </div>
        </div>
      </Container>
      <ReserveCont />
      <Contact />
    </>
  );
}

export default Home;
