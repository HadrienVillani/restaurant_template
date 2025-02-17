import { dataRestaurant } from "@data/dataRestaurant";
import { Container } from "components/organisms/container/Container";

export const ReservePage = () => {
  return (
    <>
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
    </>
  );
};
