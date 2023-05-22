import { Divider, Box, Typography } from "@mui/material";
import { Link } from "react-scroll";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Box backgroundColor="#ECEFF5">
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          marginTop="100px"
          sx={{
            flexDirection: { xs: "column", md: "row" },
            p: { xs: 2, md: "50px 100px" },
            gap: { xs: 2, md: 20 },
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            width="50%"
            gap={2}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Fasthand",
                color: "#7F00FF",
                textAlign: { xs: "center", md: "start" },
              }}
            >
              G Creations
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: "Source Sans Pro",
                textAlign: { xs: "center", md: "start" },
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
              quaerat sit laborum ab, culpa, beatae tempore ipsa placeat
              aliquam, itaque quod mollitia debitis molestias quia. Illum
              consectetur qui quidem ex repellat omnis aliquam reprehenderit.
            </Typography>
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            sx={{ alignItems: { xs: "center", md: "flex-start" } }}
            flexDirection="column"
            gap={3}
          >
            <Typography variant="h6">Navigation</Typography>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                flexDirection: { xs: "row", md: "column" },
              }}
            >
              <Link
                to="section"
                spy={true}
                smooth={true}
                offset={-150}
                duration={100}
              >
                <Typography
                  variant="p"
                  sx={{ "&:hover": { color: "green" }, cursor: "pointer" }}
                >
                  Home
                </Typography>
              </Link>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={0}
                duration={100}
              >
                <Typography
                  variant="p"
                  sx={{ "&:hover": { color: "green" }, cursor: "pointer" }}
                >
                  Services
                </Typography>
              </Link>
              <Link
                to="working"
                spy={true}
                smooth={true}
                offset={0}
                duration={100}
              >
                <Typography
                  variant="p"
                  sx={{ "&:hover": { color: "green" }, cursor: "pointer" }}
                >
                  Working
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Typography variant="p">
            Copyright &copy;G Creations-All rights reserved
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
