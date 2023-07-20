import { ContainerHome, TitleHome } from "./Home.styled";

export default function Home() {
  return (
    <ContainerHome>
      <TitleHome>
        Task manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </TitleHome>
    </ContainerHome>
  );
}