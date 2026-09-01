type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-280 px-7 md:px-11 lg:px-2 ${className}`}
    >
      {children}
    </div>
  );
}
