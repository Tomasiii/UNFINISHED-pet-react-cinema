import AuthButton from "@components/VideoPlayer/AuthPlaceholder/AuthButton";

interface IProps {
  slug: string;
}

const AuthPlaceholder = ({ slug }: IProps) => {
  return (
    <>
      <div>You must to be logged in to start watching</div>
      <AuthButton slug={slug} />
    </>
  );
};

export default AuthPlaceholder;
