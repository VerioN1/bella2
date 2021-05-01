import React from 'react'
import { Heading, Box, Center, Stack, Text, Avatar, Image } from "@chakra-ui/react"

{/* <Heading color="primary.400">ממשק פתיחת תקלה</Heading> */}
const Card = () => {
    return (
        <Center py={6}>
        <Box
          maxW={'445px'}
          w={'full'}
          bg={'white'}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}>
          <Box
            h={'260px'}
            bg={'gray.100'}
            mt={-6}
            mx={-6}
            mb={6}
            pos={'relative'}>
                <Image
                h="100%"
                w="100%"
            src={
              'https://images.unsplash.com/photo-1617994452722-4145e196248b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            layout={'fill'}
          />
          </Box>
          <Stack>
            <Heading
              color="gray.700"
              fontSize={'2xl'}
              fontFamily={'body'}>
              עולם השמע
            </Heading>
            <Text color={'gray.500'}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum.
            </Text>
          </Stack>
          <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
            <Avatar
              src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
              alt={'Author'}
            />
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text fontWeight={600}>צוות מטפל:</Text>
              <Text color={'gray.500'}>צוות ספוטיפיי</Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    )
}
export default Card