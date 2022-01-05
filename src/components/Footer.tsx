import { NextPage } from "next";
import Copyright from "../Copyright";

interface Props {
}

const Footer: NextPage<Props> = (props) => {
  return (
      <Copyright />
  );
};

export default Footer;