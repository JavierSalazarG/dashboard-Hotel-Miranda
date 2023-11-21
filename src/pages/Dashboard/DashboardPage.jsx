import { DashboardMain } from "./DashboardStyled.js";
import { Kpis } from "../../components/KPIs/Kpis.jsx";
export const DashboardPage = () => {
  return (
    <DashboardMain>
      <Kpis />
    </DashboardMain>
  );
};
