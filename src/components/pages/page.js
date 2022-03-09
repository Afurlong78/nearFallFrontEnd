import React from 'react';
import Header from '../header/header';
import styled from 'styled-components';
import Footer from '../footer/footer';
import { Outlet } from 'react-router';

const MainPage = styled.div`
  height: 100%;
  width: 100%;

`;

const MainContent = styled.div`
  height: 100%;
  width: 100%;
  border:1px solid transparent;

`;

const Page = () => {
  return (
    <MainPage>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </MainPage>
  )
}

export default Page;