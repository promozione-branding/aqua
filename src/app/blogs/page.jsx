import React from 'react'
import BlogClient from './BlogClient';

export const metadata = {
  title: "Our Blogs",
  description: "our blogs.",
};

export default function page() {
  return (
    <>
    <BlogClient />
    </>
  )
}
