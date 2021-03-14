import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function MyItinerariesListItem(props) {
  const {
    name,
    description,
    image,
    creator_id,
    id,
    trip_type,
  } = props.itinerary;

  const [state, setState] = useState({
    normal: 'mb-0.25 aspect-w-2 aspect-h-1',
  });

  return (
    <Link
      to={`/itineraries/${id}`}
      className='flex flex-col justify-between w-full h-auto p-4 transition duration-500 transform bg-gray-100 shadow-lg rounded-xl hover:scale-105'
    >
      <article>
        <figure
          className='mb-0.25 aspect-w-2 aspect-h-1 overflow-hidden rounded-md'
          onMouseEnter={() => console.log('working')}
        >
          <div className='z-10 flex items-center justify-center space-x-8 bg-gray-700 bg-opacity-50'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-12 h-12 text-gray-100'
            >
              <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
              <path
                fillRule='evenodd'
                d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                clipRule='evenodd'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-12 h-12 text-gray-100'
            >
              <path
                fillRule='evenodd'
                d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <img
            src={image}
            alt='itinerary cover'
            className='object-cover rounded-md shadow-lg blur'
          />
        </figure>
        <div className='flex space-x-2'>
          <div className='flex items-center justify-center px-2.5 py-2 bg-teal-600 w-min whitespace-nowrap rounded-2xl my-2 shadow-md'>
            <svg
              width='14'
              height='14'
              viewBox='0 0 12 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='mr-2 text-gray-200'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3.1999 0.400024C3.01425 0.400024 2.8362 0.473774 2.70493 0.60505C2.57365 0.736325 2.4999 0.914373 2.4999 1.10002V1.80002H1.7999C1.4286 1.80002 1.0725 1.94752 0.809953 2.21007C0.547402 2.47263 0.399902 2.82872 0.399902 3.20002V10.2C0.399902 10.5713 0.547402 10.9274 0.809953 11.19C1.0725 11.4525 1.4286 11.6 1.7999 11.6H10.1999C10.5712 11.6 10.9273 11.4525 11.1899 11.19C11.4524 10.9274 11.5999 10.5713 11.5999 10.2V3.20002C11.5999 2.82872 11.4524 2.47263 11.1899 2.21007C10.9273 1.94752 10.5712 1.80002 10.1999 1.80002H9.4999V1.10002C9.4999 0.914373 9.42615 0.736325 9.29488 0.60505C9.1636 0.473774 8.98555 0.400024 8.7999 0.400024C8.61425 0.400024 8.4362 0.473774 8.30493 0.60505C8.17365 0.736325 8.0999 0.914373 8.0999 1.10002V1.80002H3.8999V1.10002C3.8999 0.914373 3.82615 0.736325 3.69488 0.60505C3.5636 0.473774 3.38555 0.400024 3.1999 0.400024V0.400024ZM3.1999 3.90002C3.01425 3.90002 2.8362 3.97377 2.70493 4.10505C2.57365 4.23633 2.4999 4.41437 2.4999 4.60002C2.4999 4.78568 2.57365 4.96372 2.70493 5.095C2.8362 5.22627 3.01425 5.30002 3.1999 5.30002H8.7999C8.98555 5.30002 9.1636 5.22627 9.29488 5.095C9.42615 4.96372 9.4999 4.78568 9.4999 4.60002C9.4999 4.41437 9.42615 4.23633 9.29488 4.10505C9.1636 3.97377 8.98555 3.90002 8.7999 3.90002H3.1999Z'
                fill='#e5e7eb'
              />
            </svg>

            <span className='text-xs font-bold text-gray-200'>7 Days</span>
          </div>
          <div className='flex items-center justify-center px-2.5 py-2 bg-teal-600 w-min whitespace-nowrap rounded-2xl my-2 shadow-md'>
            <span className='text-xs font-bold text-gray-200 pl-0.5'>
              {`${trip_type.charAt(0).toUpperCase()}${trip_type.slice(1)}`}
            </span>
          </div>
        </div>
        <h4 className='mb-1 text-xl font-bold'>{name}</h4>
        <p className='pb-4 text-sm line-clamp-3'>{description}</p>
        <footer className='flex flex-row-reverse items-center hidden mr-2'>
          {creator_id === props.user.id && (
            <svg
              width='20'
              height='20'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='ml-2 text-gray-700 duration-200 transform fill-current hover:text-red-600 hover:scale-125'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7.1999 1.59998C7.05137 1.60005 6.9058 1.64148 6.77948 1.71962C6.65317 1.79775 6.5511 1.90951 6.4847 2.04238L5.9055 3.19998H3.1999C2.98773 3.19998 2.78425 3.28426 2.63422 3.43429C2.48419 3.58432 2.3999 3.7878 2.3999 3.99998C2.3999 4.21215 2.48419 4.41563 2.63422 4.56566C2.78425 4.71569 2.98773 4.79998 3.1999 4.79998V12.8C3.1999 13.2243 3.36847 13.6313 3.66853 13.9313C3.96859 14.2314 4.37556 14.4 4.7999 14.4H11.1999C11.6242 14.4 12.0312 14.2314 12.3313 13.9313C12.6313 13.6313 12.7999 13.2243 12.7999 12.8V4.79998C13.0121 4.79998 13.2156 4.71569 13.3656 4.56566C13.5156 4.41563 13.5999 4.21215 13.5999 3.99998C13.5999 3.7878 13.5156 3.58432 13.3656 3.43429C13.2156 3.28426 13.0121 3.19998 12.7999 3.19998H10.0943L9.5151 2.04238C9.44871 1.90951 9.34664 1.79775 9.22032 1.71962C9.09401 1.64148 8.94843 1.60005 8.7999 1.59998H7.1999ZM5.5999 6.39998C5.5999 6.1878 5.68419 5.98432 5.83422 5.83429C5.98425 5.68426 6.18773 5.59998 6.3999 5.59998C6.61208 5.59998 6.81556 5.68426 6.96559 5.83429C7.11562 5.98432 7.1999 6.1878 7.1999 6.39998V11.2C7.1999 11.4121 7.11562 11.6156 6.96559 11.7657C6.81556 11.9157 6.61208 12 6.3999 12C6.18773 12 5.98425 11.9157 5.83422 11.7657C5.68419 11.6156 5.5999 11.4121 5.5999 11.2V6.39998ZM9.5999 5.59998C9.38773 5.59998 9.18425 5.68426 9.03422 5.83429C8.88419 5.98432 8.7999 6.1878 8.7999 6.39998V11.2C8.7999 11.4121 8.88419 11.6156 9.03422 11.7657C9.18425 11.9157 9.38773 12 9.5999 12C9.81208 12 10.0156 11.9157 10.1656 11.7657C10.3156 11.6156 10.3999 11.4121 10.3999 11.2V6.39998C10.3999 6.1878 10.3156 5.98432 10.1656 5.83429C10.0156 5.68426 9.81208 5.59998 9.5999 5.59998Z'
              />
            </svg>
          )}

          <svg
            width='20'
            height='20'
            viewBox='0 0 17 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='text-gray-700 duration-200 transform fill-current hover:text-teal-600 hover:scale-125'
          >
            <path d='M14.2398 2.0688C13.9331 1.76885 13.5172 1.60034 13.0835 1.60034C12.6499 1.60034 12.234 1.76885 11.9273 2.0688L5.72412 8.1376V10.4H8.03661L14.2398 4.3312C14.5464 4.03116 14.7186 3.62426 14.7186 3.2C14.7186 2.77574 14.5464 2.36884 14.2398 2.0688Z' />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M1.63525 4.79995C1.63525 4.3756 1.80756 3.96864 2.11426 3.66858C2.42096 3.36852 2.83694 3.19995 3.27068 3.19995H6.54153C6.7584 3.19995 6.96639 3.28424 7.11974 3.43427C7.27309 3.5843 7.35924 3.78778 7.35924 3.99995C7.35924 4.21212 7.27309 4.41561 7.11974 4.56564C6.96639 4.71567 6.7584 4.79995 6.54153 4.79995H3.27068V12.8H11.4478V9.59995C11.4478 9.38778 11.534 9.1843 11.6873 9.03427C11.8407 8.88424 12.0486 8.79995 12.2655 8.79995C12.4824 8.79995 12.6904 8.88424 12.8437 9.03427C12.9971 9.1843 13.0832 9.38778 13.0832 9.59995V12.8C13.0832 13.2243 12.9109 13.6313 12.6042 13.9313C12.2975 14.2314 11.8815 14.4 11.4478 14.4H3.27068C2.83694 14.4 2.42096 14.2314 2.11426 13.9313C1.80756 13.6313 1.63525 13.2243 1.63525 12.8V4.79995Z'
            />
          </svg>
        </footer>
      </article>
    </Link>
  );
}
