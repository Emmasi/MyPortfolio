type ListProps = {
  title: string;
  isId:boolean;
  data: {
    heading: string;
    text?: string[];
    list?: string[];
  }[];
};

export default function List({ title,data, isId }: ListProps) {
  const columns = data.length === 3 ? "grid-cols-3" : "grid-cols-4";
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">{title}</h2>
        <div className={`grid ${columns} gap-6`} id={isId ? "references" : ""}>
          {data.map((item, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-gray-800 border-b-2 border-customBlue pb-2 mb-4">
                {item.heading}
              </h3>
              <ul className="space-y-2">
                {(item.text || item.list || []).map((x, textIndex) => (
                  <li key={textIndex} className="text-gray-600">
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
