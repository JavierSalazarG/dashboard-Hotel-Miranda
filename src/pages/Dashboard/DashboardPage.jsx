import { DashboardMain } from "./DashboardStyled.js";
import { Kpis } from "../../components/KPIs/Kpis.jsx";
import Comment from "../../components/comment/Comment.jsx";
export const DashboardPage = () => {
  return (
    <DashboardMain>
      <Kpis />
      <Comment />
    </DashboardMain>
  );
};
