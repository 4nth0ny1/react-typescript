type OscarProps = {
  children: React.ReactNode; // passing a react component
};

export const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};
