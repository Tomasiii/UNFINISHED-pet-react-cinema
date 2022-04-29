import gif from "@assets/gif/error.gif";

interface IProps {}
const Loading = ({}: IProps) => {
  return (
    <>
      <img src={gif} alt={"Loading"} /> Loading...
    </>
  );
};

export default Loading;
