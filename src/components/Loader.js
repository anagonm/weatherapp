import { RotatingLines } from  'react-loader-spinner';

const Loader = () => {
  return (
    <RotatingLines
      strokeColor='#1B63A2'
      strokeWidth="5"
      animationDuration="0.75"
      width="50"
      visible={true}
    />
  )
}

export default Loader;