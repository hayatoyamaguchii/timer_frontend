import React from "react";

interface ButtonProps {
    size?: "small" | "medium" | "large";
    variant?: "primary" | "secondary" | "alert";
    children: React.ReactNode;
    onClick?: () => void;
    [key: string]: any; // 他のプロパティも許容する
}

const Button: React.FC<ButtonProps> = ({
    size = "medium",
    variant = "primary",
    children,
    onClick,
    ...props
}) => {
    const sizeStyles = {
        small: "px-2 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-lg",
    };

    const variantStyles = {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        secondary: "bg-gray-500 text-white hover:bg-gray-600",
        alert: "bg-red-500 text-white hover:bg-red-600",
    };

    return (
        <button
            // classNameを文字列で渡しているが、classnamesライブラリ?を使うと柔軟性が増すらしい。
            className={`rounded ${sizeStyles[size]} ${variantStyles[variant]} focus:outline-none`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
