import { StyledDetailsContainer } from "./StyledDetails.styled";

interface DataTypes {
  CommonName: string;
  IssuerCN: string;
  ValidFrom: string;
  ValidTo: string;
}

interface DetailsType {
  data: DataTypes[]
}

const Details = ({data}: DetailsType) => {

  return (
    <>
    {data.length > 0 && 
    <StyledDetailsContainer>
      <h4>Common Name: {data[0].CommonName}</h4>
      <p>Issuer CN: {data[0].IssuerCN}</p>
      <p>Valid From: {data[0].ValidFrom}</p>
      <p>Valid To: {data[0].ValidTo}</p>
    </StyledDetailsContainer> }
    {!data.length && <p>Nothing selected, select a certificate</p>}
    </>
  );
};

export default Details;
