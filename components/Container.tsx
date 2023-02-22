export default function Container({ children }) {
  return (
    <div className="flex max-h-screen px-5% py-20% landscape:py-5% landscape:max-h-80%">
      {children}
    </div>
  );
}
