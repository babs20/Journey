import NavButton from './NavButton';
import { Link } from 'react-router-dom';
import {
  SET_BOOKMARKS,
  SET_ITINERARY,
  SET_KEY,
  SET_MY_ITINERARIES,
} from '../reducers/application';

export default function Nav(props) {
  const setKey = () => {
    props.dispatch({
      type: SET_KEY,
      key: Math.random(),
    });
  };

  const clearItineraryState = () => {
    props.dispatch({
      type: SET_ITINERARY,
      itinerary: null,
    });
  };

  const clearMyItinerariesState = () => {
    props.dispatch({
      type: SET_MY_ITINERARIES,
      myItineraries: [],
    });
  };

  const clearBookmarksState = () => {
    props.dispatch({
      type: SET_BOOKMARKS,
      bookmarks: [],
    });
  };

  return (
    <nav className='fixed z-10 flex items-center justify-between w-full h-16 px-4 bg-gray-100 shadow-md'>
      <div className='flex items-center h-full mx-4 font-semibold'>
        <Link to='/' onClick={props.user.id && clearItineraryState}>
          <svg
            width='148'
            height='80'
            viewBox='0 0 222 80'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='mx-4 h-14'
          >
            <path
              d='M95.768 18.184C95.768 19.144 95.56 19.864 95.144 20.344C94.76 20.824 94.12 21.064 93.224 21.064C93.16 21.736 93.016 22.904 92.792 24.568C92.472 26.808 92.296 28.056 92.264 28.312C89.416 49.528 83.48 60.136 74.456 60.136C71.8 60.136 69.72 59.384 68.216 57.88C66.744 56.376 66.008 54.488 66.008 52.216C66.008 48.152 67.736 44.568 71.192 41.464C74.648 38.328 79.192 35.736 84.824 33.688C85.176 31.416 85.448 29.384 85.64 27.592L86.504 20.344C84.584 20.152 82.792 20.056 81.128 20.056C76.68 20.056 73.4 20.488 71.288 21.352C69.176 22.216 68.12 23.624 68.12 25.576C68.12 26.536 68.44 27.576 69.08 28.696C69.272 29.016 69.368 29.352 69.368 29.704C69.368 30.376 69.016 30.984 68.312 31.528C67.64 32.04 66.904 32.296 66.104 32.296C65.08 32.296 64.296 31.864 63.752 31C62.856 29.528 62.408 27.816 62.408 25.864C62.408 18.184 69.128 14.344 82.568 14.344C86.472 14.344 89.96 14.728 93.032 15.496C94.856 15.944 95.768 16.84 95.768 18.184ZM75.08 55C76.648 55 78.216 53.816 79.784 51.448C81.352 49.08 82.728 44.936 83.912 39.016C76.104 42.44 72.2 46.632 72.2 51.592C72.2 52.68 72.456 53.528 72.968 54.136C73.48 54.712 74.184 55 75.08 55ZM119.3 40.264C119.716 40.264 120.036 40.472 120.26 40.888C120.484 41.304 120.596 41.832 120.596 42.472C120.596 44.008 120.132 44.92 119.204 45.208C117.284 45.88 115.172 46.264 112.868 46.36C112.26 49.048 111.06 51.208 109.268 52.84C107.476 54.44 105.444 55.24 103.172 55.24C101.252 55.24 99.6036 54.776 98.2276 53.848C96.8836 52.92 95.8596 51.688 95.1556 50.152C94.4516 48.616 94.0996 46.952 94.0996 45.16C94.0996 42.728 94.5636 40.568 95.4916 38.68C96.4196 36.76 97.6996 35.272 99.3316 34.216C100.964 33.128 102.772 32.584 104.756 32.584C107.188 32.584 109.14 33.432 110.612 35.128C112.116 36.792 112.996 38.856 113.252 41.32C114.756 41.224 116.548 40.904 118.628 40.36C118.884 40.296 119.108 40.264 119.3 40.264ZM103.556 50.152C104.58 50.152 105.46 49.736 106.196 48.904C106.964 48.072 107.476 46.872 107.732 45.304C106.74 44.632 105.972 43.752 105.428 42.664C104.916 41.576 104.66 40.424 104.66 39.208C104.66 38.696 104.708 38.184 104.804 37.672H104.564C103.284 37.672 102.212 38.296 101.348 39.544C100.516 40.76 100.1 42.488 100.1 44.728C100.1 46.488 100.436 47.832 101.108 48.76C101.812 49.688 102.628 50.152 103.556 50.152ZM121.372 55.24C119.932 55.24 118.748 54.584 117.82 53.272C116.924 51.928 116.476 50.264 116.476 48.28C116.476 45.88 116.636 43.688 116.956 41.704C117.276 39.688 117.804 37.56 118.54 35.32C118.86 34.36 119.308 33.672 119.884 33.256C120.46 32.84 121.372 32.632 122.62 32.632C123.324 32.632 123.804 32.744 124.06 32.968C124.348 33.192 124.492 33.528 124.492 33.976C124.492 34.232 124.316 35.096 123.964 36.568C123.644 37.752 123.388 38.824 123.196 39.784C122.556 43.144 122.236 45.384 122.236 46.504C122.236 47.176 122.316 47.656 122.476 47.944C122.636 48.2 122.892 48.328 123.244 48.328C123.724 48.328 124.316 47.848 125.02 46.888C125.756 45.928 126.524 44.472 127.324 42.52C128.156 40.568 128.956 38.168 129.724 35.32C129.98 34.36 130.364 33.672 130.876 33.256C131.42 32.84 132.22 32.632 133.276 32.632C134.012 32.632 134.524 32.728 134.812 32.92C135.1 33.08 135.244 33.4 135.244 33.88C135.244 34.68 134.844 36.872 134.044 40.456C133.148 44.552 132.7 47.08 132.7 48.04C132.7 48.648 132.828 49.128 133.084 49.48C133.34 49.8 133.676 49.96 134.092 49.96C134.732 49.96 135.484 49.576 136.348 48.808C137.244 48.008 138.428 46.728 139.9 44.968C140.284 44.52 140.716 44.296 141.196 44.296C141.612 44.296 141.932 44.488 142.156 44.872C142.412 45.256 142.54 45.784 142.54 46.456C142.54 47.736 142.236 48.728 141.628 49.432C140.252 51.128 138.764 52.52 137.164 53.608C135.596 54.696 133.804 55.24 131.788 55.24C130.252 55.24 129.116 54.648 128.38 53.464C127.676 52.28 127.324 50.616 127.324 48.472C126.78 50.648 125.964 52.328 124.876 53.512C123.788 54.664 122.62 55.24 121.372 55.24ZM142.056 55.24C140.84 55.24 139.976 54.6 139.464 53.32C138.984 52.04 138.744 49.992 138.744 47.176C138.744 43.016 139.336 39.064 140.52 35.32C140.808 34.392 141.272 33.72 141.912 33.304C142.584 32.856 143.512 32.632 144.696 32.632C145.336 32.632 145.784 32.712 146.04 32.872C146.296 33.032 146.424 33.336 146.424 33.784C146.424 34.296 146.184 35.448 145.704 37.24C145.384 38.52 145.128 39.64 144.936 40.6C144.744 41.56 144.584 42.744 144.456 44.152C145.512 41.4 146.696 39.16 148.008 37.432C149.32 35.704 150.6 34.472 151.848 33.736C153.128 33 154.296 32.632 155.352 32.632C157.432 32.632 158.472 33.672 158.472 35.752C158.472 36.168 158.328 37.176 158.04 38.776C157.784 40.056 157.656 40.856 157.656 41.176C157.656 42.296 158.056 42.856 158.856 42.856C159.752 42.856 160.904 42.152 162.312 40.744C162.728 40.328 163.16 40.12 163.608 40.12C164.024 40.12 164.344 40.312 164.568 40.696C164.824 41.048 164.952 41.528 164.952 42.136C164.952 43.32 164.632 44.248 163.992 44.92C163.096 45.848 162.04 46.648 160.824 47.32C159.64 47.96 158.376 48.28 157.032 48.28C155.336 48.28 154.04 47.848 153.144 46.984C152.28 46.12 151.848 44.952 151.848 43.48C151.848 43 151.896 42.52 151.992 42.04C152.056 41.4 152.088 40.968 152.088 40.744C152.088 40.232 151.912 39.976 151.56 39.976C151.08 39.976 150.44 40.52 149.64 41.608C148.872 42.664 148.104 44.072 147.336 45.832C146.568 47.592 145.944 49.448 145.464 51.4C145.112 52.904 144.696 53.928 144.216 54.472C143.768 54.984 143.048 55.24 142.056 55.24ZM163.9 55.24C162.684 55.24 161.82 54.6 161.308 53.32C160.828 52.04 160.588 49.992 160.588 47.176C160.588 43.016 161.18 39.064 162.364 35.32C162.652 34.392 163.116 33.72 163.756 33.304C164.428 32.856 165.356 32.632 166.54 32.632C167.18 32.632 167.628 32.712 167.884 32.872C168.14 33.032 168.268 33.336 168.268 33.784C168.268 34.296 168.028 35.448 167.548 37.24C167.228 38.52 166.972 39.64 166.78 40.6C166.588 41.56 166.428 42.744 166.3 44.152C167.356 41.4 168.54 39.16 169.852 37.432C171.164 35.704 172.444 34.472 173.692 33.736C174.972 33 176.14 32.632 177.196 32.632C179.276 32.632 180.316 33.672 180.316 35.752C180.316 37 179.964 39.256 179.26 42.52C178.652 45.304 178.348 47.144 178.348 48.04C178.348 49.32 178.812 49.96 179.74 49.96C180.38 49.96 181.132 49.576 181.996 48.808C182.892 48.008 184.076 46.728 185.548 44.968C185.932 44.52 186.364 44.296 186.844 44.296C187.26 44.296 187.58 44.488 187.804 44.872C188.06 45.256 188.188 45.784 188.188 46.456C188.188 47.736 187.884 48.728 187.276 49.432C185.9 51.128 184.412 52.52 182.812 53.608C181.244 54.696 179.452 55.24 177.436 55.24C175.804 55.24 174.572 54.776 173.74 53.848C172.908 52.888 172.492 51.512 172.492 49.72C172.492 48.824 172.716 47.224 173.164 44.92C173.58 42.904 173.788 41.512 173.788 40.744C173.788 40.232 173.612 39.976 173.26 39.976C172.844 39.976 172.252 40.52 171.484 41.608C170.748 42.664 169.98 44.072 169.18 45.832C168.412 47.592 167.788 49.448 167.308 51.4C166.956 52.904 166.54 53.928 166.06 54.472C165.612 54.984 164.892 55.24 163.9 55.24ZM205.712 44.296C206.128 44.296 206.448 44.488 206.672 44.872C206.928 45.256 207.056 45.784 207.056 46.456C207.056 47.736 206.752 48.728 206.144 49.432C204.96 50.872 203.28 52.2 201.104 53.416C198.96 54.632 196.656 55.24 194.192 55.24C190.832 55.24 188.224 54.328 186.368 52.504C184.512 50.68 183.584 48.184 183.584 45.016C183.584 42.808 184.048 40.76 184.976 38.872C185.904 36.952 187.184 35.432 188.816 34.312C190.48 33.192 192.352 32.632 194.432 32.632C196.288 32.632 197.776 33.192 198.896 34.312C200.016 35.4 200.576 36.888 200.576 38.776C200.576 40.984 199.776 42.888 198.176 44.488C196.608 46.056 193.936 47.304 190.16 48.232C190.96 49.704 192.48 50.44 194.72 50.44C196.16 50.44 197.792 49.944 199.616 48.952C201.472 47.928 203.072 46.6 204.416 44.968C204.8 44.52 205.232 44.296 205.712 44.296ZM193.616 37.336C192.432 37.336 191.424 38.024 190.592 39.4C189.792 40.776 189.392 42.44 189.392 44.392V44.488C191.28 44.04 192.768 43.368 193.856 42.472C194.944 41.576 195.488 40.536 195.488 39.352C195.488 38.744 195.312 38.264 194.96 37.912C194.64 37.528 194.192 37.336 193.616 37.336ZM219.948 32.632C220.684 32.632 221.196 32.728 221.484 32.92C221.772 33.112 221.916 33.432 221.916 33.88C221.916 34.648 221.5 37.384 220.668 42.088C219.932 46.6 219.5 49.272 219.372 50.104C218.188 58.328 216.556 64.84 214.476 69.64C212.396 74.44 209.628 76.84 206.172 76.84C204.54 76.84 203.212 76.328 202.188 75.304C201.164 74.312 200.652 73 200.652 71.368C200.652 69.864 200.988 68.328 201.66 66.76C202.364 65.192 203.644 63.384 205.5 61.336C207.388 59.32 210.044 57 213.468 54.376L213.612 53.272C213.836 52.088 214.092 50.392 214.38 48.184C213.74 50.488 212.844 52.248 211.692 53.464C210.54 54.648 209.324 55.24 208.044 55.24C206.604 55.24 205.42 54.584 204.492 53.272C203.596 51.928 203.148 50.264 203.148 48.28C203.148 45.88 203.308 43.688 203.628 41.704C203.948 39.688 204.476 37.56 205.212 35.32C205.532 34.36 205.98 33.672 206.556 33.256C207.132 32.84 208.044 32.632 209.292 32.632C209.996 32.632 210.476 32.744 210.732 32.968C211.02 33.192 211.164 33.528 211.164 33.976C211.164 34.232 210.988 35.096 210.636 36.568C210.316 37.752 210.06 38.824 209.868 39.784C209.612 41.096 209.388 42.36 209.196 43.576C209.004 44.76 208.908 45.736 208.908 46.504C208.908 47.72 209.244 48.328 209.916 48.328C210.396 48.328 210.988 47.848 211.692 46.888C212.428 45.928 213.196 44.472 213.996 42.52C214.828 40.568 215.628 38.168 216.396 35.32C216.652 34.36 217.036 33.672 217.548 33.256C218.092 32.84 218.892 32.632 219.948 32.632ZM206.7 72.184C207.5 72.184 208.396 71.256 209.388 69.4C210.38 67.544 211.372 64.456 212.364 60.136C209.9 62.216 208.108 64.104 206.988 65.8C205.9 67.528 205.356 69.032 205.356 70.312C205.356 70.856 205.452 71.304 205.644 71.656C205.868 72.008 206.22 72.184 206.7 72.184Z'
              fill='#3F3F46'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M31.2 18.1237L20.8 28.5237V61.8765L31.2 51.4765V18.1237ZM9.63815 22.5619C9.27454 22.1984 8.81131 21.9508 8.30703 21.8505C7.80276 21.7503 7.28007 21.8018 6.80505 21.9985C6.33003 22.1952 5.92401 22.5284 5.63831 22.9559C5.35261 23.3833 5.20006 23.8859 5.19995 24.4001V50.4001C5.2001 51.0896 5.47412 51.7508 5.96175 52.2383L15.6 61.8765V28.5237L9.63815 22.5619ZM46.0382 27.7619L36.4 18.1237V51.4765L42.3617 57.4383C42.7254 57.8018 43.1886 58.0493 43.6929 58.1496C44.1971 58.2499 44.7198 58.1984 45.1949 58.0016C45.6699 57.8049 46.0759 57.4717 46.3616 57.0442C46.6473 56.6168 46.7998 56.1142 46.7999 55.6001V29.6001C46.7998 28.9106 46.5258 28.2493 46.0382 27.7619V27.7619Z'
              fill='#0D9488'
            />
          </svg>
        </Link>
        <NavButton
          link='/itineraries'
          onClick={() => {
            setKey();
            clearItineraryState();
          }}
        >
          Itineraries
        </NavButton>
      </div>
      <div className='flex items-center h-full mx-6 font-semibold'>
        {props.user.id && (
          <NavButton
            link={`/dashboard/${props.user.id}`}
            onClick={clearItineraryState}
          >
            Dashboard
          </NavButton>
        )}
        {props.user.id && (
          <NavButton
            link='/'
            onClick={() => {
              props.logout();
              clearItineraryState();
              clearMyItinerariesState();
              clearBookmarksState();
            }}
          >
            Log out
          </NavButton>
        )}
        {!props.user.id && (
          <NavButton link='/login' onClick={clearItineraryState}>
            Log in
          </NavButton>
        )}
        {!props.user.id && (
          <NavButton link='/signup' onClick={clearItineraryState}>
            Sign up
          </NavButton>
        )}
      </div>
    </nav>
  );
}
