import IconButton from "./IconButton";

interface NavigationBarProps {
  isDark: boolean;
  showBackButton: boolean;
  showCloseButton: boolean;
  showTitle: boolean;
  title?: string;
  onBackButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const NavigationBar = ({
  isDark,
  showBackButton,
  showCloseButton,
  showTitle,
  title = "",
  onBackButtonClick = () => {},
  onCloseButtonClick = () => {},
}: NavigationBarProps) => {
  return (
    <div className={`w-full flex justify-between items-center h-16 px-4 `}>
      <div className="flex items-center navigation-title-wrapper">
        {showBackButton && (
          <IconButton
            alt="back-arrow"
            iconPath={
              isDark
                ? "/ic-public-back-arrow-white.svg"
                : "/ic-public-back-arrow-black.svg"
            }
            onClick={onBackButtonClick}
          />
        )}
        {showTitle && (
          <h1
            className={`text-2xl !font-bold ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            {title}
          </h1>
        )}
      </div>
      {showCloseButton && (
        <IconButton
          alt="close"
          iconPath={
            isDark ? "/ic-public-close-white.svg" : "/ic-public-close-black.svg"
          }
          onClick={onCloseButtonClick}
        />
      )}
    </div>
  );
};

export default NavigationBar;
