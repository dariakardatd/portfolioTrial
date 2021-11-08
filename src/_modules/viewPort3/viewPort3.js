"use strict";

export class ViewPort3 {
  constructor() {
    console.log("ViewPort3 module");

    // CIRCLE ROTATION

    this.angle = -90;

    this.circle = document.querySelector(".projectsListWrapperCircle");

    if (!this.circle) return;
    const body = document.querySelector("html");

    this.circleToRotate = document.querySelector(".viewPort__innerCircle");
    this.rotate();

    this.projectCircle = document.querySelector(".project");

    document.addEventListener("mousewheel", e => {
      this.angle += e.deltaY / 5;
      this.rotate();
    });

    this.circleToRotate.addEventListener("mouseenter", e => {
      body.style = "overflow:hidden";
    });

    this.circleToRotate.addEventListener("mouseleave", e => {
      body.style = "overflow:visible";
    });

    // PROJECTS SNICKPICK

    const projectList = document.querySelectorAll(".insideLink");
    console.log(projectList);

    // const imgContainer = document.querySelectorAll(".imgContainer");
    // console.log(imgContainer);

    // PROJECTS LIST

    for (let i = 0; i < projectList.length; i++) {
      const project = projectList[i];
      console.log(project);

      // IMAGES LIST

      // const imgContainer = document.querySelectorAll(".imgContainer");
      // console.log(imgContainer);

      /*       for (let i = 0; i < imgContainer.length; i++) {
        const img = imgContainer[i];
        console.log(img); */

      project.addEventListener("mouseover", e => {
        console.log(e.currentTarget.id);
        const image = document.querySelector(
          "[data-img='" + e.currentTarget.id + "']"
        );
        console.log(image);
        project.style = "-webkit-text-stroke: 2px white; color: transparent";
        image.style = "opacity:1;";
      });

      project.addEventListener("mouseleave", e => {
        const image = document.querySelector(
          "[data-img='" + e.currentTarget.id + "']"
        );
        project.style = "color: #fe0f0a";
        image.style = "opacity:0";
      });
    }

    // const imgContainer = document.querySelectorAll(".imgContainer");
    // console.log(imgContainer);
    // for (let i = 0; i < projectList.length; i++) {
    //   const img = imgContainer [i];
    //   console.log(img);
    // }

    //     projectOver.addEventListener ('mouseover', e => {
    //     img.style = "display:none";
    // });
  }

  rotate() {
    this.circle.style = "transform:rotate(" + this.angle + "deg)";
  }
}
