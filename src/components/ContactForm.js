import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const ContactForm = ({ type }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  // Create a ref for the form element
  const formRef = useRef();
  
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: '',
    type: '',
  });

  // Function for displaying alerts
  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });
    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 5000);
  };

  // Updated onSubmit using sendForm which supports file attachments
  const onSubmit = async () => {
    try {
      setDisabled(true);
      await emailjs.sendForm(
        'service_w01gh9s',      // Your EmailJS service ID
        'template_vsau579',      // Your EmailJS template ID
        formRef.current,         // The form reference that includes file input
        'pOf_zq5s-BB3qtbcB'      // Your EmailJS public key
      );
      toggleAlert('Form submission was successful!', 'success');
    } catch (error) {
      console.error(error);
      toggleAlert('Uh oh. Something went wrong.', 'danger');
    } finally {
      setDisabled(false);
      reset();
    }
  };

  return (
    <div className='ContactForm'>
      <div className='container'>
        <div className='row'>
          <div className='flex flex-col text-center'>
            <div className='contactForm'>
              {/* Attach the form ref to the form element */}
              <form
                ref={formRef}
                id='contact-form'
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="flex flex-col gap-5 w-[30vw]"
              >
                <div className='formRow'>
                  <div className='flex flex-col overflow-hidden'>
                    <input
                      type='text'
                      name='name'
                      {...register('name', {
                        required: {
                          value: true,
                          message: 'Please enter your name',
                        },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less',
                        },
                      })}
                      className='form-control formInput border border-neutral-400 rounded-lg p-4'
                      placeholder='Your name'
                    />
                    {errors.name && (
                      <span className='errorMessage text-sm text-red-800'>
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="formRow">
                  <div className='flex flex-col'>
                    <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      })}
                      className='form-control formInput border border-neutral-400 rounded-lg p-4'
                      placeholder='Your email address'
                    />
                    {errors.email && (
                      <span className='errorMessage text-sm text-red-800'>
                        Please enter a valid email address
                      </span>
                    )}
                  </div>
                </div>
                <div className='row formRow'>
                  <div className='flex flex-col'>
                    <textarea
                      name='message'
                      {...register('message', {
                        required: type === "Contact Us",
                      })}
                      className='form-control formInput border border-neutral-400 rounded-lg p-4 w-full'
                      placeholder={type === "Contact Us" ? 'Message' : 'Message (Optional)'}
                    ></textarea>
                    {errors.message && (
                      <span className='errorMessage text-sm text-red-800'>
                        Please enter a message
                      </span>
                    )}
                  </div>
                </div>
                {/* File input for attachments */}
                {type === "Submit" ?
                  <div className='formRow'>
                    <div className='flex flex-col'>
                      <input
                        type='file'
                        name='attachment'
                        {...register('attachment')}
                        className='form-control formInput'
                      />
                    </div>
                  </div>
                  : 
                  <></>
                }
                <button
                  className='submit-btn self-center w-fit bg-red-700 border border-black text-white px-5 py-3 rounded-lg m-1 cursor-pointer font-semibold hover:bg-white hover:text-black transition-all duration-300'
                  disabled={disabled}
                  type='submit'
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {alertInfo.display && (
        <div
          className={`alert alert-${alertInfo.type} alert-dismissible mt-5 text-center`}
          role='alert'
        >
          {alertInfo.message}
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='alert'
            aria-label='Close'
            onClick={() =>
              setAlertInfo({ display: false, message: '', type: '' })
            }
          ></button>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
