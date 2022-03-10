// export const SiteLayout = ({children,menu=c=>null}) => {
export const SiteLayout = ({ children, menu }) => {
  return (
    <div className={'site-container'}>
      <div>{menu}</div>
      <div>{children}</div>
    </div>
  );
};
