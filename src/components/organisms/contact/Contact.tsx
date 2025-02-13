import { Input } from "@atoms/input/Input";
import { Button } from "@atoms/button/Button";
import { Container } from "../container/Container";

export const Contact = () => {
  return (
    <>
      <Container style="bg-[var(--main-color)]">
        <div className="w-full flex flex-col justify-center items-center">
          <h2>Contact</h2>
          <form action="" className="w-2/5 flex flex-col items-center">
            <Input label="Nom/Prénom" type="input" inputType="email"></Input>
            <Input label="Email" type="input" inputType="email"></Input>
            <Input label="Message" type="textarea" inputType="text"></Input>
            <Button
              style=""
              label="Envoyer"
              action={() => console.log("test")}
            />
          </form>
        </div>
      </Container>
    </>
  );
};
