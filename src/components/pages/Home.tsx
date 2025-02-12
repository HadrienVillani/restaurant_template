import { Image } from "@atoms/image/Image";
import Input from "@atoms/input/Input";
import { dataRestaurant } from "@data/dataRestaurant";
import { Aside } from "@molecules/nav/aside/Aside";
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
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vero,
            culpa fuga dignissimos eius ipsum doloremque accusantium delectus
            aperiam sapiente perspiciatis praesentium, qui exercitationem porro
            labore fugiat cum asperiores recusandae.
          </p>
        </div>
      </section>
      <Container style="bg-amber-600">
        <Aside
          textStyle="text-white text-center"
          titleStyle="text-white! text-center mb-5"
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
          <thead className="text-white border-2 rounded">
            <tr className="">
              <th className="bg-amber-600 p-5 border-6 border-[#242424]">
                Jour
              </th>
              <th className="bg-amber-600 p-5 border-6 border-[#242424]">
                Horraire du midi
              </th>
              <th className="bg-amber-600 p-5 border-6 border-[#242424]">
                Horraire du soir
              </th>
            </tr>
          </thead>
          <tbody>
            {dataRestaurant.restaurant.horaires.map((day, key) => {
              return (
                <tr key={key}>
                  <th className="bg-neutral-600 text-white p-5 border-6 border-[#242424]">
                    {day.name}
                  </th>
                  <th className="bg-neutral-600 text-white p-5 border-6 border-[#242424]">
                    {day.firstOpen[0]} - {day.firstOpen[1]}{" "}
                  </th>
                  <th className="bg-neutral-600 text-white p-5 border-6 border-[#242424]">
                    {day.secondOpen[0]} - {day.secondOpen[1]}{" "}
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Container>
      <Container style="bg-amber-600" contTextStyle="flex">
        <Image name="restaurant.avif" style="w-5/6" alt="restaurant" />
        <Aside
          title="Tantô restaurant"
          titleStyle="tewt-white"
          textStyle="text-white"
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
      <Container style="bg-neutral-100">
        <h2 className="text-center text-amber-600!">Nos formules</h2>
        <p className="text-amber-600 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
          velit facere obcaecati commodi dicta quod quis provident laboriosam
          odit. Optio, non impedit. Alias dolor debitis obcaecati consequuntur
          optio perferendis hic.
        </p>
        <div className="flex mt-10">
          <div className="border-t-amber-600 border-t-4 text-amber-600 p-10 w-2/4">
            <h3 className="text-amber-600!">Formule du midi</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              aliquid, ipsam eos odit sequi obcaecati repellendus unde ab
              mollitia aperiam dolores ducimus illum temporibus assumenda
              tempore suscipit consequatur laboriosam accusantium!
            </p>
          </div>
          <div className="border-t-amber-500 border-l-amber-500 border-l-4 border-t-4 text-amber-600 p-10 w-2/4">
            <h3 className="text-amber-600!">Formule du soir</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ab
              vitae error vel id rem facilis dolor et libero repellendus odit,
              corrupti, esse vero. At dolorum vero nemo sapiente in.
            </p>
          </div>
        </div>
      </Container>

      <Container style="bg-amber-600">
        <h2>Contact</h2>
        <form action="">
          <label htmlFor="">Nom /Prénom</label>
          <Input></Input>
          <label htmlFor="">Email</label>
          <Input></Input>
          <label htmlFor="">Message</label>
          <Input></Input>
        </form>
      </Container>
    </>
  );
}

export default Home;
