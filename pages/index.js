import React, { Fragment } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Button } from 'antd';
import Layout from '../components/Layout';
// import './index.less';

const Home = () => (
  <Layout>
    <Fragment>
      <h1>Hello Next.js</h1>
      <Link href="/userList">
        <Button type="primary">用户列表页</Button>
      </Link>
    </Fragment>
  </Layout>
);
export default Home;
