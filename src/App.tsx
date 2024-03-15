import { useState } from "react";
import { StyledAppContainer } from "./StyledApp.styled";
import SelectListDetails from "./components/SelectListDetails/SelectListDetails";

function App() {
  const [certificates, setCertificates] = useState([
    {
      CommonName: "Мельник Іван Іванович",
      IssuerCN: "КНЕДП 'ДФС'",
      ValidFrom: "2024-01-01",
      ValidTo: "2025-01-01",
    },
    {
      CommonName: "Бондаренко Максим Олександрович",
      IssuerCN: "КНЕДП 'Вчасно'",
      ValidFrom: "2024-01-01",
      ValidTo: "2025-01-01",
    },
    {
      CommonName: "Шевченко Анатолій Анатолійович",
      IssuerCN: "КНЕДП 'ПриватБанк'",
      ValidFrom: "2024-01-01",
      ValidTo: "2025-01-01",
    },
  ]);
  
  const handleDeleted = (id: string )=> {
    setCertificates(prevCertificates => {
      return prevCertificates.filter(certificates => certificates.CommonName !== id);
    });
  };

  return <StyledAppContainer>
    {certificates.map(({CommonName})=> (
      <SelectListDetails title={CommonName} onDelete={handleDeleted} key={CommonName}/>
    ))}
    
  </StyledAppContainer>;
}

export default App;
