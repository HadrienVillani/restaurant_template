import { Image } from "@atoms/image/Image";
import { dataRestaurant } from "@data/dataRestaurant";
import { Aside } from "@molecules/nav/aside/Aside";
import { Contact } from "components/organisms/contact/Contact";
import { Container } from "components/organisms/container/Container";

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
      <Container style="bg-[var(--main-color)]">
        <Aside
          textStyle="text-[var(--white-color)] white text-center"
          titleStyle="text-[var(--white-color)]! text-center mb-5"
          title="À propos"
          containerStyle=""
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            voluptate deleniti provident voluptatum distinctio ipsum molestiae
            ad! Repellendus sint nesciunt nulla distinctio quibusdam ex,
            asperiores eos consectetur quos praesentium quidem?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            aperiam eum, natus eligendi non exercitationem quisquam asperiores
            ipsam officiis maxime ducimus officia sapiente explicabo, voluptas
            consequuntur harum, quam ipsa ad!
          </p>
        </Aside>
      </Container>
      <Container>
        <h2>Horraires</h2>
        <table className="w-full mt-10">
          <thead className="text-[var(--white-color)] border-2 rounded">
            <tr className="">
              <th className="bg-[var(--main-color)] p-5 border-6 border-[#242424]">
                Jour
              </th>
              <th className="bg-[var(--main-color)] p-5 border-6 border-[#242424]">
                Horraire du midi
              </th>
              <th className="bg-[var(--main-color)] p-5 border-6 border-[#242424]">
                Horraire du soir
              </th>
            </tr>
          </thead>
          <tbody>
            {dataRestaurant.restaurant.horaires.map((day, key) => {
              return (
                <tr key={key}>
                  <th className="bg-neutral-600 text-[var(--white-color)] p-5 border-6 border-[#242424]">
                    {day.name}
                  </th>
                  <th className="bg-neutral-600 text-[var(--white-color)] p-5 border-6 border-[#242424]">
                    {day.firstOpen[0]} - {day.firstOpen[1]}{" "}
                  </th>
                  <th className="bg-neutral-600 text-[var(--white-color)] p-5 border-6 border-[#242424]">
                    {day.secondOpen[0]} - {day.secondOpen[1]}{" "}
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Container>
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
      <Container style="bg-neutral-100" contTextStyle="w-3/5!">
        <h2 className="text-center text-[var(--main-color)]!">Nos formules</h2>
        <p className="text-[var(--main-color)] text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
          velit facere obcaecati commodi dicta quod quis provident laboriosam
          odit. Optio, non impedit. Alias dolor debitis obcaecati consequuntur
          optio perferendis hic.
        </p>
        <div className="flex mt-10">
          <div className="border-t-[var(--main-color)] border-t-4 text-[var(--main-color)] p-10 w-2/4">
            <h3 className="text-[var(--main-color)]!">Formule du midi</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              aliquid, ipsam eos odit sequi obcaecati repellendus unde ab
              mollitia aperiam dolores ducimus illum temporibus assumenda
              tempore suscipit consequatur laboriosam accusantium!
            </p>
          </div>
          <div className="border-t-[var(--main-color)] border-l-[var(--main-color)] border-l-4 border-t-4 text-[var(--main-color)] p-10 w-2/4">
            <h3 className="text-[var(--main-color)]!">Formule du soir</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ab
              vitae error vel id rem facilis dolor et libero repellendus odit,
              corrupti, esse vero. At dolorum vero nemo sapiente in.
            </p>
          </div>
        </div>
      </Container>
      <Contact />
    </>
  );
}

export default Home;
