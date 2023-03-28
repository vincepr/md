import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import JsPlayground from '/src/components/JS/JsPlayground.jsx';



/*
* The Homepage where we just display the basic Playground component for max width usage.
*/

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Js-Playground from ${siteConfig.title}`}
      description="javascript playground with console-log Output">

      <main >
        <JsPlayground/> 
      </main>
    </Layout>
  );
}
