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
    </Head>
    {/* <header>
      <nav>
        <Link href='/'><a>Home</a></Link> |
        <Link href='/about'><a>About</a></Link> |
        <Link href='/contact'><a>Contact</a></Link>
      </nav>
    </header> */}

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
          {/* <Menu icon={<Actions />}
            dropAlign={{"right": "right", "top": "top"}}>
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
          </Menu> */}
        </Box>
      </Header>
      { children }
    </App>

    <footer>
      I`m here to stay
    </footer>
  </div>
);
