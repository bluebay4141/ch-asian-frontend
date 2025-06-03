import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Tailwind,
    Text,
  } from '@react-email/components';
  import * as React from 'react';
  
  type MessageUsEmailProps = {
    name: string;
    email: string;
    message: string;
    mobilenumber: string;
    page : string;
    traveldate : string,
    travelercount : string
  };
  
  const MessageUsEmail = ({ name, email, message , mobilenumber , page , traveldate ,travelercount}: MessageUsEmailProps) => {
    const previewText = `New Booking Details Here...`;
  
    return (
      <Html>
        <Head />
        <Preview>{previewText}</Preview>
        <Tailwind>
          <Body className='bg-white my-auto mx-auto font-sans'>
            <Container className='my-[20px] mx-auto p-[20px] max-w-4xl'>
              <Heading className='text-black text-[20px] font-normal text-left'>
                <strong>Details Here...</strong>
              </Heading>
              <Hr className='my-[16px] mx-0 w-full' />
              <Text className='text-black text-[14px] leading-[24px]'>
                <b>Source : </b>
                {page}
              </Text>
              <Text className='text-black text-[14px] leading-[24px]'>
                <b>Customer Name : </b>
                {name}
              </Text>
              <Text className='text-black text-[14px] leading-[24px]'>
                <b>Customer Email Address : </b>
                {email}
              </Text>
              <Text className='text-black text-[14px] leading-[24px]'>
                <b>Customer Phone Number : </b>
                {mobilenumber}
              </Text>
              <Text className='text-black text-[14px] leading-[24px]'>
                <b>Travel Date : </b>
                {traveldate}
              </Text>
              <Text className='text-black text-[14px] leading-[24px]'>
                <b>Traveler Count : </b>
                {travelercount}
              </Text>
              <Text className='text-black text-[14px] leading-[24px]'>
                <b>Customer Message : </b>
                {message}
              </Text>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  };
  
  export default MessageUsEmail;