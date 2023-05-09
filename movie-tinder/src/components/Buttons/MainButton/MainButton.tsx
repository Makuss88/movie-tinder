import React from "react";
import { Button } from "./style";
import { useMediaQuery } from "@mui/material";
import { theme } from "../../../static/theme";

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
  const smMedia = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Button onClick={onClick} disabled={disabled}>
      <img src={label} alt="" width={smMedia ? 100 : 140} />
    </Button>
  );
};
