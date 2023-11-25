import ConciergeFilter from "../../components/filters/concierge/ConciergeFilter.jsx";
import { Concierge } from "../../components/tables/Concierge";
import { MainStyled } from "../stytedPages";

export const ConciergePage = () => {
  return (
    <MainStyled>
      <ConciergeFilter />
      <Concierge />
    </MainStyled>
  );
};
