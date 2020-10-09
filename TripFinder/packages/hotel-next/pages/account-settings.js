import React from 'react';
import Head from 'next/head';
import { AgentAccountSettingsPage } from 'container/Agent/';
import GetAPIData, { ProcessAPIData } from 'library/helpers/get_api_data';

export default function accountSettingsPage({ processedData }) {
  return (
    <>
      <Head>
        <title>Account Settings | TripFinder.</title>
      </Head>
      <AgentAccountSettingsPage processedData={processedData} />
    </>
  );
}

export async function getServerSideProps() {
  const apiUrl = [
    {
      endpoint: 'agent',
      name: 'agentProfile',
    },
  ];
  const pageData = await GetAPIData(apiUrl);
  const processedData = ProcessAPIData(pageData);
  return {
    props: { processedData },
  };
}
