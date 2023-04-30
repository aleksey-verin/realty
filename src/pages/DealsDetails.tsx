import { FC } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

interface DealsDetailsProps {}

const DealsDetails: FC<DealsDetailsProps> = () => {
  const { id } = useParams();

  return (
    <div className="content">
      <Header headerTitle="Deal Details" isButtonVisible={false} isAsideBlockVisible={true} />
      <main></main>
    </div>
  );
};

export default DealsDetails;
