import { StyledDetailsContainer } from "./StyledDetails.styled";

const Details = () => {
  return (
    <StyledDetailsContainer>
      <h4>Common Name: {}</h4>
      <p>Issuer CN: {}</p>
      <p>Valid From: {}</p>
      <p>Valid To: {}</p>
    </StyledDetailsContainer>
  );
};

export default Details;
