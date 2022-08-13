import { Leaderboard } from "../components/Leaderboard";
import { Layout } from "../components/Layout";
import { LayoutContent } from "../components/LayoutContent";

export default function Home() {
  return (
    <Layout>
      <LayoutContent>
        <Leaderboard />
      </LayoutContent>
    </Layout>
  );
}
