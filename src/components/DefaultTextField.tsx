import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import IconButton from "./IconButton";

interface DefaultTextFieldProps {
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
    <div>
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`text-primary border-b ${borderColor}`}
      >
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="outline-none"
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
