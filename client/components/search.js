import Search from 'grommet/components/Search';

const search = ({ suggestions = ['first', 'second', 'third', 'fourth'] }) => (
    <Search placeHolder='Search'
      inline={true}
      size='large'
      suggestions={suggestions}
      dropAlign={{"top": "bottom"}}
      value='' />
);

export default search;
