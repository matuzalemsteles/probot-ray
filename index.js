const keywords = require("./keywords");

async function hasKeywordsInPr(context, callback) {
  console.log(context.payload.action, context.payload.pull_request.body);

  const issues = keywords(context.payload.pull_request.body);
  if (issues.length > 0) {
    await issues.forEach(async issue => {
      if (typeof callback === 'function') await callback(issue);
    });
  }
  return;
}

function opened(context) {
  return hasKeywordsInPr(context, (issue) => {
    const params = context.issue({
      number: issue,
      labels: ["in-progress"]
    });

    context.github.issues.addLabels(params);
  });
}

function closed(context) {
  return hasKeywordsInPr(context, (issue) => {
      const progress = context.issue({
        number: issue,
        name: "in-progress"
      });

      const done = context.issue({
        number: issue,
        labels: ["done"]
      });

      const comment = context.issue({
        number: issue,
        body: "Hey, Your issue has been resolved 🎉, Thanks!"
      });

      context.github.issues.removeLabel(progress);
      context.github.issues.addLabels(done);
      context.github.issues.createComment(comment);
  });
}

function reopened(context) {
  return hasKeywordsInPr(context, (issue) => {
      const progress = context.issue({
        number: issue,
        labels: ["in-progress"]
      });

      const done = context.issue({
        number: issue,
        name: "done"
      });

      const comment = context.issue({
        number: issue,
        body: "😱 Oh my God! The pr that solved your solution has been reopened, let's solve it 👊🏼!"
      });

      context.github.issues.removeLabel(done);
      context.github.issues.addLabels(progress);
      context.github.issues.createComment(comment);
  });
}

module.exports = robot => {
  console.log("Yay, the app was loaded!");

  robot.on("pull_request.opened", opened);

  robot.on("pull_request.reopened", reopened);

  robot.on("pull_request.editedf", opened);

  robot.on("pull_request.closed", closed);
};
