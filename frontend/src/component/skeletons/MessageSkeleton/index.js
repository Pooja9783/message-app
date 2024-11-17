const MessageSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 w-[850px]">
      {/* Skeleton from the right */}
      <div className="flex items-center gap-4 justify-end">
        <div className="flex flex-col gap-4 items-end">
          <div className="skeleton h-4 w-[300px]"></div>
          <div className="skeleton h-4 w-[440px]"></div>
        </div>
        <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
      </div>
      {/* Skeleton from the left */}
      <div className="flex items-center gap-4">
        <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
        <div className="flex flex-col gap-4">
          <div className="skeleton h-4 w-[300px]"></div>
          <div className="skeleton h-4 w-[440px]"></div>
        </div>
      </div>

      {/* Divider */}
      <div className="skeleton h-[2px] my-3 w-[800px]"></div>
    </div>
  );
};

export default MessageSkeleton;
