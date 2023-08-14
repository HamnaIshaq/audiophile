import PropTypes from "prop-types";

const Input = ({
  labelText,
  labelFor,
  inputType,
  placeholderText,
  value,
  onChangeInputValue,
  changeInputOf,
  error,
  setError,
  requiredInput,
}) => {
  return (
    <div>
      <label
        htmlFor={labelFor}
        className={error[changeInputOf]["invalid"] ? "invalid-text-color" : ""}
      >
        {labelText}
        {requiredInput ? (
          <span className="required" aria-label="required">
            *
          </span>
        ) : (
          ""
        )}
        <span className="error-msg"> {error[changeInputOf]["errorMsg"]} </span>
      </label>
      <input
        type={inputType}
        id={labelFor}
        placeholder={placeholderText}
        value={value}
        onChange={(e) => onChangeInputValue(e, changeInputOf, setError)}
        className={
          error[changeInputOf]["invalid"] ? "invalid-input input" : "input"
        }
        required={requiredInput}
      />
    </div>
  );
};

Input.propTypes = {
  labelText: PropTypes.string,
  labelFor: PropTypes.string,
  inputType: PropTypes.string,
  placeholderText: PropTypes.string,
  value: PropTypes.string,
  onChangeInputValue: PropTypes.func,
  changeInputOf: PropTypes.string,
  error: PropTypes.object,
  setError: PropTypes.func,
  requiredInput: PropTypes.bool,
};

Input.defaultProps = {
  labelText: "Input",
  labelFor: "Input",
  inputType: "text",
  placeholderText: "",
};

export default Input;
