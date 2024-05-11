import { Box, Button, Container, Flex, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" align="center" minH="100vh" bg="white">
        {/* Navigation Bar */}
        <Flex as="nav" w="full" py={4} px={8} justify="space-between" align="center" borderBottom="1px" borderColor="gray.200">
          <Heading as="h1" size="lg" letterSpacing="tighter">
            Ana's Art
          </Heading>
          <Flex>
            <Link href="#gallery" mx={2}>
              Gallery
            </Link>
            <Link href="#about" mx={2}>
              About
            </Link>
            <Link href="#contact" mx={2}>
              Contact
            </Link>
          </Flex>
        </Flex>

        {/* Hero Section */}
        <Flex direction="column" align="center" justify="center" flex="1" p={8}>
          <Heading as="h2" size="2xl" mb={4} fontWeight="bold">
            Creative Expressions by Ana
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={6}>
            Explore the world through my paintings.
          </Text>
          <Button colorScheme="purple" size="lg">
            View Gallery
          </Button>
        </Flex>

        {/* Gallery Section */}
        <VStack id="gallery" spacing={4} p={8} align="start" w="full">
          <Heading as="h3" size="xl">
            Gallery
          </Heading>
          <Flex wrap="wrap" justify="center">
            <Image src="https://images.unsplash.com/flagged/photo-1567934150921-7632371abb32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhaW50aW5nfGVufDB8fHx8MTcxNTQ0MTc3OXww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="250px" m={2} />
            <Image src="https://images.unsplash.com/photo-1581337204873-ef36aa186caa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBwYWludGluZ3xlbnwwfHx8fDE3MTU0NDE3Nzl8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="250px" m={2} />
            <Image src="https://images.unsplash.com/photo-1579541814924-49fef17c5be5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcnQlMjBwYWludGluZ3xlbnwwfHx8fDE3MTU0NDE3ODB8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="250px" m={2} />
          </Flex>
        </VStack>

        {/* About Section */}
        <Flex id="about" direction="column" align="start" p={8} w="full" borderTop="1px" borderColor="gray.200">
          <Heading as="h3" size="xl">
            About Ana
          </Heading>
          <Text fontSize="md" color="gray.600" mt={4}>
            Ana is a passionate painter based in New York, specializing in abstract and landscape art. Her work is inspired by the beauty of nature and the complexity of human emotions.
          </Text>
        </Flex>

        {/* Contact Section */}
        <Flex id="contact" direction="column" align="start" p={8} w="full" borderTop="1px" borderColor="gray.200">
          <Heading as="h3" size="xl">
            Contact
          </Heading>
          <Text fontSize="md" color="gray.600" mt={4}>
            For inquiries, please email:{" "}
            <Link href="mailto:ana@art.com" color="purple.500">
              ana@art.com
            </Link>
          </Text>
        </Flex>

        {/* Footer */}
        <Flex as="footer" py={4} px={8} w="full" justify="space-between" borderTop="1px" borderColor="gray.200">
          <Text fontSize="sm">© 2023 Ana's Art. All rights reserved.</Text>
          <Flex>
            <Link href="https://instagram.com" isExternal mx={1}>
              <FaInstagram />
            </Link>
            <Link href="https://twitter.com" isExternal mx={1}>
              <FaTwitter />
            </Link>
            <Link href="https://facebook.com" isExternal mx={1}>
              <FaFacebookF />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;
