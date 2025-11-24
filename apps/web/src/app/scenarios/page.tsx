import { ScenariosPage } from '@/features/scenarios';
import { type ScenariosSearchParams } from '@/features/scenarios/lib/validation';

interface PageProps {
  searchParams: Promise<ScenariosSearchParams>;
}

export default function Scenarios({ searchParams }: PageProps) {
  return <ScenariosPage searchParams={searchParams} />;
}
