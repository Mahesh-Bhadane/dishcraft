import { cn } from "../../utils/clsx";
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isToggled?: boolean;
};

const ToggleButton = ({
  children,
  className,
  isToggled,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={cn(
        `font-archivo shadow-sm text-sm border border-gray-200 py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transform transition-colors duration-300 ease-in-out flex gap-2 justify-center items-center`,
        `${isToggled ? "bg-gray-200 border-gray-800" : ""}`,
        className
      )}
      aria-pressed={isToggled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ToggleButton;
