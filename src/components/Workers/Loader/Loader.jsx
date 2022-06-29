import PulseLoader from 'react-spinners/PulseLoader';

export default function Loader() {
  return (
    <PulseLoader
      size={15}
      margin={10}
      color={'#123abc'}
      speedMultiplier={1.5}
    />
  );
}
