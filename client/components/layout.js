import Link from 'next/link';
import Head from 'next/head';
//import { Page } from 'hedron';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';

export default ({ children, title = 'This is the default title' }) => (
    <div>
        <Head>
          <title>{ title }</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link href="//cdnjs.cloudflare.com/ajax/libs/grommet/1.0.1/grommet.min.css" rel="stylesheet" type="text/css" />
        </Head>

        <App>
          <Header splash={false}
            size='small'
            float={false}
            fixed={true}>
            <Title>
              Sample Title
            </Title>
            <Box flex={true}
              justify='end'
              direction='row'
              responsive={false}>
            </Box>
          </Header>
          { children }
        </App>
    </div>
);
