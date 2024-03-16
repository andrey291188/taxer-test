import { StyledSelectListDetailsContainer } from "./StyledSelectListDitails.styled";
import { RiDeleteBin6Line } from "react-icons/ri";

interface SelectListDetailsType {
    title: string;
    onDelete: (id: string) => void;
    onChoice: (id: string) => void;
  }

const SelectListDetails = ({title, onDelete, onChoice}: SelectListDetailsType) => {
  return (
    <StyledSelectListDetailsContainer onClick={() => onChoice(title)}>
        <h3>{title}</h3>
        <button className="deleted-button " onClick={() => onDelete(title)}><RiDeleteBin6Line size={24} color="red" /></button>
    </StyledSelectListDetailsContainer>
  );
};

export default SelectListDetails;
