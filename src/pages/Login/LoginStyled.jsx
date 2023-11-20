import styled from "styled-components";
import { MdAlternateEmail, MdOutlinePassword } from "react-icons/md";

const IconsStyles = `
    color:#799283;
`;
export const DivLoginStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 30rem;
  padding: 1rem;
  margin: 0 auto;
  margin-top: 10rem;
  border-radius: 1.25rem;
  box-shadow: 0px 20px 30px #00000014;
`;
export const PLoginStyles = styled.p`
  color: #5d5449;
  font-size: 0.75rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;
export const FormStyles = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;
export const LabelStyles = styled.label`
  border: none;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  background: #ebf1ef 0% 0% no-repeat padding-box;
  border-radius: 8px;
`;
export const IconEmail = styled(MdAlternateEmail)`
  ${IconsStyles}
`;
export const IconPassword = styled(MdOutlinePassword)`
  ${IconsStyles}
`;
export const InputStyles = styled.input`
  border: none;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  font-size: 1rem;
  color: #5d5449;
  background: transparent;
  outline: none;
`;

export const SubmitStyles = styled.input`
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1rem;
  color: #fff;
  background: #135846;
  outline: none;
  cursor: pointer;

  &:hover {
    -webkit-animation: pulsate-fwd 0.5s ease-in-out infinite both;
    animation: pulsate-fwd 0.5s ease-in-out infinite both;
    box-shadow: 0px 2px 8px #135846;
    @-webkit-keyframes pulsate-fwd {
      0% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
      50% {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
      100% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }
    @keyframes pulsate-fwd {
      0% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
      50% {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
      100% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }
  }
`;
