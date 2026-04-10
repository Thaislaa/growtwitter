import { useTheme } from '@mui/material'

export function Hr() {
  const theme = useTheme()
  return (
    <>
      <hr style={{ border: `1px solid ${theme.palette.divider}` }} />
    </>
  )
}
