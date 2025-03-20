export interface SolidButtonProps {
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
const SolidButton = ({ label, ...props }: SolidButtonProps) => {
  return (
    <button
      type="button"
      className="bg-primary text-white px-4 py-2 rounded-md text-xs "
      {...props}
    >
      {label}
    </button>
  );
};

export default SolidButton;
