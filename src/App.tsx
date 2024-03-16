import { useEffect, useRef, useState } from "react";
import { StyledAppContainer } from "./StyledApp.styled";
import SelectListDetails from "./components/SelectListDetails/SelectListDetails";
import Details from "./components/Details/Details";
import Modal from "./components/Modal/Modal";
import DragDrop from "./components/DragDrop/DragDrop";

interface DataTypes {
  CommonName: string;
  IssuerCN: string;
  ValidFrom: string;
  ValidTo: string;
}

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
  const [certDetails, setCertDetails] = useState<DataTypes[]>([]);
  const [showModal, setShowModal] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const localeCertificates = localStorage.getItem("localeCertificates");
    if (localeCertificates) {
      return setCertificates(JSON.parse(localeCertificates));
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem("localeCertificates", JSON.stringify(certificates));
  }, [certificates]);

  const handleDeleted = (id: string) => {
    setCertificates((prevCertificates) => {
      return prevCertificates.filter(
        (certificates) => certificates.CommonName !== id
      );
    });
  };

  const choiceCert = (id: string) => {
    const cert = certificates.filter((item) => item.CommonName === id);
    setCertDetails(cert);
  };

  const handleClickShowModal = () => {
    setShowModal(!showModal)
  }

  return (
    <>
    <StyledAppContainer>
      <button className="add-button" type="button" onClick={handleClickShowModal}>Add cert</button>
      <div className="container-cert">
        <ul className="list-selected">
          {certificates.map(({ CommonName }) => (
            <SelectListDetails
              title={CommonName}
              onDelete={handleDeleted}
              onChoice={choiceCert}
              key={CommonName}
            />
          ))}
        </ul>
        <Details data={certDetails} />
      </div>
    </StyledAppContainer>
    {showModal && <Modal toggleModal={setShowModal}><DragDrop/></Modal>}
    </>
  );
}

export default App;
