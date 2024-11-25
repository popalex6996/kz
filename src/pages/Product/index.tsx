import React, { ChangeEvent, useState } from 'react';

import './index.css';
import { useTranslation } from 'react-i18next';

import apple from '../../assets/images/apple.png';
import apple2 from '../../assets/images/apple2.png';
import apple3 from '../../assets/images/apple3.png';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel ';
import Spacer from '../../components/Spacer';
import StarsRate from '../../components/StarsRate';
import { FEEDBACK, FEEDBACKS, INITIAL_USER, PRODUCT } from '../../utilities/constants';
import { Feedback } from '../../utilities/types';

const imagesCarousel = [
  { src: apple, title: 'apple' },
  { src: apple2, title: 'apple2' },
  { src: apple3, title: 'apple3' },
];

const Product = () => {
  const { t } = useTranslation();
  const [isVisibleDetails, setDetails] = useState(false);
  const [feedbackForm, setFeedbackForm] = useState(false);
  const [feedback, setFeedback] = useState<Feedback>(FEEDBACK);

  return (
    <div className="product-wrapper">
      <div className="product-image-details-wrapper">
        <div className="product-image-wrapper">
          <ImageCarousel images={imagesCarousel} />
        </div>
        <div className="product-details-wrapper">
          <div className="product-name-wrapper">
            <div className="product-name">{PRODUCT.name}</div>
            <div className="favorite-btn-wrapper">
              <Button
                onClick={() => {}}
                icon="heart"
                color="#711d1d"
                iconClassName={PRODUCT.isFavorite ? 'fa-solid' : 'fa-regular'}
              />
            </div>
          </div>
          <Spacer height={5} />
          <StarsRate rate={PRODUCT.rate} />
          <Spacer height={20} />
          <div className="product-seller">
            <span className="seller-label">{t('seller')}:</span>
            <Button
              onClick={() => {}}
              label={PRODUCT.seller}
              color="#711d1d"
              icon="up-right-from-square"
              iconClassName="fa-solid"
              className="seller-name-btn"
            />
          </div>
          <Spacer height={20} />
          <div className="product-details">
            <div className="details-label">
              {t('product-details')}:
              {PRODUCT.details.length > 170 && (
                <i
                  className={
                    isVisibleDetails
                      ? 'fa-solid fa-chevron-up more-text'
                      : 'fa-solid fa-chevron-down more-text'
                  }
                  onClick={() => setDetails(!isVisibleDetails)}
                />
              )}
            </div>
            <span className={isVisibleDetails ? 'details-text opened-details' : 'details-text'}>
              {PRODUCT.details}
            </span>
          </div>
          <Spacer height={20} />
          <div className="product-price-buy">
            <div className="product-price">
              {PRODUCT.price}
              {t('grn')}
            </div>
            <Button
              onClick={() => {}}
              icon="cart-plus"
              color="#711d1d"
              label={t('buy')}
              className="product-buy-btn"
              iconClassName="fa-solid"
            />
          </div>
          <Spacer height={10} />
        </div>
      </div>
      <Spacer height={30} />
      <div className="feedback-title">
        <div className="feedback-title-text">Відгуки</div>
        {!feedbackForm && !!FEEDBACKS.length && (
          <Button
            onClick={() => setFeedbackForm(true)}
            label={t('commentBtn')}
            color="white"
            icon="comment-medical"
            iconClassName="fa-solid"
            className="mini-left-feedback-btn"
          />
        )}
      </div>
      <Spacer height={5} />
      <div className="feedback-wrapper">
        {FEEDBACKS.length ? (
          FEEDBACKS.map((f) => {
            return (
              <div key={f.id} className="feedback">
                <div className="feedback-user-avatar-wrapper">
                  <div className="feedback-user-avatar">[User Image]</div>
                </div>
                <Spacer width={10} />
                <div className="feedback-details">
                  <div className="feedback-user">{f.user}</div>
                  <Spacer height={5} />
                  <div className="feedback-rate">
                    <StarsRate rate={f.rate} />
                  </div>
                  <Spacer height={10} />
                  <div className="feedback-text">{f.text}</div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-feedback">{t('no-feedback')}</div>
        )}
      </div>
      <Spacer height={5} />
      {!feedbackForm && (
        <Button
          onClick={() => setFeedbackForm(true)}
          label={t('commentBtn')}
          color="white"
          icon="comment-medical"
          iconClassName="fa-solid"
          className="left-feedback-btn"
        />
      )}
      <Spacer height={5} />
      {feedbackForm && (
        <div className="feedback  user-feedback-wrapper">
          <div className="feedback-user-avatar-wrapper">
            <div className="user-feedback-user-avatar">[Current User Image]</div>
          </div>
          <Spacer width={10} />
          <div className="feedback-details">
            <div className="user-feedback-user">{INITIAL_USER.name}</div>
            <Spacer height={5} />
            <div className="feedback-rate">
              <StarsRate
                color={'white'}
                activeColor={'#c60f0f'}
                rate={feedback.rate}
                changeRate={(rate: number) => {
                  setFeedback({ ...feedback, rate });
                }}
              />
            </div>
            <Spacer height={10} />
            <textarea
              id="user-feedback"
              className="user-feedback"
              autoFocus={true}
              placeholder="Type here..."
              value={feedback.text}
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                setFeedback({ ...feedback, text: event.target.value });
              }}
            />
            <Spacer height={10} />
            <div className="feedback-btns">
              <Button
                onClick={() => setFeedbackForm(true)}
                label={t('send-feedback')}
                color="white"
                icon="comment-medical"
                iconClassName="fa-solid"
                className="send-feedback-btn"
              />
              <Button
                onClick={() => {
                  setFeedbackForm(false);
                  setFeedback({ ...feedback, rate: 0, text: '' });
                }}
                label={t('cancel')}
                color="white"
                icon="ban"
                iconClassName="fa-solid"
                className="send-feedback-btn"
              />
            </div>
          </div>
        </div>
      )}
      <Spacer height={20} />
    </div>
  );
};

export default Product;
