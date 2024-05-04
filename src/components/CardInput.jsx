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
        <Text>{props.description}</Text>
      </CardBody>
      <CardFooter>
        {props.website == undefined ? (
          <a href={props.github} target="_blank">
            <button className="gitButton">GitHub</button>
          </a>
        ) : (
          <>
            <a href={props.github} target="_blank">
              <button className="gitButton">GitHub</button>
            </a>
            <a href={props.website} target="_blank">
              <button tyle={{ marginLeft: '1em' }} className="cvButton">Website</button>
            </a>
          </>
        )
        }
      </CardFooter>
    </Card >
  )
}
