---
title: Editing this website
description: How to edit this site
cover: internal.webp
status: published
category: internal
date: 2023-11-14
---
[Praxis](https://praxis.nyc/) uses [Hugo](https://gohugo.io/) framework and is hosted on [Gitlab](https://gitlab.com/praxis.nyc/praxis.nyc.gitlab.io/).

Pages are [markdown](https://www.markdownguide.org/basic-syntax/) + frontmatter on Any page under `content` folder will be visible on the website, using format: `praxis.nyc/(folder name)/(filename minus .md)`

To edit pages you'll need to:

1. Learn [markdown](https://www.markdownguide.org/basic-syntax/) basics
2. Create a [gitlab account](https://gitlab.com/users/sign_up)
3. Inform team to be added to repo's [project members](https://gitlab.com/praxis.nyc/praxis.nyc.gitlab.io/-/project_members)
4. Visit [Gitlab IDE](https://gitlab.com/-/ide/project/praxis.nyc/praxis.nyc.gitlab.io/edit/main/-/content/) to edit
5. Ask around for content templates, so frontmatter is correct
6. Commit all your changes (you'll need a message)

Troubleshooting:

Once commited, gitlab runs [Hugo build pipeline](https://gitlab.com/praxis.nyc/praxis.nyc.gitlab.io/-/pipelines), updating site. Sometimes pipeline fails and site is not updated. Contact team if that's the case.