import { VariantProps } from 'tailwind-variants';
import { buttonStyles } from './buttonStyles.js';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  className,
  ...props
}) => {
  return (
    <button className={buttonStyles({ variant, size, className })} {...props} />
  );
};

export default Button;
