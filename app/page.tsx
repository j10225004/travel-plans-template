import Link from "next/link";
import PlanCard from "@/app/components/PlanCard";
import { getFeaturedPlans } from "@/lib/plans";

export default async function HomePage() {
  const plans = await getFeaturedPlans();

  return (
    <>
      <section className="hero">
        <h1 className="hero__title">次の休みは、どこへ行こう。</h1>
        <p className="hero__lead">季節と予算に合わせて選べる旅行プランをご紹介します。</p>
        <Link href="/plans" className="button">
          プランを見る
        </Link>
      </section>

      <section className="section">
        <h2 className="section__title">おすすめのプラン</h2>
        <div className="plan-grid">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>
    </>
  );
}
