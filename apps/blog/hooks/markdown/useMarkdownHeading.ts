import { useMemo } from "react";

type Heading = {
  depth: number; // 标题级别：1-6
  text: string;  // 标题内容
};
export const useMarkdownHeading = (markdown: string) => {
  return useMemo(() => {
    const headingRegex = /^(#{1,6})\s+(.*)$/gm;
    const headings: Heading[] = [];
    let match;

    while ((match = headingRegex.exec(markdown)) !== null) {
      const [, hashes, text] = match;
      headings.push({
        depth: hashes.length,
        text: text.trim(),
      });
    }
    return headings;
  }, [markdown])
}
export default useMarkdownHeading

type StructHeading = {
  title: string
  key: string
  children?: StructHeading[]
}
export const useStructMarkdownHeading = (markdown: string) => {
  const headings = useMarkdownHeading(markdown)
  return useMemo(() => {
    const struct = [];
    const makeStruct = (heading: Heading) => {
      return {
        title: heading.text,
        key: heading.text
      } as StructHeading
    }
    struct.push(makeStruct(headings[0]));
  }, [headings])
}