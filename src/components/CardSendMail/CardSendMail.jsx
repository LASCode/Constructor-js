import './CardSendMail.scss';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import axios from "axios";
import { ServerResponseModal } from "../ServerResponseModal/ServerResponseModal";

const url = {
  teras: 'https://constructor.teras-mebel.ru/PHPMailer/constructor_form.php',
  akmetron: 'https://akmetron.ru/PHPMailer/constructor_form.php',
}

const CardSendMail = ({itemsArray, clearFunc}) => {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const [isFetching, setIsFetching] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);
  const onSubmit = async (data) => {
    const resultArray = [data, ...itemsArray];
    const formData = new URLSearchParams();
    resultArray.forEach((el, i) => {
      Object.entries(el).forEach(elem => formData.append(`data[${i}][${elem[0]}]`, `${elem[1]}`))
    })
    setIsFetching(true);
    try {
      const response = await axios.post(url.teras, formData, {
        headers: {
          'accept': '*/*',
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      })
      console.log(response);
      if (response.status === 200) { setSuccessPopup(true) }
      if (response.status !== 200) { setErrorPopup(true) }
    } catch (e) {
      setErrorPopup(true)
      console.log(`Ошибка сервера: ${e.message}`);
    }
    setIsFetching(false);
  }
  return (
    <div className='CardSendMail'>
      <h4 className='CardSendMail__title'>Сделать заказ</h4>
      <form onSubmit={handleSubmit(onSubmit)} className='CardSendMail__form'>
        <span className='CardSendMail__formItemContainer'>
          {!!errors.nameUser && <span className='CardSendMail__errorMessage'>{errors.nameUser.message}</span>}
          <input className='CardSendMail__input' type='text' placeholder='Название компании/ФИО' {...register('nameUser', {
                    required: {value: true, message: 'Это обязательное поле'},
                  })}/>
        </span>
        <span className='CardSendMail__formItemContainer'>
          {!!errors.phone && <span className='CardSendMail__errorMessage'>{errors.phone.message}</span>}
          <input className='CardSendMail__input' type='text' placeholder='Номер телефона' {...register('phone', {
                    required: {value: true, message: 'Это обязательное поле'},
                  })}/>
        </span>
        <span className='CardSendMail__formItemContainer'>
          {!!errors.email && <span className='CardSendMail__errorMessage'>{errors.email.message}</span>}
          <input className='CardSendMail__input' type='text' placeholder='Email' {...register('email', {
                    required: {value: true, message: 'Это обязательное поле'},
                    pattern: {value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: 'Некорректнй email'}
                  })}/>
        </span>
        <input className='CardSendMail__input' type='text' placeholder='Комментарий к заказу' {...register('comment')}/>
        <div className='CardSendMail__actions'>
          <button className='CardSendMail__button' type='submit' disabled={isFetching}>Отправить</button>
          <button className='CardSendMail__button' type='button' onClick={clearFunc}>Сбросить всё</button>
        </div>
      </form>
      {errorPopup &&
        <ServerResponseModal title='Ошибка сервера' onClose={() => setErrorPopup(false)} type='error'>
          Произошла ошибка сервера, повторите попытку позже.
        </ServerResponseModal>
      }
      {successPopup &&
      <ServerResponseModal title='Спасибо за Ваше обращение' onClose={() => setSuccessPopup(false)} type='success'>
        Сотрудники нашей компании свяжутся с Вами в ближайшее время.
      </ServerResponseModal>
      }
    </div>
  );
};

export { CardSendMail };