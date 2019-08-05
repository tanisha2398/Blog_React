const getVisibleBlog = (blogs, { text, searchBy }) => {
  return blogs.filter(blog => {
    if (searchBy === "title") {
      const textMatch = blog.title.toLowerCase().includes(text.toLowerCase());
      return textMatch;
    } else if (searchBy === "head") {
      const textMatch = blog.head.toLowerCase().includes(text.toLowerCase());
      return textMatch;
    }
  });
};

export default getVisibleBlog;
