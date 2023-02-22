export default function Container({ children }) {
  return (
    <div className="box-content h-screen px-5% py-20% flex-wrap">
      {children}
    </div>
  );
}
