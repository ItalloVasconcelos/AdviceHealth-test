import { SCard } from "../../components/Card";
import { NavBar } from "../../components/Navbar";


export const BookingPage = () => {
  return (
    <div>
      <NavBar />
      <div>
        <div>
          <h1>Booking Page</h1>
        </div>

        <SCard title={"Cadastro de Paciente"} width={80} children={undefined}></SCard>

      </div>
    </div>
  );
};
