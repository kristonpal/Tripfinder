import React from 'react';
import Head from 'next/head';
import { AgentDetailsViewPage } from 'container/Agent/index';
import GetAPIData, { ProcessAPIData } from 'library/helpers/get_api_data';
import { getDeviceType } from 'library/helpers/get_device_type';

export default function profilePage(props) {
  return (
    <>
      <Head>
        <title>Agent | TripFinder.</title>
      </Head>
      <AgentDetailsViewPage {...props} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const apiUrl = [
    {
      endpoint: 'agent',
      name: 'listingAgent',
    },
  ];
  const pageData = await GetAPIData(apiUrl);
  const processedData = ProcessAPIData(pageData);
  const deviceType = getDeviceType(req);
  return {
    props: { processedData, deviceType },
  };
}
