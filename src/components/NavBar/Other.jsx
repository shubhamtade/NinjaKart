import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Badge from "@mui/material/Badge";
import ThemeController from "../ThemeController";
import { MyContext } from "../../Context";

const Other = () => {
  const { itemCount } = useContext(MyContext);
  return (
    <div className="hidden md:flex justify-center items-center">
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-center">
          <SearchIcon />
        </div>
        <div className="flex flex-col items-center">
          <AccountCircleOutlinedIcon />
        </div>
        <div className="flex flex-col items-center">
          <Link to="/cart">
            <Badge
              badgeContent={itemCount}
              color="primary"
              className="text-[4px]"
            >
              <ShoppingBagOutlinedIcon />
            </Badge>
          </Link>
        </div>

        <ThemeController />
      </div>
    </div>
  );
};

export default Other;
