import { useParams } from "react-router-dom";
const Headphone = () => {
  const { singleProductId } = useParams();

  return <div>{singleProductId}</div>;
};

export default Headphone;
