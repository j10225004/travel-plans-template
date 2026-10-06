// 旅行プランのデータを取り出す場所。
// 今は data/plans.json から読み込んでいます。第5週でここを Supabase からの読み込みに差し替えます。
import plansData from "@/data/plans.json";

export type Plan = {
  id: number;
  title: string;
  area: string;
  destination: string;
  latitude: number;
  longitude: number;
  days: number;
  price: number;
  summary: string;
  highlights: string[];
};

const plans: Plan[] = plansData;

export async function getPlans(): Promise<Plan[]> {
  return plans;
}

export async function getFeaturedPlans(count = 3): Promise<Plan[]> {
  return plans.slice(0, count);
}

export function formatPrice(price: number): string {
  return `${price.toLocaleString("ja-JP")}円〜`;
}
