const getVisibleBlog = (blogs, { text }) => {
  return blogs.filter(blog => {
    const textMatch = blog.title.toLowerCase().includes(text.toLowerCase());
    return textMatch;
  });
};

export default getVisibleBlog;
