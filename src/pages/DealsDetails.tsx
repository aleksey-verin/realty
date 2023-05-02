import { FC, useState } from 'react';
// import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import ImgEdit from '../components/ui/images/ImgEdit';
import ImgDelete from '../components/ui/images/ImgDelete';
import ImgNotfound from '../components/ui/images/ImgNotfound';
import { routes } from '../routes/routes';
import ButtonOval from '../components/ui/buttons/ButtonOval';
import PopupContainer from '../components/popup/PopupContainer';
import PopupEditDeals from '../components/popup/PopupEditDeals';

interface DealsDetailsProps {}

const DealsDetails: FC<DealsDetailsProps> = () => {
  // const { id } = useParams();

  const [popupIsOpen, setPopupIsOpen] = useState(false);

  const imageCustomer = {
    backgroundImage: `url()`
  };

  return (
    <div className="content">
      <Header
        headerTitle="Deal Details"
        isButtonVisible={false}
        isAsideBlockVisible={true}
        pathForButtonBack={routes.deals}
      />
      <main>
        <div className="details">
          <div className="details-main">
            <div className="details-main__info information">
              <div className="information-item">
                <div
                  style={imageCustomer}
                  className="information-item__image column-picture__pic"></div>
                <div className="information-item__info">
                  <div>Customer</div>
                  <div>David Piotrovsky</div>
                </div>
              </div>
              <div className="information-item">
                <div className="information-item__info">
                  <div>Email</div>
                  <div>brodrigues@gmail.com</div>
                </div>
              </div>
              <div className="information-item">
                <div className="information-item__info">
                  <div>Phone</div>
                  <div>617 962 4563</div>
                </div>
              </div>
            </div>
            <div className="details-main__middle middle">
              <div className="middle-text">
                2893 Austin Secret Lane, Parowan, UT 12413 Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Soluta, porro.
              </div>
              <div className="middle-delete">
                <ImgDelete />
              </div>
              <div className="middle-edit">
                <ImgEdit handleClick={() => setPopupIsOpen(true)} />
              </div>
            </div>
            <div className="details-main__basic basic">
              <div className="basic-info">
                <div className="information-item">
                  <div className="information-item__info">
                    <div>Progress</div>
                    <div>In Progress</div>
                  </div>
                </div>
                <div className="information-item">
                  <div className="information-item__info">
                    <div>Appointment Date</div>
                    <div>Nov 17, 2021 08:00</div>
                  </div>
                </div>
                <div className="information-item">
                  <div className="information-item__info">
                    <div>Room Area</div>
                    <div>25m2</div>
                  </div>
                </div>
                <div className="information-item">
                  <div className="information-item__info">
                    <div>Number of people</div>
                    <div>10</div>
                  </div>
                </div>
                <div className="information-item">
                  <div className="information-item__info">
                    <div>Price</div>
                    <div>$ 6000</div>
                  </div>
                </div>
                <div className="information-item">
                  <div className="information-item__info">
                    <div>Room Access</div>
                    <div>Keys with doorman</div>
                  </div>
                </div>
                <div className="information-item">
                  <div className="information-item__info">
                    <div>Special Instructions</div>
                    <div>
                      At risus viverra adipiscing at in tellus. Blandit massa enim nec dui nunc
                      mattis. Lacus vel facilisis volutpat est velit.
                    </div>
                  </div>
                </div>
              </div>
              <div className="basic-image">
                <div className="basic-image__pic"></div>
              </div>
            </div>
          </div>
          <div className="details-aside">
            <div className="details-aside__record record">
              <div className="record-title">Record Activity</div>
              <form action="#" className="record-form">
                <label htmlFor="newNote">Description</label>
                <input type="text" id="newNote" placeholder="Write your notes" />
                <input type="datetime-local" />
                <label htmlFor="newImage">Image</label>
                <input type="file" />
                <ButtonOval>Save</ButtonOval>
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
                <div className="log-items__empty">
                  <div>
                    <ImgNotfound />
                  </div>
                  <div>No activity found.</div>
                </div>
              </div>
              <div className="log-loader">
                <div className="log-loader__button">Load More</div>
              </div>
            </div>
          </div>
        </div>
        {popupIsOpen && (
          <PopupContainer handleClosePopup={() => setPopupIsOpen(false)}>
            <PopupEditDeals />
          </PopupContainer>
        )}
      </main>
    </div>
  );
};

export default DealsDetails;
