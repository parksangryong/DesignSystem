interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  theme: PrimaryButtonTheme;
  isDisabled?: boolean;
}

type PrimaryButtonTheme = "dark" | "light" | "social" | "text";

const dark = "bg-primary text-white";
const light = "bg-white text-primary";
const social = "bg-social text-white";
const text = "bg-transparent text-white";
const disabled = "disabled:bg-mono100 disabled:text-mono200";

const color: Record<PrimaryButtonTheme, string> = {
  dark,
  light,
  social,
  text,
};

const PrimaryButton = ({
  children,
  onClick,
  theme,
  isDisabled,
}: PrimaryButtonProps) => {
  return (
    <button
      className={`w-full h-[59px] rounded-[5px] ${color[theme]} ${disabled}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
