import React, { useContext, useState, useEffect } from 'react';
import BlogCard from '../blog_card/blog_card.component';
import { MyContext } from '../../App';
import { DateRangePicker } from 'react-date-range';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween'; // Correct import for 'isBetween' plugin
import ReactPaginate from 'react-paginate';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './blogs_section_two.style.css';

dayjs.extend(isBetween); // Extend Day.js with the 'isBetween' plugin

const BlogsSectionTwo = () => {
  const { contextState } = useContext(MyContext);
  const [filteredBlogs, setFilteredBlogs] = useState(contextState.blogsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState(contextState.selectedCategory);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(2000, 0, 1), // Default start date
      endDate: new Date(), // Current date as end date
      key: 'selection',
    },
  ]);
  const [showDateRangePicker, setShowDateRangePicker] = useState(false); // For toggling the date picker

  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const blogsPerPage = 6; // Number of blogs per page

  // Update filtered blogs based on search, category, and date range
  useEffect(() => {
    const filtered = contextState.blogsData.filter((blog) => {
      const inDateRange = dayjs(blog.date).isBetween(
        dayjs(dateRange[0].startDate),
        dayjs(dateRange[0].endDate),
        null,
        '[]'
      );

      const matchesSearch =
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.info.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = category === 'All' || blog.category === category;

      return matchesSearch && matchesCategory && inDateRange;
    });

    setFilteredBlogs(filtered);
    setCurrentPage(0); // Reset to first page on filter change
  }, [searchTerm, category, dateRange, contextState.blogsData]);

  // Get blogs for the current page
  const pageCount = Math.ceil(filteredBlogs.length / blogsPerPage);
  const displayedBlogs = filteredBlogs.slice(
    currentPage * blogsPerPage,
    (currentPage + 1) * blogsPerPage
  );

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const handleDateChange = (ranges) => {
    setDateRange([ranges.selection]);
  };

  return (
    <div className="max-w-[1200px] py-[4rem] w-[90%] mx-auto">
      {/* filters */}
      <div className="relative flex gap-[5px] flex-wrap mb-[20px]">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-[1.5rem] border py-[5px] px-[10px] border-[#bababa] bg-white"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="text-[1.5rem] border py-[5px] px-[10px] border-[#bababa] bg-white"
        >
          <option className='text-[1.5rem]' value="All">All</option>
          <option className='text-[1.5rem]' value="Industry trends">Industry trends</option>
          <option className='text-[1.5rem]' value="Our research">Our research</option>
        </select>

        <div>
          <button
            className="border border-[#bababa] text-[1.6rem] py-[5px] px-[10px] bg-white"
            onClick={() => setShowDateRangePicker(!showDateRangePicker)}
          >
            Date {showDateRangePicker ? '▲' : '▼'}
          </button>

          {showDateRangePicker && (
            <div className="custom-date-range-picker left-[50%] transform -translate-x-[50%] absolute z-10 bg-white shadow-lg">
              <DateRangePicker
                ranges={dateRange}
                onChange={handleDateChange}
                className="date-range-picker"
              />
            </div>
          )}
        </div>
      </div>

      {/* Blogs Section */}
      {displayedBlogs.length ? (
        <div className="grid gap-[25px] lg:grid-cols-2 grid-cols-1">
          {displayedBlogs.map(({ imgUrl, date, author, title, info, id }, index) => (
            <BlogCard
              key={index}
              imgUrl={imgUrl}
              date={date}
              author={author}
              title={title}
              info={info}
              id={id}
            />
          ))}
        </div>
      ) : (
        <div className='text-center w-full'>
          <p className="text-[3rem]">No Blogs</p>
        </div>
      )}

      {/* Pagination Controls */}
      {filteredBlogs.length > blogsPerPage && (
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      )}
    </div>
  );
};

export default BlogsSectionTwo;