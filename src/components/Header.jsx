import React from "react";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

function Header() {
  return (
    <header>
      <h1>
        <ReceiptLongIcon sx={{fontSize:"2rem"}} /> NoteKeeper
      </h1>
    </header>
  );
}

export default Header;
