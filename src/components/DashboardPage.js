import React from "react";
import BlogListFilter from "./BlogListFilter";
import BlogList from "./BlogList";
import BlogSummary from "./BlogSummary";

export const DashboardPage = () => (
  <div>
    <BlogSummary />
    <BlogListFilter />
    <BlogList />
  </div>
);

export default DashboardPage;
