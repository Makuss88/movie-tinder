import React, { useEffect, useState } from "react";
import { Button } from "./style";
import { colors, typography } from '../../../static/theme'

export enum BUTTON {
  GREEN = 'green',
  RED='red'
}

interface IMainButton {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  style: BUTTON
}

export const MainButton: React.FC<IMainButton> = ({
  label,
  onClick,
  disabled = false,
  style
}) => {
  
  const [bgColor, setBgColor] = useState<string>('')
  const [bgColorHover, setBgColorHover] = useState<string>('')

  useEffect(() => {
    switch (style) {
      case BUTTON.RED:
        setBgColor(colors.normal.red)
        setBgColorHover(colors.hover.red)
        break
      case BUTTON.GREEN:
        setBgColor(colors.normal.green)
        setBgColorHover(colors.hover.green)
        break
      default:
        return
    }

  }, [style])

    return (
      <Button  
        onClick={onClick}
        disabled={disabled}
        sx={{
          background:bgColor,
          '&:hover': {
            backgroundColor: bgColorHover,
          },
      }} >
      {label}
    </Button>
  );
};
