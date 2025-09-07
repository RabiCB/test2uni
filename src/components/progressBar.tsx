export default function ProgressBar() {
  return (
    <div className="relative w-full h-1 bg-gray-200 rounded overflow-hidden">
     
        <div className="absolute top-0 left-0 h-full bg-blue-500 animate-progress"></div>
      
    </div>
  );
}
