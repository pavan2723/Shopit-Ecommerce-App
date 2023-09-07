import { Box, Button, Flex, HStack, Img, Input, Text } from "@chakra-ui/react";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa";
export default function Footer() {
  return (
    <Box cursor={"pointer"}  bg="gray.300" height="200px">

      <Flex p={5} >
        <Input
          borderRadius={"none"}
          border={"2px solid black"}
          borderColor={"black"}
          borderLeftRadius={"none"}
          w={300}
          type={"email"}
          placeholder={"Enter Your E-Mail"}
          htmlSize={5}
        />
        <Button color={"white"} bg={"black"} borderRadius={"none"}>
          SUBSCRIBE NOW
        </Button>
        <HStack spacing={5} pb={3}>
          <Text fontSize={"20px"} fontWeight={"bold"} ml={5}>
            Stay Co |
          </Text>
          <Text>
            <AiOutlineInstagram  />
          </Text>
          <Text>
            <FiTwitter  />
          </Text>
          <Text>
            <FaPinterestP  />
          </Text>
          <Text>
            <AiOutlineYoutube  />
          </Text>
        </HStack>
        <HStack spacing={7} marginLeft={'200px'}>
          <a href="https://www.playstore.com">
            <Img
              width={"50px"}
              height={"50px"}
              src="https://cdn.icon-icons.com/icons2/3658/PNG/128/app_store_game_social_media_playstore_google_icon_228385.png"
            />
          </a>
          <a href="https://www.pintrest.com">
            <Img
              width={"40px"}
              height={"40px"}
              src="https://cdn.icon-icons.com/icons2/3658/PNG/512/communication_social_media_pintrest_icon_228387.png"
            />
          </a>
          <a href="https://www.twitter.com">
          <Img
            width={"40px"}
            height={"40px"}
            src="https://cdn.icon-icons.com/icons2/3658/PNG/512/communication_social_media_twitter_icon_228391.png"
          />
          </a>
        </HStack>
      </Flex>
      <br/>
      <br/>
      <br/>
      <Box textAlign="center">
        <Text color={"blackAlpha.600"}>
          @Developed By Pavan Kumar  @copyRight 2023
        </Text>
      </Box>
    </Box>
  );
}
