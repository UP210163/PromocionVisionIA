// app/OfficeSignIn.tsx

import React from 'react'
import { useColorScheme } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useRouter } from 'expo-router'
import { Center, Box, Heading, Image, Button, HStack } from 'native-base'


export default function OfficeSignIn(): JSX.Element {
  const colorScheme = useColorScheme()
  const router = useRouter()

  const handleNavigate = () => {
    router.push('/(drawer)/TeacherClassesScreen')
  }

  return (
    <Center flex={1} px={4} bg={colorScheme === 'dark' ? 'gray.900' : 'gray.50'}>
      {/* Tarjeta/Card más amplia */}
      <Box
        w="90%"
        maxW="400px"
        p={8}
        borderRadius="lg"
        bg={colorScheme === 'dark' ? 'gray.800' : 'white'}
        shadow={3}
        alignItems="center"
      >
        {/* Título */}
        <Heading size="xl" mb={6} color={colorScheme === 'dark' ? 'white' : 'black'}>
          ClassTrack
        </Heading>

        {/* Logo */}
        <Image
          source={require('../assets/images/ClassTrack3.png')}
          alt="Logo ClassTrack"
          size={120}
          mb={8}
        />

        {/* Botón con efecto hover (solo color) */}
        <Button
          leftIcon={<Ionicons name="log-in-outline" size={20} color="white" />}
          colorScheme="blue"
          size="lg"
          mb={3}
          onPress={handleNavigate}
          _pressed={{ bg: 'blue.600' }}
          _hover={{ bg: colorScheme === 'dark' ? 'blue.500' : 'blue.700' }}
        >
          Iniciar
        </Button>

        <HStack space={16} justifyContent="center" alignItems="center">
          <Image
            source={require('../assets/images/isc.jpeg')}
            alt="Logo ISC"
            width={60}
            height={60}
            resizeMode="contain"
          />
          <Image
            source={require('../assets/images/tiid.jpeg')}
            alt="Logo TIID"
            width={60}
            height={60}
            resizeMode="contain"
          />
          <Image
            source={require('../assets/images/upa.jpeg')}
            alt="Logo UPA"
            width={60}
            height={60}
            resizeMode="contain"
          />
        </HStack>
      </Box>
    </Center>
  )
}
