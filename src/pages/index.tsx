import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import Link from "next/link";

const Index = () => {
  return (
    <Main
      meta={
        <Meta title="photo resize" description="photo resize description" />
      }
    >
      <div>
        <Link href="/templates/">Выбрать шаблон</Link>
      </div>
    </Main>
  );
};

export default Index;
