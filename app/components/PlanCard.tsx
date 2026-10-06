import { formatPrice, type Plan } from "@/lib/plans";

export default function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article className="plan-card">
      <div className="plan-card__visual" data-area={plan.area}>
        <span>{plan.destination}</span>
      </div>
      <div className="plan-card__body">
        <p className="plan-card__meta">
          {plan.area}・{plan.days - 1}泊{plan.days}日
        </p>
        <h3 className="plan-card__title">{plan.title}</h3>
        <p className="plan-card__summary">{plan.summary}</p>
        <p className="plan-card__price">{formatPrice(plan.price)}</p>
      </div>
    </article>
  );
}
