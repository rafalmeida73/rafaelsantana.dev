import { Player as Lottie } from "@lottiefiles/react-lottie-player";

const NotFound = () => {
  return (
    <Lottie
      autoplay
      loop
      src="/lottie/404.json"
      style={{ height: "50dvh", width: "unset" }}
    />
  );
};

export default NotFound;
