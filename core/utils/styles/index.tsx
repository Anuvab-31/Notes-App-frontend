import { Menu, MenuProps } from "@mui/material";
import { styled } from "@mui/styles"

export const StyledMenu = styled((props: MenuProps) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      {...props}
    />
  ))(({}) => ({
    "& .MuiPaper-root": {
      width: "300px",
      borderRadius: 6,
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "&:hover": {
        background: "#fff",
      },
      "& .MuiMenuItem-root": {
        width: "100%",
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          // color: theme.palette.text.secondary,
          // marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: "primary.main",
        },
      },
    },
  }));