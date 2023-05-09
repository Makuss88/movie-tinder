import React from "react";
import { Button } from "./style";

interface IMainButton {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export const MainButton: React.FC<IMainButton> = ({
  label,
  onClick,
  disabled = false,
}) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      <img src={label} alt="" width={100} />
    </Button>
  );
};
