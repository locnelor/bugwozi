import dayjs from "dayjs"
import { useMemo } from "react"


const ArchivesPage = () => {
  const arr = new Array(100).fill(0).map((_, index: number) => {
    return {
      title: "文章标题",
      createAt: dayjs().subtract(index / 3, "month"),
      id: "1",
    }
  })
  const list = useMemo(() => {
    const l = [];
    const currentDate = dayjs();
    let currentYear = currentDate.year();
    let currentMonth = currentDate.month();
    const pushYear = () => {
      l.push({
        title: currentYear,
        id: currentYear,
      })
    }
    const pushMonth = () => {
      l.push({
        title: currentMonth + "月",
        id: `${currentYear}-${currentMonth}`,
      })
    }
    pushYear()
    pushMonth()
    for (const item of arr) {
      const year = item.createAt.year();
      const month = item.createAt.month();
      const date = item.createAt.format("MM-DD");
      if (year !== currentYear) {
        currentYear = year;
        pushYear()
        currentMonth = month;
        pushMonth()
      }
      if (month !== currentMonth) {
        currentMonth = month;
        pushMonth()
      }
      l.push({
        title: date,
        id: item.id,
        content: item.title
      })
    }
    return l;
  }, [arr])
  return (
    <div>
      {list.map(({
        title,
        content
      }, key) => {
        return (
          <div className="h-10  flex gap-2" key={key}>
            <div className="w-20">{title}</div>
            <div className="h-full bg-blue-400 mx-5 flex items-center" style={{ width: 1 }}>
              <div style={{ width: 20 }} className="h-5 rounded-full bg-blue-400"></div>
            </div>
            <div className="grow">{content}</div>
          </div>
        )
      })}
    </div>
  )
}
export default ArchivesPage