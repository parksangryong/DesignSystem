export interface SolidButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  disabled?: boolean;
}

/** Primary UI component for user interaction */
const SolidButton = ({ label, size = "small", ...props }: SolidButtonProps) => {
  return (
    <button
      type="button"
      className={`bg-primary text-white px-4 py-2 rounded-md text-xs cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
        size === "small"
          ? "text-xs"
          : size === "medium"
          ? "text-sm"
          : "text-base"
      }`}
      {...props}
    >
      {label}
    </button>
  );
};

export default SolidButton;
