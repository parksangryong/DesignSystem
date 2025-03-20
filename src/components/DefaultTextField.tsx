import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import IconButton from "./IconButton";

interface DefaultTextFieldProps {
  id: string;
  errorMessage: string;
  iconPath: string;
  iconAlt: string;
  placeholder: string;
  value: string;
  isError: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  iconClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const DefaultTextField = ({
  id,
  errorMessage,
  iconPath,
  iconAlt,
  placeholder,
  value,
  isError,
  onChange,
  iconClick,
}: DefaultTextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = isError
    ? "border-error"
    : isFocused
    ? "border-secondary"
    : !value
    ? "border-mono300"
    : "border-primary";

  return (
    <div className="relative text-field">
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`text-primary border-b flex justify-between ${borderColor}`}
      >
        <input
          id={id}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="outline-none flex-1"
        />
        {!!value && (
          <IconButton iconPath={iconPath} alt={iconAlt} onClick={iconClick} />
        )}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default DefaultTextField;
