import React from "react";
import colors from "../css/colors.ts";

export interface ButtonProps {
  /**
   * How large should the button be?
   */
  size?: "xs" | "sm" | "md" | "lg";
  /**
   * What background color to use
   */
  color?: string;
  /**
   * Did you use Button hover style?
   */
  noHover?: boolean;
  /**
   * Button contents
   */
  label?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Button ClassName
   */
  className?: string;
  /**
   * Button type
   */
  type?: HTMLButtonElement["type"];
  /**
   * Button Outline
   */
  outline?: boolean;
  /**
   * Button Icon
   */
  icon?: string;
}

export const Button: React.FC<ButtonProps> = ({
  size = "sm",
  color = "Blue_B_Default",
  noHover = false,
  label,
  icon,
  outline = false,
  className = "",
  type = "button",
  onClick,
  ...props
}) => {
  // Tailwind CSS 기반 클래스 정의
  const sizeClasses = {
    xs: "h-6 min-w-[60px] text-sm px-2",
    sm: "h-7 min-w-[70px] text-sm px-3",
    md: "h-9 min-w-[100px] text-base px-4",
    lg: "h-10 min-w-[120px] text-lg px-5",
  };

  const iconSizeClasses = {
    xs: "h-4 w-4",
    sm: "h-5 w-5",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  

  const buttonClass = `
    s-button font-Pretendard flex justify-center items-center transition duration-300 ease-in-out  rounded-md
    ${sizeClasses[size]}
    ${outline ? `border border-${color} text-${color} bg-white` : `bg-${color} text-white`}
    ${!noHover ? "hover:opacity-90" : ""}
    ${props.disabled ? "opacity-50 pointer-events-none" : ""}
    ${!label && icon ? "p-1" : ""}
    ${className} 
  `;

  return (
    <button type={type} onClick={onClick} className={buttonClass.trim()} {...props}>
      {icon && (
        <span className={iconSizeClasses[size]}>
          <img className={icon} src={icon}></img>
        </span>
      )}
      {label && <span className={icon ? "ml-2" : ""}>{label}</span>}
    </button>
  );
};

export default Button;

