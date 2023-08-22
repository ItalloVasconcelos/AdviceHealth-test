import { SCard } from "../../components/Card";
import { Sidebar } from "../../components/Sidebar";


export const BookingPage = () => {
  return (
    <div>
      <Sidebar />
      <div style={{ margin: "59px" }}>
        <div>
          <h1>Booking Page</h1>
        </div>

        <SCard title={"Cadastro de Paciente"} width={80} children={undefined}></SCard>

      </div>
    </div>
  );
};
