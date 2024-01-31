function DefaultCardLayout({ children, padding = 6 }: any) {
  return <div className={`p-${padding} bg-white rounded-lg  `}>{children}</div>;
}

export default DefaultCardLayout;
