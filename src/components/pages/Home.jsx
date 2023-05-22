import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import w1 from "../../assets/web development.png";
import w2 from "../../assets/app development.png";
import w3 from "../../assets/project management.png";
import w4 from "../../assets/security.png";
import PublicIcon from "@mui/icons-material/Public";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import EmailIcon from "@mui/icons-material/Email";
import SmsIcon from "@mui/icons-material/Sms";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div>
      <Box
        height="600px"
        sx={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/home-background-image.jpg"
          })`,
          backgroundSize: "cover",
        }}
      >
        <Box display="flex" justifyContent="center">
          <Box display="flex" flexDirection="column">
            <motion.div
              initial={{ y: 1000 }} // Initial position (above the screen)
              animate={{ y: 0 }} // Final position (center of the screen)
              transition={{ duration: 2, type: "spring", damping: 10 }} // Updated animation duration
            >
              <Box display="flex" flexDirection="column" gap={2}>
                <Typography
                  variant="h3"
                  sx={{ color: "white", marginTop: "100px" }}
                >
                  We build an awesome software
                </Typography>
                <Typography
                  variant="p"
                  sx={{ color: "white", p: { xs: 5, sm: 3, md: 0 } }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempore quibusdam reiciendis temporibus.
                </Typography>
                <Link
                  to="what we do"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  <IconButton
                    sx={{
                      backgroundColor: "#7F00FF",
                      width: "40px",
                      margin: "50px auto",
                    }}
                  >
                    <ArrowDropDownIcon
                      sx={{ color: "white", cursor: "pointer" }}
                    />
                  </IconButton>
                </Link>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Box>
      <div id="what we do">
        <Box display="flex" flexDirection="column" marginTop="70px">
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            What We Do?
          </Typography>
          <Grid container spacing={3} sx={{ marginTop: "30px", p: 5 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <img src={w1} alt="" width="250px" height="200px" />
                <Box display="flex" flexDirection="column" gap={1}>
                  <Typography variant="h6" sx={{ color: "#7F00FF" }}>
                    Web Development
                  </Typography>
                  <Typography variant="p" sx={{ color: "grey" }}>
                    Responsive | e-Com{" "}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <img src={w2} alt="" width="250px" height="200px" />
                <Box display="flex" flexDirection="column" gap={1}>
                  <Typography variant="h6" sx={{ color: "#7F00FF" }}>
                    App Development
                  </Typography>
                  <Typography variant="p" sx={{ color: "grey" }}>
                    Open Source | Android | IOS
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <img src={w3} alt="" width="250px" height="200px" />
                <Box display="flex" flexDirection="column" gap={1}>
                  <Typography variant="h6" sx={{ color: "#7F00FF" }}>
                    Project Management
                  </Typography>
                  <Typography variant="p" sx={{ color: "grey" }}>
                    Facebook | Google
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <img src={w4} alt="" width="250px" height="200px" />
                <Box display="flex" flexDirection="column" gap={1}>
                  <Typography variant="h6" sx={{ color: "#7F00FF" }}>
                    Security and Privacy
                  </Typography>
                  <Typography variant="p" sx={{ color: "grey" }}>
                    Authentication | Data Security
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        marginTop="70px"
        backgroundColor="#ECEFF5"
        p={5}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Area of Expertise
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                p: 2,
                gap: 2,
                marginTop: "50px",
              }}
            >
              <IconButton sx={{ p: 2, backgroundColor: "#7F00FF" }}>
                <PublicIcon
                  sx={{ color: "white", width: "50px", height: "50px" }}
                />
              </IconButton>
              <Box display="flex" flexDirection="column" gap={1}>
                <Typography
                  variant="h6"
                  sx={{ color: "#7F00FF", fontWeight: "bold" }}
                >
                  Domain Registration
                </Typography>
                <Typography variant="p" sx={{ color: "grey" }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  inventore fuga quasi.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                p: 2,
                gap: 2,
                marginTop: "50px",
              }}
            >
              <IconButton sx={{ p: 2, backgroundColor: "#7F00FF" }}>
                <CloudQueueIcon
                  sx={{ color: "white", width: "50px", height: "50px" }}
                />
              </IconButton>
              <Box display="flex" flexDirection="column" gap={1}>
                <Typography
                  variant="h6"
                  sx={{ color: "#7F00FF", fontWeight: "bold" }}
                >
                  Web Hosting
                </Typography>
                <Typography variant="p" sx={{ color: "grey" }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  inventore fuga quasi.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                p: 2,
                gap: 2,
                marginTop: "50px",
              }}
            >
              <IconButton sx={{ p: 2, backgroundColor: "#7F00FF" }}>
                <EmailIcon
                  sx={{ color: "white", width: "50px", height: "50px" }}
                />
              </IconButton>
              <Box display="flex" flexDirection="column" gap={1}>
                <Typography
                  variant="h6"
                  sx={{ color: "#7F00FF", fontWeight: "bold" }}
                >
                  Email Service
                </Typography>
                <Typography variant="p" sx={{ color: "grey" }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  inventore fuga quasi.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                p: 2,
                gap: 2,
                marginTop: "50px",
              }}
            >
              <IconButton sx={{ p: 2, backgroundColor: "#7F00FF" }}>
                <SmsIcon
                  sx={{ color: "white", width: "50px", height: "50px" }}
                />
              </IconButton>
              <Box display="flex" flexDirection="column" gap={1}>
                <Typography
                  variant="h6"
                  sx={{ color: "#7F00FF", fontWeight: "bold" }}
                >
                  Web SMS
                </Typography>
                <Typography variant="p" sx={{ color: "grey" }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  inventore fuga quasi.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "70px",
          gap: 2,
        }}
      >
        <Typography variant="h3">Have a project in mind?</Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#7F00FF",
            borderRadius: "30px",
            p: "10px 50px",
          }}
        >
          Get Started
        </Button>
      </Box>
    </div>
  );
};

export default Home;
