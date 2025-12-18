"use client";

export default function ProjectDetailsImageGrid({items = []}) {
  return (
    <div className="mxd-project__block no-margin">
      <div className="mxd-project-cards">
        <div className="container-fluid px-0">
          <div className="row gx-0">
            {items.map((item, index) => (
              <div key={index} className={`col-12 col-xl-${item.col} mxd-project-cards__item mxd-grid-item ${item.animation}`}>
                <div className={`mxd-project-cards__inner ${item.align || ""} ${item.bg || "bg-base-tint"} radius-m`}>
                  <img src={item.image} alt={item.alt || "Project Preview"} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
