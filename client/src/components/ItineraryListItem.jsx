export default function ItineraryListItem(props) {
  const { name, description, image } = props.itinerary;
  return (
    <div className='inline-block p-4 m-4 align-top transition duration-500 transform bg-gray-100 shadow-lg w-72 h-100 rounded-xl hover:scale-105'>
      <div className='aspect-w-2 aspect-h-1'>
        <img
          src={image}
          alt='itinerary cover'
          className='object-cover rounded-md shadow-md'
        />
      </div>
      <div className='flex items-center justify-between'>
        <h4 className='pt-2 text-xl font-bold'>{name}</h4>
      </div>
      <div className='flex items-center pb-2'>
        <svg
          width='16'
          height='16'
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='mr-2 leading-none'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M3.1999 0.400024C3.01425 0.400024 2.8362 0.473774 2.70493 0.60505C2.57365 0.736325 2.4999 0.914373 2.4999 1.10002V1.80002H1.7999C1.4286 1.80002 1.0725 1.94752 0.809953 2.21007C0.547402 2.47263 0.399902 2.82872 0.399902 3.20002V10.2C0.399902 10.5713 0.547402 10.9274 0.809953 11.19C1.0725 11.4525 1.4286 11.6 1.7999 11.6H10.1999C10.5712 11.6 10.9273 11.4525 11.1899 11.19C11.4524 10.9274 11.5999 10.5713 11.5999 10.2V3.20002C11.5999 2.82872 11.4524 2.47263 11.1899 2.21007C10.9273 1.94752 10.5712 1.80002 10.1999 1.80002H9.4999V1.10002C9.4999 0.914373 9.42615 0.736325 9.29488 0.60505C9.1636 0.473774 8.98555 0.400024 8.7999 0.400024C8.61425 0.400024 8.4362 0.473774 8.30493 0.60505C8.17365 0.736325 8.0999 0.914373 8.0999 1.10002V1.80002H3.8999V1.10002C3.8999 0.914373 3.82615 0.736325 3.69488 0.60505C3.5636 0.473774 3.38555 0.400024 3.1999 0.400024V0.400024ZM3.1999 3.90002C3.01425 3.90002 2.8362 3.97377 2.70493 4.10505C2.57365 4.23633 2.4999 4.41437 2.4999 4.60002C2.4999 4.78568 2.57365 4.96372 2.70493 5.095C2.8362 5.22627 3.01425 5.30002 3.1999 5.30002H8.7999C8.98555 5.30002 9.1636 5.22627 9.29488 5.095C9.42615 4.96372 9.4999 4.78568 9.4999 4.60002C9.4999 4.41437 9.42615 4.23633 9.29488 4.10505C9.1636 3.97377 8.98555 3.90002 8.7999 3.90002H3.1999Z'
            fill='#3F3F46'
          />
        </svg>

        <span className='mt-1 text-base'>3 Days</span>
      </div>
      <p className='pb-4 text-sm'>
        {/*description*/} Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      {/* bookmark button */}
    </div>
  );
}
