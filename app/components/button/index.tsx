interface ButtonProps {
  buttonText: string;
  block?: boolean;
  type?: string;
  iconPath?: string
  className?: string;
  onClick?: Function;
}

/**
 * 
 * @param type string -- values: outline | link | classic
 * @returns JSX.Element
 */

export default function Button({
  buttonText, type, iconPath, className, onClick, block
  }: ButtonProps): JSX.Element {

  const handleOnClick = () => {
    if (onClick) onClick();
  }

  return (
    <button
      className={`sw-button sw-button--${type} ${block ? 'sw-button-block' : ''} ${className || ''}`}
      onClick={() => {handleOnClick()}}
    >
      {iconPath && <img className="sw-button__icon" src={iconPath} alt="button-icon"/> }
      <span className="sw-button__text">{buttonText}</span>
    </button>
  );
};

Button.defaultProps = {
  type: 'classic',
}
 