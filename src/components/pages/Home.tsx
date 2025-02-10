import { Image } from "@atoms/image/Image";
import { dataRestaurant } from "@data/dataRestaurant";
import { Aside } from "@molecules/nav/aside/Aside";
import { Container } from "components/organisms/container/Container";

function Home() {
  return (
    <>
      <section>
        <Image
          name={"background.jpg"}
          style={"w-full"}
          alt={"plusieurs plats"}
        />
      </section>
      <Container>
        <Aside style="text-white text-center" title="À propos">
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
        <h2>Horraire</h2>
        <table className="w-full mt-10">
          <thead className="text-white border-2 rounded">
            <tr className="">
              <th className="p-5">Jour</th>
              <th className="p-5">Horraire du midi</th>
              <th className="p-5">Horraire du soir</th>
            </tr>
          </thead>
          <tbody>
            {dataRestaurant.restaurant.horaires.map((day, key) => {
              return (
                <tr key={key}>
                  <th className="bg-amber-600 text-white p-5 border-2">
                    {day.name}
                  </th>
                  <th className="bg-amber-600 text-white p-5 border-2">
                    {day.firstOpen[0]} - {day.firstOpen[1]}{" "}
                  </th>
                  <th className="bg-amber-600 text-white p-5 border-2">
                    {day.secondOpen[0]} - {day.secondOpen[1]}{" "}
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Container>
    </>
  );
}

export default Home;
