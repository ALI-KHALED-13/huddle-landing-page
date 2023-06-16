
import { StyledPrimaryButton, StyledSecondaryButton } from './styled';



const Button = ({
  as,
  children,
  color,
  hoverColor,
  disabled,
  variant = "primary",
  onClick,
  style,
  to,
  type
}) => {
  const buttonVariants = {
    "primary": StyledPrimaryButton,
    "secondary": StyledSecondaryButton
  }
  const ButtonVariant = buttonVariants[variant] ;
  return (
    <ButtonVariant
      as={as}
      color={color}
      disabled={disabled}
      $hoverColor={hoverColor} // transient prop which is consumed only by styled components
      onClick={onClick}
      style={style}
      to={to}
      type={type}
    >
      {children}
    </ButtonVariant>
  );
};

export default Button;