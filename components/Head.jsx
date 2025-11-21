import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Anis Zouaghi's Profolio."
      />
      <meta
        name="keywords"
        content="anis zouaghi, anis, zouaghi, software engineer portfolio, fltter, anis zouaghi portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Anis Zouaghi's Portfolio" />
      <meta
        property="og:description"
        content="Anis Zouaghi's Profolio."
      />
      <meta property="og:image" content="https://imgur.com/YTNNknY.png" />
      <meta property="og:url" content="https://gkos.dev" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Anis Zouaghi',
};
