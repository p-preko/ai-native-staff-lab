import { TodaySection } from '../today-section';
import { getActiveProjects, getTodayFocus } from '../../lib/mock-data';

export async function TodayContent() {
  const [activeProjects, focusItems] = await Promise.all([
    getActiveProjects(),
    getTodayFocus(),
  ]);

  return (
    <TodaySection activeProjects={activeProjects} focusItems={focusItems} />
  );
}
