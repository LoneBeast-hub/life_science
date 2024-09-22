import React, { useContext, useState, useEffect } from 'react';
import AdminBlogCard from "../admin_blog_card/admin_blog_card.component";
import { MyContext } from "../../App";
import { DateRangePicker } from 'react-date-range';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween'; // Correct import for 'isBetween' plugin
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

dayjs.extend(isBetween); // Extend Day.js with the 'isBetween' plugin

const AdminBlogsSection = () => {
  const { contextState } = useContext(MyContext);
  const [filteredBlogs, setFilteredBlogs] = useState(contextState.blogsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(2000, 0, 1), // Default start date
      endDate: new Date(), // Current date as end date
      key: 'selection',
    },
  ]);
  const [showDateRangePicker, setShowDateRangePicker] = useState(false); // For toggling the date picker

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
  }, [searchTerm, category, dateRange, contextState.blogsData]);

  const handleDateChange = (ranges) => {
    setDateRange([ranges.selection]);
  };

  return (
    <div>
      {/* filters */}
      <div className="flex gap-[5px] relative flex-wrap mb-[20px]">
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
          <option className="text-[1.5rem]" value="All">
            All
          </option>
          <option className="text-[1.5rem]" value="Industry trends">
            Industry trends
          </option>
          <option className="text-[1.5rem]" value="Our research">
            Our research
          </option>
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

      {filteredBlogs.length ? (
        <div className="grid gap-[25px] lg:grid-cols-2 grid-cols-1">
          {filteredBlogs.map(({ imgUrl, date, author, title, info, id }, index) => (
            <AdminBlogCard
              key={index}
              imgUrl={imgUrl}
              date={date}
              author={author}
              title={title}
              id={id}
              info={info}
            />
          ))}
        </div>
      ) : (
        <div className="text-center w-full">
          <p className="text-[3rem]">No Blogs</p>
        </div>
      )}
    </div>
  );
};

export default AdminBlogsSection;