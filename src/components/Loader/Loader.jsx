import { Hearts } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Hearts
      height="80"
      width="80"
      ariaLabel="hearts-loading"
      color="#831d16e3"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
