import { MainStyled } from "../stytedPages.js";
import { Kpis } from "../../components/KPIs/Kpis.jsx";
import Comment from "../../components/comment/Comment.jsx";

export const DashboardPage = () => {
  return (
    <MainStyled>
      <Kpis />
      <Comment />
    </MainStyled>
  );
};
