import { FC } from 'react';
// import { useParams } from 'react-router-dom';
import Header from '../components/Header';

interface DealsDetailsProps {}

const DealsDetails: FC<DealsDetailsProps> = () => {
  // const { id } = useParams();

  return (
    <div className="content">
      <Header headerTitle="Deal Details" isButtonVisible={false} isAsideBlockVisible={true} />
      <main>
        <div className="details">
          <div className="details-main">details</div>
          <div className="details-aside">
            <div className="details-aside__record record">
              <div className="record-title">Record Activity</div>
              <form action="#" className="record-form">
                <label htmlFor="newNote">Description</label>
                <input type="text" id="newNote" placeholder="Write your notes" />
                <input type="date" />
                <label htmlFor="newImage">Image</label>
                <input type="file" />
                <button className="button" type="submit">
                  Save
                </button>
              </form>
            </div>
            <div className="details-aside__log log">
              <div className="log-title">Activity Log</div>
              <div className="log-items">
                <div className="log-items__item log-item">
                  <div className="log-item__mark">
                    <div className="mark"></div>
                  </div>
                  <div className="log-item__content log-content">
                    <div className="log-content__date">17 Apr 2023</div>
                    <div className="log-content__text">
                      Installation or inspection of your thermostat Lorem ipsum dolor sit amet.
                    </div>
                    <div className="log-content__image"></div>
                  </div>
                </div>
                <div className="log-items__item log-item">
                  <div className="log-item__mark">
                    <div className="mark"></div>
                  </div>
                  <div className="log-item__content log-content">
                    <div className="log-content__date">17 Apr 2023</div>
                    <div className="log-content__text">Installation or inspection</div>
                  </div>
                </div>
              </div>
              <div className="log-loader">
                <div className="log-loader__button">Load More</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DealsDetails;
