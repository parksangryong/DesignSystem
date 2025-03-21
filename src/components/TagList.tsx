import { useState } from "react";
import TagButton from "./TagButton";

interface TagListProps<T extends string> {
  tagList: T[];
  onTagClick: (tag: T) => void;
}

const TagList = <T extends string>({
  tagList,
  onTagClick,
}: TagListProps<T>) => {
  const [selectedTag, setSelectedTag] = useState<T>(tagList[0]);

  return (
    <div
      className="flex gap-x-4"
      onClick={(event) => {
        const eventTarget = event.target as HTMLButtonElement;
        const tag = eventTarget.textContent as T;
        onTagClick(tag);
      }}
    >
      {tagList.map((tag) => (
        <TagButton
          key={tag}
          isChecked={tag === selectedTag}
          onClick={() => setSelectedTag(tag)}
        >
          {tag}
        </TagButton>
      ))}
    </div>
  );
};

export default TagList;
