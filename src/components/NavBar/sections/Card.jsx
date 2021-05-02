import React from 'react'
import { Heading, Box, Center, Stack, Text, Avatar, Image } from "@chakra-ui/react"

{/* <Heading color="primary.400">ממשק פתיחת תקלה</Heading> */}
const Card = (props) => {
    const {IMAGE, title, team} = props
    return (
      <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg="gray.200"
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={IMAGE}
          />
        </Box>
        <Stack pt={10} align={'center'} color="black">
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
          {title}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={200} fontSize={'xl'}>
              {team}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
    )
}
export default Card