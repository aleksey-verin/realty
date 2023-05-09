import { FC, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import ImgEdit from '../components/ui/images/ImgEdit';
import ImgDelete from '../components/ui/images/ImgDelete';
import ImgNotfound from '../components/ui/images/ImgNotfound';
import { routes } from '../routes/routes';
import ButtonOval from '../components/ui/buttons/ButtonOval';
import PopupContainer from '../components/popup/PopupContainer';
import { contentLocal } from '../utils/constants/contentLocal';
import { Navigate, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { getCustomerData } from '../utils/helpers';
import { useSelector } from 'react-redux';
import { selectorLocalization } from '../store/reducers/localizationSlice';
import PopupEditDeal from '../components/popup/PopupEditDeal';
import { selectorDeals } from '../store/reducers/dealsSlice';

interface DealsDetailsProps {}

const DealsDetails: FC<DealsDetailsProps> = () => {
  const { lang } = useSelector(selectorLocalization);
  const { deals } = useSelector(selectorDeals);

  const mainContent = contentLocal.subPages.dealsDetails.mainContent;
  const asideContent = contentLocal.subPages.dealsDetails.asideContent;
  const statuses = contentLocal.pages.deals.progressStatuses;

  const [popupIsOpen, setPopupIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const deal = deals.find((deal) => deal.id_deal === id);
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

  const viewedProgress =
    progress === 'inProgress' ? statuses.inProgress[lang] : statuses.closed[lang];

  const imageCustomer = {
    backgroundImage: `url()`
  };

  return (
    <div className="content">
      <Header
        headerTitle={mainContent.header[lang]}
        isButtonVisible={false}
        isAsideBlockVisible={true}
        pathForButtonBack={routes.deals}
        headerButtonBackTitle={mainContent.headerButton[lang]}
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
                  <div>{mainContent.customer[lang]}</div>
                  <div>{customer ? `${customer.firstName} ${customer.lastName}` : null}</div>
                </div>
              </div>
              <div className="information-item">
                <div className="information-item__info">
                  <div>{mainContent.email[lang]}</div>
                  <div>{customer ? customer.email : null}</div>
                </div>
              </div>
              <div className="information-item">
                <div className="information-item__info">
                  <div>{mainContent.phone[lang]}</div>
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
                    <div>{mainContent.status[lang]}</div>
                    <div>{viewedProgress}</div>
                  </div>
                </div>
                <div className="information-item">
                  <div className="information-item__info">
                    <div>{mainContent.date[lang]}</div>
                    <div>{viewedDate}</div>
                  </div>
                </div>
                <div className="information-item">
                  <div className="information-item__info">
                    <div>{mainContent.area[lang]}</div>
                    <div>{`${area} m2`}</div>
                  </div>
                </div>
                <div className="information-item">
                  <div className="information-item__info">
                    <div>{mainContent.people[lang]}</div>
                    <div>{numberOfPeople}</div>
                  </div>
                </div>
                <div className="information-item">
                  <div className="information-item__info">
                    <div>{mainContent.price[lang]}</div>
                    <div>{`$ ${price}`}</div>
                  </div>
                </div>
                <div className="information-item">
                  <div className="information-item__info">
                    <div>{mainContent.roomAccess[lang]}</div>
                    <div>{access}</div>
                  </div>
                </div>
                <div className="information-item">
                  <div className="information-item__info">
                    <div>{mainContent.instructions[lang]}</div>
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
              <div className="record-title">{asideContent.activity[lang]}</div>
              <form action="#" className="record-form">
                <label htmlFor="newNote">{asideContent.description[lang]}</label>
                <input type="text" id="newNote" placeholder={asideContent.notePlaceholder[lang]} />
                <input type="datetime-local" />
                <label htmlFor="newImage">{asideContent.image[lang]}</label>
                <input type="file" />
                <ButtonOval>{asideContent.btnSave[lang]}</ButtonOval>
              </form>
            </div>
            <div className="details-aside__log log">
              <div className="log-title">{asideContent.log[lang]}</div>
              <div className="log-items">
                <div className="log-items__item log-item">
                  <div className="log-item__mark">
                    <div className="mark"></div>
                  </div>
                  <div className="log-item__content log-content">
                    <div className="log-content__date">17 Apr 2023</div>
                    <div className="log-content__text">
                      Были произведены работы по замене термостатов обогревателей во всех помещениях
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
                  <div>{asideContent.noActivity[lang]}.</div>
                </div>
              </div>
              <div className="log-loader">
                <div className="log-loader__button">{asideContent.btnLoad[lang]}</div>
              </div>
            </div>
          </div>
        </div>
        {popupIsOpen && (
          <PopupContainer
            title={contentLocal.components.popup.dealsAddEdit.headerTitleEdit[lang]}
            handleClosePopup={() => setPopupIsOpen(false)}>
            <PopupEditDeal deal={deal} handleClosePopup={() => setPopupIsOpen(false)} />
          </PopupContainer>
        )}
      </main>
    </div>
  );
};

export default DealsDetails;
