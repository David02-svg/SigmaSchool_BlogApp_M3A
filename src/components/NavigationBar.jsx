import React, { useState } from "react";

import IconButton from "./IconButton";
import BlogModal from "./BlogModal";

const ProfileSideBar = ({ handleLogout }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
        <div
            className=""
            style={{ position: "sticky", top: 0 }}
        >
            <IconButton className="bi bi-twitter" isTop/>
            <IconButton
                className="bi bi-door-closed"
                text="Logout"
                onClick={handleLogout}
            />
            <button className="rounded" onClick={handleShow}>
                Upload Blog
            </button>

            <BlogModal show={show} handleClose={handleClose} />
        </div>
    </>
  );
}

export default ProfileSideBar;