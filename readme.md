# requesitos

- node.js
- Docker
- Docker-compose

para correr el projecto se debe correr el siguente comando

```
  docker run --name ecoturimos-pg -p 5432:5432 -e POSTGRES_PASSWORD=ecoturismo -d  postgres
```