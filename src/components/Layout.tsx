import { Box } from "@mui/system";
import { NextPage } from "next";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {
}

const Layout: NextPage<Props> = (props) => {
  return (
    <Box>
        <Navbar />
        {props.children}
        <Footer/>
    </Box>
  );
};

export default Layout;