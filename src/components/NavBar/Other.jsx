import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const Other = ({ itemCount = 1 }) => {
  return (
    <div className="hidden md:block">
      <div className="flex items-center gap-3 relative">
        <SearchIcon />
        <AccountCircleOutlinedIcon />

        <Link to="/cart">
          <div className="relative">
            <ShoppingBagOutlinedIcon />
            {itemCount > 0 && (
              <span className="absolute bottom-0 right-[-15px] bg-black text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Other;
