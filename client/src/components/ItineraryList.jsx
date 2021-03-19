import { useState } from 'react';

import ItineraryListItem from './ItineraryListItem';

export default function ItineraryList(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const [type, setType] = useState({
    couples: false,
    groups: false,
    families: false,
    solo: false,
    backpackers: false,
    luxury: false,
    business: false,
    accessibility: false,
  });

  const handleTypeChange = event => {
    const { checked, name } = event.target;
    setType({ ...type, [name]: checked });
  };

  const [length, setLength] = useState(5);

  const HIDE = 'HIDE';
  const SHOW = 'SHOW';
  const [view, setView] = useState(HIDE);

  const advancedSearchView = () => {
    if (view === HIDE) {
      setView(SHOW);
    } else {
      setView(HIDE);
    }
  };

  const tripTypes = [
    'Couples',
    'Groups',
    'Families',
    'Solo',
    'Backpackers',
    'Luxury',
    'Business',
    'Accessibility',
  ];

  const parsedItineraries = props.itineraries.map(itinerary => (
    <ItineraryListItem
      key={itinerary.id}
      itinerary={itinerary}
      user={props.user}
      addBookmark={props.addBookmark}
      dispatch={props.dispatch}
      bookmarks={props.bookmarks.map(bookmark => bookmark.id)}
    />
  ));

  const search = event => {
    event.preventDefault();
    // default loads in to be a list of 20-25 itineraries (most popular based on bookmarks)
    // always display based on popularity

    // typing into the search bar searches the locations, itinerary name, itinerary description

    setView(HIDE);

    if (view === HIDE) {
      // searching only based on the name - display all trip durations & types
    } else {
      // search based on name, trip type, trip length
    }

    // advanced search options:
    // trip type - couples, groups, families, solo, backpackers, business, accessibility, luxury
    // trip length - slider? incrementor? - search results will display trips with +- 2 days
    // trip length stops at 20 days - if select 20, return all results with at least 20 days
  };

  return (
    <div className='pt-16'>
      <h1>Explore</h1>
      <form onSubmit={search}>
        <input
          value={searchTerm}
          name='search'
          onChange={event => setSearchTerm(event.target.value)}
          type='text'
          placeholder='Search'
          className='mb-2 border-gray-300 rounded-md focus:ring-teal-600 focus:ring-1 focus:border-teal-600'
        />
        <button type='button' onClick={advancedSearchView}>
          Filter
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z'
              clipRule='evenodd'
            />
          </svg>
        </button>
        {view === SHOW && (
          <div>
            <h4>Trip Type</h4>
            {tripTypes.map((tripType, index) => {
              return (
                <div key={index}>
                  <input
                    type='checkbox'
                    id={tripType.toLowerCase()}
                    name={tripType.toLowerCase()}
                    value={tripType.toLowerCase()}
                    checked={type[tripType.toLowerCase()]}
                    onChange={handleTypeChange}
                    className='mr-2 text-teal-600 border-gray-300 rounded focus:ring-teal-500 ring-offset-0'
                  />
                  <label htmlFor={tripType.toLowerCase()}>{tripType}</label>
                </div>
              );
            })}
            <h4>Trip Length</h4>
            <input
              type='range'
              min='1'
              max='20'
              increment='1'
              name='length'
              value={length}
              onChange={event => setLength(event.target.value)}
            />
            <input
              type='number'
              min='1'
              max='20'
              name='length'
              value={length}
              onChange={event => setLength(event.target.value)}
            />
          </div>
        )}
        <button
          type='submit'
          className='flex justify-between px-4 py-2 font-semibold text-gray-200 bg-teal-600 border-2 border-transparent rounded-xl focus:ring-teal-600 focus:ring-1'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='w-5 h-5'
          >
            <path
              fillRule='evenodd'
              d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </form>
      <section className='grid w-full gap-4 m-8 mt-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-flow-rows'>
        {parsedItineraries}
      </section>
    </div>
  );
}
