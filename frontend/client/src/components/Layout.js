import Navbar from 'components/Navbar';
import { Helmet } from 'react-helmet';

const Layout = ({title, children, content}) => (
<>

  <Helmet>
  <title>(title)</title>
  <meta name = 'description' content = {content}/>
  </Helmet>
  <Navbar />
  <div>{children}</div>
</>
);

export default Layout;