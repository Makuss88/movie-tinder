import { styled } from '@mui/material/styles';
import { colors, typography } from '../../../static/theme'

export const Button = styled('button')({
  height: 48,
  width: 200,
  borderRadius: 12,
  textAlign: 'center',
  textTransform: 'none',
  ...typography.body2,
  color: colors.normal.white,
  transition: 'background-color 250ms ease',
  position: 'relative',
  overflow: 'hidden',
  zIndex: 4,
  marginInline: 24,
  cursor: 'grab'
});

