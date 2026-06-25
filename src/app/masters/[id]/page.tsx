import { MOCK_MASTERS } from "@/types";
import MasterProfileClient from "./MasterProfileClient";

export function generateStaticParams() {
  return MOCK_MASTERS.map((master) => ({
    id: master.id,
  }));
}

export default async function MasterProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <MasterProfileClient id={id} />;
}
