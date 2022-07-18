import { NavLink } from "react-router-dom";
import { FaBars, FaHome } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";

import "./sidebar-style.css";

//icons
import ReviewsIcon from "@mui/icons-material/Reviews";
import HelpIcon from "@mui/icons-material/Help";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

import Fab from "@mui/material/Fab";
import HomeIcon from "@mui/icons-material/Home";
import FindInPageIcon from '@mui/icons-material/FindInPage';

const routes = [
  {
    path: "/businesshome",
    name: "Business Home",
    icon: <HomeIcon />,
  },
  {
    path: "/askthecommunity",
    name: "Ask The Community",
    icon: <HelpIcon />,
  },
  {
    path: "/reviews",
    name: "Reviews",
    icon: <ReviewsIcon />,
  },

  {
    path: "/offers",
    name: "Offers",
    icon: <LocalOfferIcon />,
  },

  // {
  //   path: "/settings",
  //   name: "Settings",
  //   icon: <LocalOfferIcon />,
  //   exact: true,
  //   subRoutes: [
  //     {
  //       path: "/settings/profile",
  //       name: "Profile ",
  //       icon: <LocalOfferIcon />,
  //     },
  //     {
  //       path: "/settings/2fa",
  //       name: "2FA",
  //       icon: <LocalOfferIcon />,
  //     },
  //     {
  //       path: "/settings/billing",
  //       name: "Billing",
  //       icon: <LocalOfferIcon />,
  //     },
  //   ],
  // },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  {/* Business Menu */}
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <a role = "button" style={{textDecoration : "none"}}>
              <FindInPageIcon  size={70} />
            </a>
           
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="sidebar-active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;