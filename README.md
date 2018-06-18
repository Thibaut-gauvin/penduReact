## Jeu du pendu React

React tutorial


#### Prerequisites

Install [Docker](https://www.docker.com/) on your system.

- [Install instructions](https://docs.docker.com/installation/mac/) for Mac OS X
- [Install instructions](https://docs.docker.com/installation/ubuntulinux/) for Ubuntu
- [Install instructions](https://docs.docker.com/engine/installation/windows/) for Windows (prefer "Docker For Windows" than deprecated "Docker Toolbox")


#### Installation:

A Makefile is used to provide some useful shortcuts for manipulating docker containers

- **Run following command :**

        $ make start

- **Done, visit http:localhost:3000**


- **Other Make tasks :**
    
        +-----------------+--------------------------------------------------------------------+
        | Recipes         | Utility                                                            |
        +-----------------+--------------------------------------------------------------------+
        | start           | Install dependencies and start development server                  |
        | ssh             | Start new bash terminal inside the Nodejs Container                |
        | lint            | Lint js code                                                       |
        | lint.fix        | Lint & Fix js code                                                 |
        | build.prod      | Build app for production                                           |
        | release.demo    | Create new release of app, demo url is localhost:8080              |
        | release.prod    | Package new release of app for production                          |
        +-----------------+--------------------------------------------------------------------+
