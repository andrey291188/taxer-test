import { StyledSelectListDetailsContainer } from "./StyledSelectListDitails.styled";
import { RiDeleteBin6Line } from "react-icons/ri";

interface SelectListDetailsType {
    title: string;
    onDelete: (id: string) => void;
  }

const SelectListDetails = ({title, onDelete}: SelectListDetailsType) => {
  return (
    <StyledSelectListDetailsContainer>
        <h3>{title}</h3>
        <button onClick={() => onDelete(title)}><RiDeleteBin6Line size={24} color="red" /></button>
    </StyledSelectListDetailsContainer>
  );
};

export default SelectListDetails;
