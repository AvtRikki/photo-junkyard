import { Avatar, Flex, Text, Link } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"

function SuggestedHeader() {
  return <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
            <Avatar name="Bogza.Anton" size={"lg"} src="/profilepic.png" />
            <Text fontSize={12} fontWeight={"bold"}>
                bogza.anton
            </Text>
        </Flex>
        <Link as={RouterLink} to={"/auth"} fontSize={14} fontWeight={"medium"} color={"blue.400"}
            style={{textDecoration: "none"}} cursor={"pointer"}>
                Log out
        </Link>
    </Flex>
}
export default SuggestedHeader