import { FC } from 'react';
import { useParams } from 'react-router-dom';

interface DealsDetailsProps {}

const DealsDetails: FC<DealsDetailsProps> = () => {
  const { id } = useParams();

  return <div>DealsDetails{id}</div>;
};

export default DealsDetails;
