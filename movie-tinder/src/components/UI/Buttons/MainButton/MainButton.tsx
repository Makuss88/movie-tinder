import React from "react";
import { Button } from "./style";
import { useIsSmSize } from "../../../../hooks/useMediaQuery";

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
  const smMedia = useIsSmSize();

  return (
    <Button onClick={onClick} disabled={disabled}>
      <img src={label} alt="" width={smMedia ? 100 : 140} />
    </Button>
  );
};
