export default function LightBackground(props) {
  return (
    <div className="bg-white px-[30px] py-[30px] shadow-2xl rounded-3xl">
      {props.children}
    </div>
  );
}
