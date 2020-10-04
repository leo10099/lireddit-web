import Navbar from "../components/Navbar";
import { withUrqlClient } from "next-urql";
import { createUrlqClient } from "../utils/createUrlqClient";

const Index = () => (
  <div>
    <Navbar />
  </div>
);

export default withUrqlClient(createUrlqClient, { ssr: true })(Index);
