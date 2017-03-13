import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Footer from 'grommet/components/Footer';
import Menu from 'grommet/components/Menu';
import Paragraph from 'grommet/components/Paragraph';
import Title from 'grommet/components/Title';
import Logo from 'grommet/components/icons/base/Test';

const footer = () => (
    <Footer justify='between'>
      <Title>
        <Logo />
         Patntr
      </Title>
      <Box direction='row'
        align='center'
        pad={{"between": "medium"}}>
        <Paragraph margin='none'>
          © 2017 Brah Lab
        </Paragraph>
        <Menu direction='row'
          size='small'
          dropAlign={{"right": "right"}}>
          <Anchor href='#'>
            Support
          </Anchor>
          <Anchor href='#'>
            Contact
          </Anchor>
          <Anchor href='#'>
            About
          </Anchor>
        </Menu>
      </Box>
    </Footer>
);

export default footer;
