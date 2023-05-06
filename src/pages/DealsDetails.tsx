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
import { contentLocal } from '../utils/constants/contentLocal';
import { Navigate, useParams } from 'react-router-dom';
import { mockDealsRus } from '../utils/mockdata/mockDealsRus';
import dayjs from 'dayjs';
import { getCustomerData } from '../utils/helpers';

interface DealsDetailsProps {}

const DealsDetails: FC<DealsDetailsProps> = () => {
  const local = 'rus';
  const mainContent = contentLocal.subPages.dealsDetails.mainContent;
  const asideContent = contentLocal.subPages.dealsDetails.asideContent;
  const statuses = contentLocal.pages.deals.progressStatuses;

  const [popupIsOpen, setPopupIsOpen] = useState(false);

  const { id } = useParams();
  const deal = mockDealsRus.find((deal) => deal.id_deal === id);
  if (!deal) return <Navigate to="/" />;

  const {
    appointmentDate,
    photoSrc,
    address: { address, city, state, zip },
    area,
    numberOfPeople,
    instructions,
    access,
    price,
    progress,
    id_customer
  } = deal;
  const viewedAddress = `${zip}, ${state}, ${city}, ${address}`;
  const viewedDate = dayjs(appointmentDate).format('MMM DD, YYYY HH:mm A');
  const styleUser = {
    backgroundImage: `url(${photoSrc})`
  };

  const customer = getCustomerData(id_customer);
  console.log(customer);

  const viewedProgress =
    progress === 'inProgress' ? statuses.inProgress[local] : statuses.closed[local];

  const imageCustomer = {
    backgroundImage: `url()`
  };

  return (
    <div className="content">
      <Header
        headerTitle={mainContent.header[local]}
        isButtonVisible={false}
        isAsideBlockVisible={true}
        pathForButtonBack={routes.deals}
        headerButtonBackTitle={mainContent.headerButton[local]}
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
                  <div>{mainContent.customer[local]}</div>
                  <div>{customer ? `${customer.firstName} ${customer.lastName}` : null}</div>
                </div>
              </div>
              <div className="information-item">
                <div className="information-item__info">
                  <div>{mainContent.email[local]}</div>
                  <div>{customer ? customer.email : null}</div>
                </div>
              </div>
              <div className="information-item">
                <div className="information-item__info">
                  <div>{mainContent.phone[local]}</div>
                  <div>{customer ? customer.phone : null}</div>
                </div>
              </div>
            </div>
            <div className="details-main__middle middle">
              <div className="middle-text">{viewedAddress}</div>
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
                    <div>{mainContent.status[local]}</div>
                    <div>{viewedProgress}</div>
                  </div>
                </div>
                <div className="information-item">
                  <div className="information-item__info">
                    <div>{mainContent.date[local]}</div>
                    <div>{viewedDate}</div>
                  </div>
                </div>
                <div className="information-item">
                  <div className="information-item__info">
                    <div>{mainContent.area[local]}</div>
                    <div>{`${area} m2`}</div>
                  </div>
                </div>
                <div className="information-item">
                  <div className="information-item__info">
                    <div>{mainContent.people[local]}</div>
                    <div>{numberOfPeople}</div>
                  </div>
                </div>
                <div className="information-item">
                  <div className="information-item__info">
                    <div>{mainContent.price[local]}</div>
                    <div>{`$ ${price}`}</div>
                  </div>
                </div>
                <div className="information-item">
                  <div className="information-item__info">
                    <div>{mainContent.roomAccess[local]}</div>
                    <div>{access}</div>
                  </div>
                </div>
                <div className="information-item">
                  <div className="information-item__info">
                    <div>{mainContent.instructions[local]}</div>
                    <div>{instructions}</div>
                  </div>
                </div>
              </div>
              <div className="basic-image">
                <div style={styleUser} className="basic-image__pic"></div>
              </div>
            </div>
          </div>
          <div className="details-aside">
            <div className="details-aside__record record">
              <div className="record-title">{asideContent.activity[local]}</div>
              <form action="#" className="record-form">
                <label htmlFor="newNote">{asideContent.description[local]}</label>
                <input type="text" id="newNote" placeholder={asideContent.notePlaceholder[local]} />
                <input type="datetime-local" />
                <label htmlFor="newImage">{asideContent.image[local]}</label>
                <input type="file" />
                <ButtonOval>{asideContent.btnSave[local]}</ButtonOval>
              </form>
            </div>
            <div className="details-aside__log log">
              <div className="log-title">{asideContent.log[local]}</div>
              <div className="log-items">
                <div className="log-items__item log-item">
                  <div className="log-item__mark">
                    <div className="mark"></div>
                  </div>
                  <div className="log-item__content log-content">
                    <div className="log-content__date">17 Apr 2023</div>
                    <div className="log-content__text">
                      Была проведены работы по замене термостатов на обогревателях по всех
                      помещениях
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
                    <div className="log-content__text">Проведена инспекция всех помещений</div>
                  </div>
                </div>
                <div className="log-items__empty">
                  <div>
                    <ImgNotfound />
                  </div>
                  <div>{asideContent.noActivity[local]}.</div>
                </div>
              </div>
              <div className="log-loader">
                <div className="log-loader__button">{asideContent.btnLoad[local]}</div>
              </div>
            </div>
          </div>
        </div>
        {popupIsOpen && (
          <PopupContainer
            title={contentLocal.components.popup.dealsAddEdit.headerTitleEdit[local]}
            handleClosePopup={() => setPopupIsOpen(false)}>
            <PopupEditDeals content={contentLocal.components.popup.dealsAddEdit} />
          </PopupContainer>
        )}
      </main>
    </div>
  );
};

export default DealsDetails;
