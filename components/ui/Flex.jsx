export const Flex = ({ className, children }) => {
  return <div className={cn("flex", className)}>{children}</div>;
};
