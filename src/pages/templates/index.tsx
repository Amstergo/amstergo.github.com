import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import Link from "next/link";

const templates = [
  {
    id: 1,
    title: "4",
    size: "10x15",
    count: 4,
  },
  {
    id: 2,
    title: "6",
    size: "10x10",
    count: 6,
  },
  {
    id: 3,
    title: "9",
    size: "10x15",
    count: 9,
  },
  {
    id: 4,
    title: "12",
    size: "10x10",
    count: 12,
  },
];
const Index = () => {
  return (
    <Main meta={<Meta title="templates photo" description="choose template" />}>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl">Оберiть розмiр набору</h1>
        <div className="flex justify-between items-center">
          {templates.map((t) => (
            <div key={t.id} className="bg-gray-200 px-10 py-12 m-2 text-center">
              <h1>{t.title} фото</h1>
              <img src="#" alt="" />
              <p>{t.size} см</p>
              <Link
                rel="stylesheet"
                href={`templates/${t.id}?count=${t.count}`}
                className="px-5 py-2 bg-gray-400 hover:no-underline hover:border-0 hover:opacity-70"
              >
                Обрати
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
};

export default Index;
