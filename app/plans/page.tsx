import type { Metadata } from "next";
import PlanCard from "@/app/components/PlanCard";
import { getPlans } from "@/lib/plans";

export const metadata: Metadata = {
  title: "プラン一覧 | たびプラン",
};

export default async function PlansPage() {
  const plans = await getPlans();

  return (
    <section className="section">
      <h1 className="section__title">プラン一覧</h1>
      <p className="section__lead">全{plans.length}件のプランがあります。</p>
      <div className="plan-grid">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  );
}
