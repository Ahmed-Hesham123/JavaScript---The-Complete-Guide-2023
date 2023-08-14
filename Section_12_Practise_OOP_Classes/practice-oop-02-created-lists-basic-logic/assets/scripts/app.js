class Tooltip {}

class ProjectItem {}

class ProjectList {
  constructor(type) {
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    console.log(prjItems);
  }
}

class App {
  static init() {
    const activeProjectsList = new ProjectList("active");
    const finishProjectsList = new ProjectList("finish");
  }
}

App.init();
