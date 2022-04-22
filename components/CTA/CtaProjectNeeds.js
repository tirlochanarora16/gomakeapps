import useCta from "../../hooks/use-cta";
import style from "../../styles/components/Cta.module.scss";

const CtaProjectNeedsInput = ({ id, label }) => {
  const inputChangeHandler = useCta();

  return (
    <div className={style["cta__projectNeeds--item"]}>
      <input type="checkbox" id={id} onChange={inputChangeHandler} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

const projectNeedsItems = [
  {
    id: "mobileApplications",
    label: "Application(s) Mobile(s)",
  },
  {
    id: "animatedVideos",
    label: "Vidéo(s) explicative(s) animée(s)",
  },
  {
    id: "webPlatforms",
    label: "Plateforme(s) Web",
  },
  {
    id: "graphicDesign",
    label: "Design graphique",
  },
  {
    id: "webRedesign",
    label: "Site internet ou refonte web",
  },
  {
    id: "seo",
    label: "Service d’optimisation SEO",
  },
];

const CtaProjectNeeds = () => {
  return (
    <>
      <p className={style["cta__question"]}>
        De quoi aurez-vous besoin pour ce projet ?
      </p>
      <div className={style["cta__projectNeeds--container"]}>
        {projectNeedsItems.map((item, index) => (
          <CtaProjectNeedsInput id={item.id} label={item.label} key={index} />
        ))}
      </div>
    </>
  );
};

export default CtaProjectNeeds;
