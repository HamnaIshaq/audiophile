import { useState } from "react";

import Input from "../components/Form/Input";

const Checkout = () => {
  const [basicInfo, setBasicInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [basicInfoError, setBasicInfoError] = useState({
    name: {
      invalid: false,
      errorMsg: "",
    },
    email: {
      invalid: false,
      errorMsg: "",
    },
    phone: {
      invalid: false,
      errorMsg: "",
    },
  });

  const onChangeInputValue = (e, paramToChange, setError) => {
    setBasicInfo((prevState) => {
      return {
        ...prevState,
        [paramToChange]: e.target.value,
      };
    });
    setError((prevState) => {
      return {
        ...prevState,
        [paramToChange]: { errorMsg: "", invalid: false },
      };
    });
  };

  const handleSetBasicInfoError = (property, errorMsg) => {
    setBasicInfoError((prevState) => {
      return {
        ...prevState,
        [property]: { errorMsg, invalid: true },
      };
    });
  };

  const onClickSubmitForm = (e) => {
    e.preventDefault();

    const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (basicInfo.name === "") {
      handleSetBasicInfoError("name", "Name is required");
      return;
    }

    if (basicInfo.email === "") {
      handleSetBasicInfoError("email", "Email is required");
      return;
    }

    if (!emailFormat.test(basicInfo.email)) {
      handleSetBasicInfoError(
        "email",
        "Enter valid email format. e.g. alexi@mail.com"
      );
      return;
    }

    console.log(basicInfo);
  };

  return (
    <div>
      <h2>Checkout</h2>

      <form>
        <fieldset>
          <legend>billing details</legend>
          <div className="grid-container">
            <Input
              labelText="Name"
              labelFor="name"
              inputType="text"
              placeholderText="Alexi Ward"
              value={basicInfo.name}
              onChangeInputValue={onChangeInputValue}
              changeInputOf="name"
              error={basicInfoError}
              setError={setBasicInfoError}
              errorMessage=""
              requiredInput={true}
            />
            <Input
              labelText="Email Address"
              labelFor="email"
              inputType="email"
              placeholderText="alexi@mail.com"
              value={basicInfo.email}
              onChangeInputValue={onChangeInputValue}
              changeInputOf="email"
              error={basicInfoError}
              setError={setBasicInfoError}
              requiredInput={true}
            />
            <Input
              labelText="Phone Number"
              labelFor="phone"
              inputType="tel"
              placeholderText="+1 202-555-0136"
              value={basicInfo.phone}
              onChangeInputValue={onChangeInputValue}
              changeInputOf="phone"
              error={basicInfoError}
              setError={setBasicInfoError}
              requiredInput={false}
            />
          </div>
        </fieldset>

        <button type="submit" onClick={onClickSubmitForm}>
          Continue & Pay
        </button>
      </form>
    </div>
  );
};

export default Checkout;
