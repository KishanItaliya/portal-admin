import { withPageAuthRequired, useUser, getSession } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import Sidebar from '../components/sidebar';
import Layout from '../components/layout';

export default function Home() {
  return (
    <div className="h-screen overflow-hidden">
      <Head>
        <title>Portal Admin</title>
      </Head>
      <Layout>
        <div className="p-4">
          <p>Dashboard</p>
        </div>
      </Layout>  
    </div>
  )
}

export const getServerSideProps = withPageAuthRequired({});
