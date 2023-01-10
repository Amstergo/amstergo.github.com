import { useRouter } from "next/router";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import { PhotosTemplate } from "@/components/PhotosTemplate";

const Templates = () => {
  const router = useRouter();

  return (
    <Main meta={<Meta title="templates photo" description="choose template" />}>
      <PhotosTemplate count={Number(router.query.count)} />
    </Main>
  );
};

export default Templates;
