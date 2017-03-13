import Link from 'next/link';
import Head from 'next/head';
//import { Page } from 'hedron';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Actions from 'grommet/components/icons/base/Actions';
import Anchor from 'grommet/components/Anchor';

export default ({ children, title = 'Patntr | Home' }) => (
    <div>
        <Head>
          <title>{ title }</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link href="/static/grommet.min.css" rel="stylesheet" type="text/css" />
        </Head>

        <App>
          <Header splash={false}
            size='small'
            float={false}
            fixed={true}>
            <Title>
              Patntr
            </Title>
            <Box flex={true}
                justify='end'
                direction='row'
                responsive={false}>
                <Menu icon={<Actions />}
                  dropAlign={{"right": "right"}}>
                  <Anchor href='#'
                    className='active'>
                    First
                  </Anchor>
                  <Anchor href='#'>
                    Second
                  </Anchor>
                  <Anchor href='#'>
                    Third
                  </Anchor>
                </Menu>
            </Box>
          </Header>
          { children }
        </App>
    </div>
);
