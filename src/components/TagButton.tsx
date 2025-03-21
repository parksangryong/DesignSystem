interface TagButtonProps {
  children: React.ReactNode;
  isChecked: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const TagButton = ({ children, isChecked, onClick }: TagButtonProps) => {
  const buttonStyle = isChecked
    ? "bg-white text-primary"
    : "bg-dark-opacity text-white";

  return (
    <button
      className={`cursor-pointer rounded-[17.5px] px-[10px] border border-white h-[33px] text-sm !font-medium ${buttonStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TagButton;
