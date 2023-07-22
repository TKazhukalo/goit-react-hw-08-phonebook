import { ContainerHome, ImageHome, TitleHome } from "./Home.styled";

export default function Home() {
  const imageUrl = "https://cdn.pixabay.com/photo/2017/06/29/01/02/home-office-2452806_960_720.jpg";
  return (
    <ContainerHome>
      <TitleHome>
        Task manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
        <ImageHome src={imageUrl} alt="registration" width="640" />
      </TitleHome>
    </ContainerHome>
  );
};