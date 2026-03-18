import React, { InputHTMLAttributes, ReactNode, useId } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for merging tailwind classes safely
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  badge?: string;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, success, leftIcon, rightIcon, badge, helperText, className, ...props }, ref) => {
    const id = useId();
    const hasError = Boolean(error);

    return (
      <div className="flex flex-col w-full gap-1.5">
        {/* Label & Badge Row */}
        {(label || badge) && (
          <div className="flex items-center justify-between px-0.5">
            {label && (
              <label htmlFor={id} className="text-sm font-semibold text-slate-700">
                {label} {props.required && <span className="text-red-500">*</span>}
              </label>
            )}
            {badge && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                {badge}
              </span>
            )}
          </div>
        )}

        {/* Input Wrapper */}
        <div className="relative group">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
              {leftIcon}
            </div>
          )}

          <input
            id={id}
            ref={ref}
            className={cn(
              "flex h-11 w-full rounded-lg border bg-white px-3 py-2 text-sm transition-all outline-none",
              "placeholder:text-slate-400 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400",
              "border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10",
              leftIcon && "pl-10",
              (rightIcon || hasError || success) && "pr-10",
              hasError && "border-red-500 focus:border-red-500 focus:ring-red-500/10",
              success && "border-emerald-500 focus:border-emerald-500 focus:ring-emerald-500/10",
              className
            )}
            {...props}
          />

          {/* Right Action/Feedback Icons */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
            {hasError && <AlertCircle className="w-5 h-5 text-red-500" />}
            {success && !hasError && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
            {rightIcon && !hasError && !success && (
              <div className="text-slate-400">{rightIcon}</div>
            )}
          </div>
        </div>

        {/* Messaging Area (Fixed Height to prevent Layout Shift) */}
        <div className="min-h-[20px] px-1">
          {error ? (
            <p className="text-xs font-medium text-red-500 animate-in fade-in slide-in-from-top-1">
              {error}
            </p>
          ) : helperText ? (
            <p className="text-xs text-slate-500">{helperText}</p>
          ) : null}
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;