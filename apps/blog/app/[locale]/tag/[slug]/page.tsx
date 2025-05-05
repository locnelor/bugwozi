const TagPage = () => {

  return (
    <div>

    </div>
  )
}
export default TagPage

// "use client";

// import { Card, List, Tag as AntTag, Empty, Breadcrumb } from "antd";
// import { 
//   CalendarOutlined, 
//   CommentOutlined, 
//   TagsOutlined, 
//   HomeOutlined,
//   FolderOutlined 
// } from "@ant-design/icons";
// import Link from "next/link";

// interface TagPageProps {
//   params: {
//     slug: string;
//   };
// }

// interface Post {
//   id: string;
//   title: string;
//   date: string;
//   excerpt: string;
//   category: string;
//   tags: string[];
//   comments: number;
// }

// export default function TagPage({ params }: TagPageProps) {
//   const { slug } = params;
//   const tagName = slug.charAt(0).toUpperCase() + slug.slice(1);
  
//   // Mock posts data
//   const allPosts: Post[] = [
//     {
//       id: "1",
//       title: "Getting Started with Next.js",
//       date: "2023-05-15",
//       excerpt: "Learn how to set up a Next.js project and explore its key features.",
//       category: "Programming",
//       tags: ["Next.js", "React", "Web Development"],
//       comments: 5,
//     },
//     {
//       id: "2",
//       title: "Tailwind CSS Best Practices",
//       date: "2023-06-20",
//       excerpt: "Discover the most efficient ways to use Tailwind CSS in your projects.",
//       category: "CSS",
//       tags: ["Tailwind", "CSS", "Styling"],
//       comments: 8,
//     },
//     {
//       id: "3",
//       title: "Understanding TypeScript Generics",
//       date: "2023-07-10",
//       excerpt: "A comprehensive guide to using generics in TypeScript.",
//       category: "TypeScript",
//       tags: ["TypeScript", "JavaScript", "Programming"],
//       comments: 3,
//     },
//     {
//       id: "4",
//       title: "State Management in React",
//       date: "2023-07-05",
//       excerpt: "Comparing different state management approaches in React applications.",
//       category: "React",
//       tags: ["React", "State Management", "JavaScript"],
//       comments: 7,
//     },
//     {
//       id: "5",
//       title: "Year in Review: Web Development Trends",
//       date: "2022-12-28",
//       excerpt: "Looking back at the most important web development trends of 2022.",
//       category: "Web Development",
//       tags: ["Web Dev", "Trends", "Year Review"],
//       comments: 10,
//     },
//     {
//       id: "6",
//       title: "Building a Blog with Next.js and Ant Design",
//       date: "2023-08-15",
//       excerpt: "A guide on how to build a beautiful blog using Next.js and Ant Design.",
//       category: "Next.js",
//       tags: ["Next.js", "Ant Design", "Blog"],
//       comments: 2,
//     },
//   ];
  
//   // Filter posts by tag (case insensitive)
//   const filteredPosts = allPosts.filter(post => 
//     post.tags.some(tag => tag.toLowerCase() === slug.toLowerCase())
//   );
  
//   // If tag doesn't exist in our system exactly as typed, try to find a close match
//   const standardizedTags: Record<string, string> = {
//     "nextjs": "Next.js",
//     "javascript": "JavaScript",
//     "typescript": "TypeScript",
//     "react": "React",
//     "webdev": "Web Development",
//     "web-dev": "Web Development",
//     "tailwindcss": "Tailwind",
//     "tailwind-css": "Tailwind",
//   };
  
//   const displayTagName = standardizedTags[slug.toLowerCase()] || tagName;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="bg-white rounded-lg p-6 shadow-sm">
//         <Breadcrumb
//           className="mb-6"
//           items={[
//             {
//               title: <Link href="/"><HomeOutlined /> Home</Link>,
//             },
//             {
//               title: <Link href="/tags">Tags</Link>,
//             },
//             {
//               title: displayTagName,
//             },
//           ]}
//         />

//         <div className="mb-8">
//           <h1 className="text-3xl font-bold">
//             <TagsOutlined className="mr-2" />Posts tagged with "{displayTagName}"
//           </h1>
//           <div className="mt-2 text-gray-500">
//             Found {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
//           </div>
//         </div>

//         {filteredPosts.length > 0 ? (
//           <List
//             itemLayout="vertical"
//             dataSource={filteredPosts}
//             renderItem={(post: Post) => (
//               <List.Item>
//                 <Card className="w-full mb-4 shadow-sm hover:shadow-md transition-shadow">
//                   <Link href={`/article/${post.id}`} className="text-xl font-semibold hover:text-blue-600 transition-colors">
//                     {post.title}
//                   </Link>
//                   <div className="mt-2 text-gray-500 text-sm">
//                     <CalendarOutlined className="mr-1" /> {post.date}
//                     <span className="mx-2">•</span>
//                     <CommentOutlined className="mr-1" /> {post.comments} comments
//                   </div>
//                   <div className="mt-1 flex flex-wrap gap-2">
//                     <AntTag color="blue" icon={<FolderOutlined />}>
//                       <Link href={`/category/${post.category.toLowerCase()}`} className="text-inherit">
//                         {post.category}
//                       </Link>
//                     </AntTag>
//                     {post.tags.map((tag: string) => (
//                       <AntTag 
//                         key={tag} 
//                         color={tag.toLowerCase() === slug.toLowerCase() ? "success" : "processing"} 
//                         icon={<TagsOutlined />}
//                       >
//                         <Link href={`/tag/${tag.toLowerCase()}`} className="text-inherit">
//                           {tag}
//                         </Link>
//                       </AntTag>
//                     ))}
//                   </div>
//                   <p className="mt-3 text-gray-700">{post.excerpt}</p>
//                   <div className="mt-4">
//                     <Link 
//                       href={`/article/${post.id}`} 
//                       className="text-blue-600 hover:text-blue-800"
//                     >
//                       Read more →
//                     </Link>
//                   </div>
//                 </Card>
//               </List.Item>
//             )}
//           />
//         ) : (
//           <Empty 
//             description={`No articles found with the tag "${displayTagName}"`} 
//             className="py-12"
//           />
//         )}
//       </div>
//     </div>
//   );
// } 