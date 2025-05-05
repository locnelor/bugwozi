

const CategoryPage = () => {
  return (
    <div>

    </div>
  )
}
export default CategoryPage
// "use client";

// import { Card, List, Tag, Empty, Breadcrumb } from "antd";
// import { 
//   CalendarOutlined, 
//   CommentOutlined, 
//   TagsOutlined, 
//   HomeOutlined,
//   FolderOutlined 
// } from "@ant-design/icons";
// import Link from "next/link";

// interface CategoryPageProps {
//   params: {
//     slug: string;
//   };
// }

// interface Post {
//   id: string;
//   title: string;
//   date: string;
//   excerpt: string;
//   tags: string[];
//   comments: number;
// }

// interface CategoryData {
//   name: string;
//   description: string;
//   posts: Post[];
// }

// interface Categories {
//   [key: string]: CategoryData;
// }

// export default function CategoryPage() {
//   // const { slug } = params;
//   // const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);
  
//   // Mock category data
//   const categories: Categories = {
//     "programming": {
//       name: "Programming",
//       description: "Articles about general programming concepts, algorithms, and best practices.",
//       posts: [
//         {
//           id: "1",
//           title: "Getting Started with Next.js",
//           date: "2023-05-15",
//           excerpt: "Learn how to set up a Next.js project and explore its key features.",
//           tags: ["Next.js", "React", "Web Development"],
//           comments: 5,
//         }
//       ]
//     },
//     "css": {
//       name: "CSS",
//       description: "Tips, tricks, and tutorials about CSS styling and frameworks.",
//       posts: [
//         {
//           id: "2",
//           title: "Tailwind CSS Best Practices",
//           date: "2023-06-20",
//           excerpt: "Discover the most efficient ways to use Tailwind CSS in your projects.",
//           tags: ["Tailwind", "CSS", "Styling"],
//           comments: 8,
//         }
//       ]
//     },
//     "typescript": {
//       name: "TypeScript",
//       description: "Everything related to TypeScript development and type systems.",
//       posts: [
//         {
//           id: "3",
//           title: "Understanding TypeScript Generics",
//           date: "2023-07-10",
//           excerpt: "A comprehensive guide to using generics in TypeScript.",
//           tags: ["TypeScript", "JavaScript", "Programming"],
//           comments: 3,
//         }
//       ]
//     },
//     "react": {
//       name: "React",
//       description: "Tutorials and articles focused on React.js development.",
//       posts: [
//         {
//           id: "4",
//           title: "State Management in React",
//           date: "2023-07-05",
//           excerpt: "Comparing different state management approaches in React applications.",
//           tags: ["React", "State Management", "JavaScript"],
//           comments: 7,
//         }
//       ]
//     },
//     "next.js": {
//       name: "Next.js",
//       description: "Guides and tutorials for Next.js framework.",
//       posts: [
//         {
//           id: "6",
//           title: "Building a Blog with Next.js and Ant Design",
//           date: "2023-08-15",
//           excerpt: "A guide on how to build a beautiful blog using Next.js and Ant Design.",
//           tags: ["Next.js", "Ant Design", "Blog"],
//           comments: 2,
//         }
//       ]
//     },
//     "web development": {
//       name: "Web Development",
//       description: "Articles covering various aspects of web development.",
//       posts: [
//         {
//           id: "5",
//           title: "Year in Review: Web Development Trends",
//           date: "2022-12-28",
//           excerpt: "Looking back at the most important web development trends of 2022.",
//           tags: ["Web Dev", "Trends", "Year Review"],
//           comments: 10,
//         }
//       ]
//     }
//   };

//   // const category = categories[slug.toLowerCase()] || {
//   //   name: categoryName,
//   //   description: `Articles categorized as ${categoryName}`,
//   //   posts: []
//   // };

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
//               title: <Link href="/categories">Categories</Link>,
//             },
//             {
//               // title: category.name,
//             },
//           ]}
//         />

//         <div className="mb-8">
//           <h1 className="text-3xl font-bold">
//             <FolderOutlined className="mr-2" />{category.name}
//           </h1>
//           <p className="mt-2 text-gray-600">{category.description}</p>
//           <div className="mt-2 text-gray-500">
//             Found {category.posts.length} article{category.posts.length !== 1 ? 's' : ''}
//           </div>
//         </div>

//         {category.posts.length > 0 ? (
//           <List
//             itemLayout="vertical"
//             dataSource={category.posts}
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
//                     {post.tags.map((tag: string) => (
//                       <Tag key={tag} color="processing" icon={<TagsOutlined />}>
//                         <Link href={`/tag/${tag.toLowerCase()}`} className="text-inherit">
//                           {tag}
//                         </Link>
//                       </Tag>
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
//             description={`No articles found in the ${category.name} category`} 
//             className="py-12"
//           />
//         )}
//       </div>
//     </div>
//   );
// } 