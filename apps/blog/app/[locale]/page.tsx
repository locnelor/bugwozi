import classNames from "classnames";
export default function HomePage() {
  const cards = [{
    name: "最新文章",
    posts: [{
      title: "React 18 新特性",
      date: "2023-01-01",
      id: "1",
      avatar: {},//user
      tags: [],//标签
      categories: {},// 类别
    }, {
      title: "React 18 新特性",
      date: "2023-01-01",
      id: "2",
      avatar: {},//user
      tags: [],//标签
      categories: {},// 类别
    }],
    id: "1",
    avatar: ""
  }, {
    name: "实用工具",
    posts: [],
    id: "2",
    avatar: ""
  }, {
    name: "枯燥的代码",
    posts: [],
    id: "3",
    avatar: ""
  }, {
    name: "生活动态",
    posts: [],
    id: "4",
    avatar: ""
  }]
  return (
    <div>
      {cards.map((card, index) => {
        return (
          <div
            key={card.id}
            className={classNames(
              "p-8 rounded-2xl mb-4",
              !!(index % 2) ? "bg-gray-200" : "bg-gray-100"
            )}
          >
            <div className="text-2xl">{card.name}</div>
            <div className="flex flex-col gap-2">
              {card.posts.map((post) => {
                return (
                  <div key={post.id} className="mb-2 p-4 border-gray-400 border rounded cursor-pointer">
                    <div className="text-xl">{post.title}</div>
                    <div className="text-gray-500">{post.date}</div>
                    <div className="flex gap-2">
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  );
}
