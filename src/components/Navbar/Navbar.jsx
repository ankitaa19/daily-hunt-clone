import React, { useRef } from "react";
import {
  Menu,
  MenuItem,
  Button,
  Image,
  Box,
  Stack,
  Input,
} from "@chakra-ui/react";
import { TriangleDownIcon, SearchIcon, StarIcon } from "@chakra-ui/icons";
import { useNavigate, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const value = useRef();

  const getInput = () => {
    const inputValue = value.current.value;
    if (inputValue) {
      navigate(`/@${inputValue}`);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      getInput();
    }
  };

  return (
    <div className="fix">
      <div className="navbar">
        <Box
          display={"flex"}
          alignItems="center"
          justifyContent={"space-between"}
          ml={["0", "15%"]}
        >
          <Link to="/">
            <Image
              src="https://m.dailyhunt.in/assets/img/desktop/logo.svg?mode=pwa&ver=2.0.39"
              alt="DailyHunt Logo"
              w={["24", "fit-content"]}
            />
          </Link>
          <Menu>
            <Button
              bg="rgb(243, 243, 243)"
              fontSize={16}
              rightIcon={<TriangleDownIcon />}
              display={["none", "inline-flex"]}
              onClick={() => console.log("Menu clicked")}
            >
              News
            </Button>
            <Box bg="white" shadow="md" borderRadius="md" p={2}>
              <MenuItem>
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://m.dailyhunt.in/assets/img/desktop/news_viral.svg?mode=pwa&ver=2.0.39"
                  alt="Viral"
                  mr="12px"
                />
                Viral
              </MenuItem>
              <MenuItem>
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://m.dailyhunt.in/assets/img/desktop/news_video.svg?mode=pwa&ver=2.0.39"
                  alt="Video"
                  mr="12px"
                />
                Video
              </MenuItem>
            </Box>
          </Menu>
        </Box>
        <Stack w={["50%", "20%"]} ml={["0px", "6"]} spacing={4}>
          <Box display={"flex"} alignItems={"center"}>
            <Input
              borderColor="gray.400"
              type="search"
              placeholder="Search"
              ref={value}
              h={["8", ""]}
              onKeyDown={handleKeyDown}
            />
            <Button
              variant="outline"
              onClick={getInput}
              ml="2"
              borderColor="gray.400"
              size={["sm", "sm"]}
              color="gray.400"
            >
              <SearchIcon color="gray.400" h={["8", "4"]} />
            </Button>
          </Box>
        </Stack>
        <Link to="/save">
          <Button
            rightIcon={<StarIcon size={["xs", "sm"]} />}
            variant="solid"
            size={["xs", "md"]}
            borderRadius={["base", "md"]}
            colorScheme="blue"
            padding={"4"}
          >
            Saved
          </Button>
        </Link>
        <Box w={["0px", "20"]} display={["none", "flex"]} className="right">
          <img
            src="https://m.dailyhunt.in/assets/img/desktop/header_notify_icn.svg?mode=pwa&ver=2.0.39"
            alt="Notifications"
          />
          <img
            src="https://m.dailyhunt.in/assets/img/desktop/header_lang_icn.svg?mode=pwa&ver=2.0.39"
            alt="Language"
          />
        </Box>
      </div>
    </div>
  );
};

export default Navbar;

