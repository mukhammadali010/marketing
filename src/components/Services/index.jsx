import React from 'react'
import Button from '../../Generics/Button'
import { Card, CardWrapper, Container, Like } from './style'
import card1 from '../../assets/img/Rectangle 57 (1).png'
import card2 from '../../assets/img/Rectangle 57.png'
import card3 from '../../assets/img/Rectangle 57 (3).png'
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Container>
        <Button type={'secondary'} width={'320'} height={'84'} mt={'90'}>{t('contact')}</Button>
        <h3>{t('ServiceTitle')}</h3>

        <CardWrapper>
        <p className='text'>{t('ServiceText')}</p>
        <div className='cards'>
        <Card>
          <img src={card1} alt="" />
          <div className='footerCard'>
          <p className='cardText'>{t('card1')}</p><Like/>
          </div>
        </Card>
        <Card>
          <img src={card2} alt="" />
          <div className='footerCard'>
          <p className='cardText'>{t('card2')}</p><Like/>
          </div>
        </Card>
        <Card>
          <img src={card2} alt="" />
          <div className='footerCard'>
          <p className='cardText'>{t('card3')}</p><Like/>
          </div>
        </Card>
        <Card>
          <img src={card3} alt="" />
          <div className='footerCard'>
          <p className='cardText'>{t('card4')}</p><Like/>
          </div>
        </Card>
        </div>
        </CardWrapper>
      </Container>
    </div>
  )
}

export default Services