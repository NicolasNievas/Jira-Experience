import Loading from "./Loading";

interface IButtonProps {
  name: string;
  onClick?: () => void;
  className?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
}

const Button = ({ name, onClick, className, isDisabled=false, isLoading }: IButtonProps) => {
  return (
    <button
      type="submit"
      disabled={isDisabled}
      className={`w-full h-[100px] p-4 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]
        ${isDisabled ? "bg-gray-300 text-gray-600 cursor-not-allowed" : ""}
        ${className ? className : "mb-8 mt-8 bg-black hover:bg-gray-800 text-xl font-medium text-white"}
      `}
      onClick={onClick}
    >
      {isLoading ? <Loading type="button"/> : name}
    </button>
  );
}

export default Button;