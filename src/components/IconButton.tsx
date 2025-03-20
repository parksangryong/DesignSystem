interface IconButtonProps {
  iconPath: string;
  alt: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const IconButton = ({ iconPath, alt, onClick, disabled }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="cursor-pointer disabled:cursor-not-allowed"
    >
      <img src={iconPath} alt={alt} />
    </button>
  );
};

export default IconButton;
