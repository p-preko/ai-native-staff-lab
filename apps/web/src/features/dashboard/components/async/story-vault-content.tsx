import { StoryVaultSection } from '../story-vault-section';
import { getDashboardStats, getRecentStories } from '../../lib/mock-data';

export async function StoryVaultContent() {
  const [stats, stories] = await Promise.all([
    getDashboardStats(),
    getRecentStories(),
  ]);

  return <StoryVaultSection stats={stats} stories={stories} />;
}
