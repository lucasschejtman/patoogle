import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Actions from 'grommet/components/icons/base/Actions';
import Anchor from 'grommet/components/Anchor';
import Logo from 'grommet/components/icons/base/Test';

const header = () => (
    <Header splash={false}
    size='large'
    float={false}
    fixed={true}>
        <Title>
            <Logo />
            Patntr
        </Title>
        <Box flex={true}
            justify='end'
            direction='row'
            responsive={true}>
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
);

export default header;
