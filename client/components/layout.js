import Header from './base/header';
import Footer from './base/footer';

import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Head from 'next/head';

const layout = ({ children, title = 'Patntr | Home' }) => (
    <App>
        <Head>
          <title>{ title }</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link href="/static/grommet.min.css" rel="stylesheet" type="text/css" />
        </Head>

        <Box full={true}>
            <Header />

            <Box flex={true}>
                { children }
            </Box>

            <Footer />
        </Box>
    </App>
);

export default layout;
