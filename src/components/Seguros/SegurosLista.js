import SegurosCard from "./SegurosCard";

export default function SegurosLista({ plans, variant = "home" }) {
  return (
    <>
      {plans.map((plan, index) => (
        <SegurosCard
          key={plan.title}
          {...plan}
          className={index === 0 ? "fadeInLeft" : "fadeInRight"}
          data-anime={
            variant === "home" ? index * 200 + 200 : index * 200 + 200
          }
        />
      ))}
    </>
  );
}
