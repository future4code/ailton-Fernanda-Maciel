import React from "react";
import logo from "../../img/logo.png";

function LoginPage() {
  const onSubmitForm = () => {};

  return (
    <div>
      <h1>Cookenu </h1>

      <img src={logo} />

      <form onChange={onSubmitForm}>
        <input />
      </form>
    </div>
  );
}
export default LoginPage;
