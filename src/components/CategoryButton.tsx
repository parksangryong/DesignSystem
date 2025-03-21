interface CategoryButtonProps {
  iconPath: string;
  iconAlt: string;
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const CategoryButton = ({
  iconPath,
  iconAlt,
  text,
  onClick,
}: CategoryButtonProps) => {
  return (
    <button
      className=" bg-white border border-primary text-primary text-base rounded-[5px] px-[10px] py-[16px] flex-col items-center justify-center gap-[5px] !font-bold"
      onClick={onClick}
    >
      <img src={iconPath} alt={iconAlt} />
      <p>{text}</p>
    </button>
  );
};

export default CategoryButton;
