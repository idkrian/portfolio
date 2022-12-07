import React from 'react'
import { Card, CardHeader, CardBody, Text, Heading, CardFooter, Button, Image } from '@chakra-ui/react'

export default function CardInput(props) {
  return (
    <Card size='sm' style={{ width: '20em', margin: '1em', backgroundColor: 'white' }}>
      <Image
        src={props.image}
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
      <CardHeader>
        <Heading size='md'>{props.title}</Heading>
      </CardHeader>
      <CardBody size="md">
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
      <CardFooter>
        <button className="gitButton">GitHub</button>
        <button tyle={{ marginLeft: '1em' }} className="cvButton">Currículo</button>

        {/* <Button>WebSite</Button>
        <Button style={{ marginLeft: '1em' }}>GitHub</Button> */}
      </CardFooter>
    </Card >
  )
}
