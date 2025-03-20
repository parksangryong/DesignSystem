import "./App.css";
import { useState } from "react";

import Label from "./components/Label";
import DefaultTextField from "./components/DefaultTextField";
import SolidButton from "./components/SolidButton";

function App() {
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [isAddressError, setIsAddressError] = useState(false);

  return (
    <>
      <Label htmlFor="email">이메일</Label>
      <DefaultTextField
        id="email"
        errorMessage="이메일을 입력해주세요."
        iconPath="/ic-public-delete-dark.svg"
        iconAlt="delete"
        placeholder="이메일을 입력해주세요."
        value={email}
        isError={isEmailError}
        onChange={(e) => setEmail(e.target.value)}
        iconClick={() => {}}
      />

      <div className="my-6" />

      <Label htmlFor="address">주소</Label>
      <DefaultTextField
        id="address"
        errorMessage="주소를 입력해주세요."
        iconPath="/ic-public-delete-dark.svg"
        iconAlt="delete"
        placeholder="주소를 입력해주세요."
        value={address}
        isError={isAddressError}
        onChange={(e) => setAddress(e.target.value)}
        iconClick={() => {}}
      />

      <div className="my-6" />

      <SolidButton
        label="에러 토글"
        onClick={() => {
          setIsAddressError(!isAddressError);
          setIsEmailError(!isEmailError);
        }}
      />
    </>
  );
}

export default App;
