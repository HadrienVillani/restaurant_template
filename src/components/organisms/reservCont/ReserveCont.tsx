import { Aside } from "@molecules/nav/aside/Aside";
import { Container } from "../container/Container";
import { Button } from "@atoms/button/Button";

export const ReserveCont = () => {
  return (
    <>
      <Container style="bg-[var(--main-color)]">
        <Aside
          textStyle="text-[var(--white-color)] white text-center"
          titleStyle="text-[var(--white-color)]! text-center mb-5"
          title="Réserver une Table"
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
          <Button label="Réserver" style="" link="/reservePage" />
        </Aside>
      </Container>
    </>
  );
};
