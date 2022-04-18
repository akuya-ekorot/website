export default function PageContainer(props) {
  return (
    <div className="max-w-[800px] flex flex-col gap-[40px] py-[60px] mx-auto">
      {props.children}
    </div>
  );
}
