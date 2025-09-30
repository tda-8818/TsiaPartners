import React from 'react';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      children,
      icon,
      iconPosition = 'right',
      isLoading = false,
      fullWidth = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      // White with orange outline, fills orange on hover
      primary: 'bg-white text-accent border-2 border-accent hover:bg-accent hover:text-white shadow-md-subtle hover:shadow-lg-subtle hover:-translate-y-0.5 focus:ring-accent/20 transition-colors duration-300',
      
      // White with subtle grey border
      secondary: 'bg-white text-neutral-700 border-2 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-900 hover:-translate-y-0.5 shadow-subtle hover:shadow-md-subtle focus:ring-neutral-300',
      
      // Minimal outline
      outline: 'bg-transparent text-neutral-700 border-2 border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50 hover:-translate-y-0.5 focus:ring-neutral-300',
      
      // Ghost style
      ghost: 'bg-transparent text-neutral-700 hover:bg-neutral-100 hover:text-accent focus:ring-neutral-300',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className
        )}
        disabled={disabled || isLoading}
        whileTap={{ scale: 0.98 }}
        {...(props as any)}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </>
        ) : (
          <>
            {icon && iconPosition === 'left' && icon}
            {children}
            {icon && iconPosition === 'right' && icon}
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;