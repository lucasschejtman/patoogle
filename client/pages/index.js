import Search from '../components/search';
import Layout from '../components/layout';

import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

const Page = () => (
  <Layout>
    <Search />
  </Layout>
);

export default Page;
