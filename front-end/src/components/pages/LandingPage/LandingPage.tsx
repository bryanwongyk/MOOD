import MyButton from "components/Button/Button";
import { FunctionComponent, ReactElement } from "react";

const LandingPage: FunctionComponent = (): ReactElement => {
  return (
    <>
        <MyButton dark>Sign up</MyButton>
        <p>
        This is landing page
        </p>
    </>
  );
};

export default LandingPage;
