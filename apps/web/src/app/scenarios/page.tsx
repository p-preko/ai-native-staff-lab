import { ScenariosPage } from '@/features/scenarios';

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default function Scenarios({ searchParams }: PageProps) {
  return <ScenariosPage searchParams={searchParams} />;
}
