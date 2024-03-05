import { FC } from "react";

export interface IBaseButtonProps {
  btnText: string;
  variant?: 1 | 2 | 3 | 4 | 5;
  handleBtnClick?: () => void;
}

const Buttons: FC<IBaseButtonProps> = ({ btnText, variant = 1, handleBtnClick }) => {
  return (
    <button className={`sb-btn variant-${variant}`} onClick={handleBtnClick}>
      <span className="text">{btnText}</span>
    </button>
  );
};

export default Buttons;
