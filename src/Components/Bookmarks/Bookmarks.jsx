import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className=' w-1/3'>
            <div className=' bg-[#6047EC1A] rounded-lg px-12 py-5 ml-4 mt-2 pt-4'>
                <h3 className="text-[24px] text-center text-[#6047EC]">Spent time on read: {readingTime}</h3>
            </div>
            <div className=" bg-gray-300 ml-4 mt-2 p-4">

                <h2 className=" text-3xl text-center ">Bookmarked Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }

            </div>
        </div>

    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number

}
export default Bookmarks;