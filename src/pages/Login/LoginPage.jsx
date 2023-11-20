import { MdAlternateEmail, MdOutlinePassword } from "react-icons/md";

export const LoginPage = () => {
  return (
    <>
      <div>
        <img src="../../../public/logo/logo.png" />
        <h1>Travl</h1>
        <form>
          <label>
            <MdAlternateEmail /> <input type="email" />
          </label>
          <label>
            <MdOutlinePassword /> <input type="password" />
          </label>
        </form>
      </div>
    </>
  );
};
